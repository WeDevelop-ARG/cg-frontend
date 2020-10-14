import React from 'react'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import Checkout from './pages/Checkout'
import withNavbar from '~/src/HOCs/withNavbar'

import { Switch, Route, useRouteMatch, withRouter } from 'react-router-dom'

function MainApp () {
  const { path } = useRouteMatch()

  return (
    <Switch>
      <Route path={`${path}`} exact>
        {withNavbar(<Home />)}
      </Route>
      <Route path={`${path}/product-detail/:groupId`} exact>
        {withNavbar(<ProductDetail />)}
      </Route>
      <Route path={`${path}/checkout/:groupId`} exact>
        {withNavbar(<Checkout />)}
      </Route>
    </Switch>
  )
}

export default withRouter(MainApp)
