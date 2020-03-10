import React, { useContext, useEffect } from 'react'
import { AccountContext } from './Accounts'

export default () => {
  const { getSession, logout, status, setStatus } = useContext(AccountContext)

  useEffect(() => {
    getSession()
      .then(session => {
        console.log('Session:', session)
        setStatus(true)
      })
  }, [])
  console.log(status)
  return (
    <div>
      {status ? (
        <div>
          You are logged in.
          <button onClick={logout}>Logout</button>
        </div>
      ) : 'Please login below.'}
    </div>
  )
}
