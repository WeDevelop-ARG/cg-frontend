import React from 'react'
// import Home from './scenes/Home'
import Checkout from './scenes/Checkout'
import Signin from './scenes/Signin'
import Signup from './scenes/Signup'
import ProductDetail from './scenes/ProductDetail'
import SellerLanding from './scenes/SellerLanding'
import NavBar from './components/Navbar'
import PublishProduct from './scenes/PublishProduct'
import MyProducts from './scenes/MyProducts'
import MyPurchases from './scenes/MyPurchases'
import ComingSoon from './scenes/ComingSoon'
import AuthContextProvider from './Contexts/AuthContext/provider'
import { ToastProvider } from 'react-toast-notifications'
import Toast from './components/Toast'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App () {
  return (
    <Router>
      <ToastProvider
        autoDismiss
        components={{ Toast }}
        placement='bottom-right'
      >
        <AuthContextProvider>
          <NavBar />
          <Switch>
            {/*
            <Route path='/home' exact>
              <Home />
            </Route>
            */}
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
              <SellerLanding />
            </Route>
            <Route path='/mis-productos' exact>
              <MyProducts />
            </Route>
            <Route path='/mis-productos/nuevo' exact>
              <PublishProduct />
            </Route>
            <Route path='/mis-compras' exact>
              <MyPurchases />
            </Route>
            <Route path='/' exact>
              <ComingSoon />
            </Route>
          </Switch>
        </AuthContextProvider>
      </ToastProvider>
    </Router>
  )
}

export default App
