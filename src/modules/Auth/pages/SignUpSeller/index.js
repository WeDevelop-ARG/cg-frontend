import React, { useCallback, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { Formik } from 'formik'
import { schema, initialValues } from './schema'
import SignUpSellerForm from '../../components/SignUpSellerForm'
import AuthContext from '~/src/Contexts/AuthContext/context'
import Loading from '~/src/modules/MainApp/components/Loading'
import useSignup from '../../hooks/useSignupMutation'
import { logFormSubmit } from '~/src/utils/analytics'
import useCreateBusinessMutation from '~/src/modules/MainApp/hooks/useCreateBusinessMutation'

import classes from './styles.module.scss'

const SignUpSeller = () => {
  const { handleAuth } = useContext(AuthContext)
  const { signup, loading: loadingSignup } = useSignup()
  const { createBusiness, loading: loadingBusiness } = useCreateBusinessMutation()
  const history = useHistory()

  const handleSubmit = useCallback(async (values) => {
    const {
      name,
      email,
      password,
      street,
      streetNumber,
      city,
      state,
      flat,
      CUIT,
      businessVertical,
      AFIPCondition
    } = values
    const { id: userId, token } = await signup({ email, password })

    await logFormSubmit('signup_form')

    handleAuth(token)

    await createBusiness(userId, {
      fantasyName: name,
      realName: name,
      vertical: businessVertical,
      AFIPCondition,
      CUIT,
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

  if (loadingSignup || loadingBusiness) return <Loading />

  return (
    <div className={classes.container}>
      <h2 className={classes.greetings}>Creá tu cuenta</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <SignUpSellerForm />
      </Formik>
    </div>
  )
}

export default SignUpSeller
