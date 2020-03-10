import React, { useState } from 'react'
import UserPool from './UserPool'
import { useHistory } from 'react-router-dom'

export default () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const history = useHistory()

  const onSubmit = async event => {
    await event.preventDefault()

    await UserPool.signUp(email, password, [], null, (err, data) => {
      if (err) console.error(err)
      console.log(data)
    })

    await history.push('/')
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={email}
          onChange={event => setEmail(event.target.value)}
        />

        <input
          value={password}
          onChange={event => setPassword(event.target.value)}
        />

        <button type='submit'>Signup</button>
      </form>
    </div>
  )
}
