import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import useLogin from '../../hooks/useLoginMutation'
import AuthContext from '../../Contexts/AuthContext/context'

import './styles.scss'

export default () => {
  const { handleAuth } = useContext(AuthContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useLogin()

  const history = useHistory()

  const onSubmit = async event => {
    event.preventDefault()

    const { token } = await login({ email, password })

    handleAuth(token)

    await history.push('/')
  }

  return (
    <div className='SignForm'>
      <form onSubmit={onSubmit}>
        <input
          value={email}
          id='email'
          onChange={event => setEmail(event.target.value)}
        />

        <input
          value={password}
          id='password'
          onChange={event => setPassword(event.target.value)}
        />

        <button type='submit'>Sign In</button>
      </form>
    </div>
  )
}
