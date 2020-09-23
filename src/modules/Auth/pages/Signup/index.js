import React, { useCallback, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { Formik } from 'formik'
import { schema, initialValues } from './schema'
import SignupForm from '../../components/SignupForm'
import AuthContext from '~/src/Contexts/AuthContext/context'
import Loading from '~/src/modules/MainApp/components/Loading'
import useSignup from '../../hooks/useSignupMutation'
import { logFormSubmit } from '~/src/utils/analytics'

import classes from './styles.module.scss'

const Signup = () => {
  const { handleAuth } = useContext(AuthContext)
  const { signup, loading } = useSignup()
  const history = useHistory()

  const handleSubmit = useCallback(async ({ email, password, firstName, lastName }) => {
    const { token } = await signup({ email, password, name: `${firstName} ${lastName}` })

    await logFormSubmit('signup_form')

    handleAuth(token)
    await history.push('/')
  }, [])

  if (loading) return <Loading />

  return (
    <div className={classes.container}>
      <h2 className={classes.greetings}>Creá tu cuenta</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <SignupForm />
      </Formik>
    </div>
  )
}

export default Signup
