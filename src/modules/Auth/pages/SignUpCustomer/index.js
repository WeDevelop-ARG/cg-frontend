import React, { useCallback, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { Formik } from 'formik'
import { schema, initialValues } from './schema'
import SignUpCustomerForm from '../../components/SignUpCustomerForm'
import AuthContext from '~/src/Contexts/AuthContext/context'
import Loading from '~/src/modules/MainApp/components/Loading'
import useSignup from '../../hooks/useSignupMutation'
import { logFormSubmit } from '~/src/utils/analytics'

import classes from './styles.module.scss'
import useSetPersonalInformationMutation from '~/src/modules/MainApp/hooks/useSetPersonalInformationMutation'

const SignUpCustomer = () => {
  const { handleAuth } = useContext(AuthContext)
  const { signup, loading: loadingSignup } = useSignup()
  const { setPersonalInformation, loading: loadingPersonalInformation } = useSetPersonalInformationMutation()
  const history = useHistory()

  const handleSubmit = useCallback(async (values) => {
    const {
      email,
      password,
      firstName,
      lastName,
      street,
      streetNumber,
      city,
      state,
      flat
    } = values
    const { id, token } = await signup({ email, password })

    await logFormSubmit('signup_form')

    handleAuth(token)

    await setPersonalInformation(id, {
      firstName,
      lastName,
      address: {
        street,
        streetNumber,
        city,
        state,
        apartment: flat
      }
    })

    await history.push('/home')
  }, [])

  if (loadingSignup || loadingPersonalInformation) return <Loading />

  return (
    <div className={classes.container}>
      <h2 className={classes.greetings}>Creá tu cuenta</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <SignUpCustomerForm />
      </Formik>
    </div>
  )
}

export default SignUpCustomer
