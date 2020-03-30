import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import useLogin from '../../hooks/useLoginMutation'

export default () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useLogin()

  const history = useHistory()

  const onSubmit = async event => {
    event.preventDefault()

    await login({ email, password })

    await history.push('/')
  }

  return (
    <div>
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

        <button type='submit'>Signin</button>
      </form>
    </div>
  )
}
