import React from 'react'
import withNavbar from '~/src/HOCs/withNavbar'
import Index from './pages/Index'
import NewProduct from './pages/PublishProduct'

import { Switch, Route, useRouteMatch, withRouter } from 'react-router-dom'

function Auth () {
  const { path } = useRouteMatch()

  return (
    <Switch>
      <Route path={`${path}/nuevo`} exact>
        {withNavbar(<NewProduct />)}
      </Route>
      <Route path={`${path}`} exact>
        {withNavbar(<Index />)}
      </Route>
    </Switch>
  )
}

export default withRouter(Auth)
