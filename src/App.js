import React from 'react'
import Landing from './scenes/Landing'
import Checkout from './scenes/Checkout'
import Signin from './scenes/Signin'
import Signup from './scenes/Signup'
import ProductDetail from './scenes/ProductDetail'
import NavBar from './components/Navbar'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App () {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path='/' exact>
          <Landing />
        </Route>
        <Route path='/checkout/:groupId' exact>
          <Checkout />
        </Route>
        <Route path='/auth/signin' exact>
          <Signin />
        </Route>
        <Route path='/auth/signup' exact>
          <Signup />
        </Route>
        <Route path='/product-detail/:groupId' exact>
          <ProductDetail />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
