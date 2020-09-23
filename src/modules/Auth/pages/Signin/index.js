import React, { useCallback, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { Formik } from 'formik'
import { schema, initialValues } from './schema'
import AuthContext from '~/src/Contexts/AuthContext/context'
import SigninForm from '../../components/SigninForm'
import Loading from '~/src/modules/MainApp/components/Loading'
import useLogin from '../../hooks/useLoginMutation'

import classes from './styles.module.scss'

const Signin = () => {
  const { handleAuth } = useContext(AuthContext)
  const { login, loading } = useLogin()
  const history = useHistory()

  const submitHandler = useCallback(async ({ email, password }) => {
    const { token } = await login({ email, password })

    handleAuth(token)
    await history.push('/mis-productos')
  }, [])

  if (loading) return <Loading />

  return (
    <div className={classes.container}>
      <h2 className={classes.greetings}>¡HOLA!</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={submitHandler}
        validateOnMount
      >
        <SigninForm />
      </Formik>
    </div>
  )
}

export default Signin
