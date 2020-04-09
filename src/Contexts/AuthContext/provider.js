import React, { useState, useEffect } from 'react'
import AuthContext from './context'
import useCurrentUser from '../../hooks/useCurrentUserQuery'
import useLogout from '../../hooks/useLogoutMutation'

const Provider = (props) => {
  const { logout } = useLogout()
  const [hasToken, setHasToken] = useState(!!window.localStorage.getItem('token'))
  const [status, setStatus] = useState(false)
  const { currentUser, loading } = useCurrentUser()

  const handleLogout = async () => {
    window.localStorage.removeItem('token')
    await logout()
    setHasToken(false)
  }

  const handleAuth = (token) => {
    window.localStorage.setItem('token', token)
    setHasToken(true)
  }

  useEffect(() => {
    if (hasToken) {
      setStatus(true)
    } else {
      window.localStorage.removeItem('token')
      setStatus(false)
    }
  }, [hasToken])

  return (
    <AuthContext.Provider
      value={{
        status,
        currentUser,
        loading,
        handleAuth,
        handleLogout
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export default Provider
