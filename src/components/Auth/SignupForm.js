import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import useSignup from '../../hooks/useSignupMutation'

export default () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signup } = useSignup()

  const history = useHistory()

  const onSubmit = async event => {
    event.preventDefault()

    await signup({ name, email, password })

    await history.push('/')
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={name}
          id='name'
          onChange={event => setName(event.target.value)}
        />

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

        <button type='submit'>Signup</button>
      </form>
    </div>
  )
}
