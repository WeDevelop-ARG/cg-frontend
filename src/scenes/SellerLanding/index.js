import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import LandingA from '../Landing'
import LandingB from '../LandingV2'
import firebase from 'firebase/app'
import 'firebase/analytics'
import 'firebase/remote-config'

const queryParams = () => {
  return new URLSearchParams(useLocation().search)
}

const SellerLanding = () => {
  const [Landing, setLanding] = useState()
  const redirect = queryParams().get('useLanding')

  useEffect(() => {
    if (redirect) {
      setLanding(redirect)
    } else if (process.env.NODE_ENV === 'production') {
      const remote = firebase.remoteConfig()
      remote.fetchAndActivate().then(() => {
        const whichLanding = remote.getString('seller_landing_page')
        setLanding(whichLanding)
        firebase.analytics().setUserProperties({ seller_landing_page: whichLanding })
      })
    } else {
      setLanding('A')
    }
  }, [])

  return Landing && Landing === 'A' ? <LandingA /> : <LandingB />
}

export default SellerLanding
