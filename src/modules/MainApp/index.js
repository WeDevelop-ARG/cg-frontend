import React, { useContext } from 'react'
import AuthContext from '~/src/Contexts/AuthContext/context'
import ComingSoon from './pages/ComingSoon'
import withNavbar from '~/src/HOCs/withNavbar'

import { Switch, Route, Redirect, withRouter } from 'react-router-dom'

function MainApp () {
  const { loading, status } = useContext(AuthContext)
  if (loading) return null

  return (
    <Switch>
      <Route path='/coming-soon' exact>
        {withNavbar(<ComingSoon />)}
      </Route>
      <Route path='/' exact>
        {status ? <Redirect to='/mis-productos' /> : <Redirect to='/coming-soon' />}
      </Route>
    </Switch>
  )
}

export default withRouter(MainApp)
