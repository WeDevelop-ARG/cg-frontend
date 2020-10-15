import React from 'react'
import withNavbar from '~/src/HOCs/withNavbar'
import Signin from './pages/Signin'
import SignUpCustomer from './pages/SignUpCustomer'
import SignUpSeller from './pages/SignUpSeller'

import { Switch, Route, useRouteMatch, withRouter } from 'react-router-dom'

function Auth () {
  const { path } = useRouteMatch()

  return (
    <Switch>
      <Route path={`${path}/ingresar`} exact>
        {withNavbar(<Signin />)}
      </Route>
      <Route path={`${path}/registro-comprador`} exact>
        {withNavbar(<SignUpCustomer />)}
      </Route>
      <Route path={`${path}/registro-vendedor`} exact>
        {withNavbar(<SignUpSeller />)}
      </Route>
    </Switch>
  )
}

export default withRouter(Auth)
