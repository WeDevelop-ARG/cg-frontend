import React from 'react'
import Landing from './scenes/Landing'
import Checkout from './scenes/Checkout'
import Signin from './scenes/Signin'
import Signup from './scenes/Signup'
import ProductDetail from './scenes/ProductDetail'
import WannaSell from './scenes/WannaSell'
import NavBar from './components/Navbar'
import PublishProduct from './scenes/PublishProduct'
import MyProducts from './scenes/MyProducts'
import AuthContextProvider from './Contexts/AuthContext/provider'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App () {
  return (
    <AuthContextProvider>
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
          <Route path='/quiero-vender' exact>
            <WannaSell />
          </Route>
          <Route path='/mis-productos' exact>
            <MyProducts />
          </Route>
          <Route path='/mis-productos/nuevo' exact>
            <PublishProduct />
          </Route>
        </Switch>
      </Router>
    </AuthContextProvider>
  )
}

export default App
