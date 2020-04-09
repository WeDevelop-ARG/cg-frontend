
import React, { useState, useContext } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import useSignup from '../../hooks/useSignupMutation'
import AuthContext from '../../Contexts/AuthContext/context'

import './styles.scss'

export default () => {
  const { handleAuth } = useContext(AuthContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signup } = useSignup()

  const history = useHistory()

  const queryParams = () => {
    return new URLSearchParams(useLocation().search)
  }

  const redirectTo = queryParams().get('redirectTo')

  const onSubmit = async event => {
    event.preventDefault()

    const { token } = await signup({ name: 'USUARIO', email, password })

    handleAuth(token)

    await history.push(redirectTo || '/')
  }

  return (
    <div className='SignForm'>
      <form onSubmit={onSubmit}>
        <input
          type='email'
          value={email}
          placeholder='Email'
          id='email'
          onChange={event => setEmail(event.target.value)}
        />

        <input
          type='password'
          value={password}
          placeholder='Password'
          id='password'
          onChange={event => setPassword(event.target.value)}
        />

        <button type='submit'>Sign Up</button>
      </form>
    </div>
  )
}
