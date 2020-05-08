import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import LandingA from '../Landing'
import LandingB from '../LandingV2'
import firebase from 'firebase/app'
import 'firebase/remote-config'

const SellerLanding = () => {
  const [Landing, setLanding] = useState(null)
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const redirect = queryParams.get('useLanding')

  useEffect(() => {
    if (redirect) {
      setLanding(redirect === 'B' ? <LandingB /> : <LandingA />)
    } else if (process.env.NODE_ENV === 'production') {
      const remote = firebase.remoteConfig()
      remote.fetchAndActivate().then(() => {
        const whichLanding = remote.getString('seller_landing_page')
        setLanding(whichLanding === 'B' ? <LandingB /> : <LandingA />)
      })
    } else {
      setLanding(<LandingA />)
    }
  }, [])

  return Landing
}

export default SellerLanding
