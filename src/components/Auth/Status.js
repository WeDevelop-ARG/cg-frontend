import React, { useState, useEffect } from 'react'
import useCurrentUser from '../../hooks/useCurrentUserQuery'
import useLogout from '../../hooks/useLogoutMutation'

export default () => {
  const { currentUser } = useCurrentUser()
  const { logout } = useLogout()
  const [status, setStatus] = useState(false)

  const handleLogout = async () => {
    await logout()
    await setStatus(false)
  }

  useEffect(() => {
    setStatus(!!currentUser)
  }, [currentUser])

  return (
    <div>
      {status ? (
        <div>
          Hi {currentUser.name} .
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : 'Please login below.'}
    </div>
  )
}
