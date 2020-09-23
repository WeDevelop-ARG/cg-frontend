import React from 'react'
import withNavbar from '~/src/HOCs/withNavbar'
import Signin from './pages/Signin'
import Signup from './pages/Signup'

import { Switch, Route, useRouteMatch, withRouter } from 'react-router-dom'

function Auth () {
  const { path } = useRouteMatch()

  return (
    <Switch>
      <Route path={`${path}/signin`} exact>
        {withNavbar(<Signin />)}
      </Route>
      <Route path={`${path}/signup`} exact>
        {withNavbar(<Signup />)}
      </Route>
    </Switch>
  )
}

export default withRouter(Auth)
