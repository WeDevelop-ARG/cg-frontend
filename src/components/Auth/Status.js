import React, { useContext } from 'react'
import AuthContext from '../../Contexts/AuthContext/context'

export default () => {
  const { currentUser, handleLogout, status, loading } = useContext(AuthContext)
  return (
    <div>
      {status && !loading ? (
        <div>
          Hi {currentUser.name} .
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : 'Please login.'}
    </div>
  )
}
