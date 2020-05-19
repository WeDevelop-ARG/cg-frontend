import React from 'react'
// import Home from './scenes/Home'
import Checkout from './scenes/Checkout'
import Signin from './scenes/Signin'
import Signup from './scenes/Signup'
import ProductDetail from './scenes/ProductDetail'
import SellerLanding from './scenes/SellerLanding'
import PublishProduct from './scenes/PublishProduct'
import MyProducts from './scenes/MyProducts'
import MyPurchases from './scenes/MyPurchases'
import ComingSoon from './scenes/ComingSoon'
import AuthContextProvider from './Contexts/AuthContext/provider'
import { ToastProvider } from 'react-toast-notifications'
import Toast from './components/Toast'
import withNavbar from './HOCs/withNavbar'

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
          <Switch>
            {/*
            <Route path='/home' exact>
              <Home />
            </Route>
            */}
            <Route path='/checkout/:groupId' exact>
              {withNavbar(<Checkout />)}
            </Route>
            <Route path='/auth/signin' exact>
              {withNavbar(<Signin />)}
            </Route>
            <Route path='/auth/signup' exact>
              {withNavbar(<Signup />)}
            </Route>
            <Route path='/product-detail/:groupId' exact>
              {withNavbar(<ProductDetail />)}
            </Route>
            <Route path='/quiero-vender' exact>
              {withNavbar(<SellerLanding />)}
            </Route>
            <Route path='/mis-productos' exact>
              {withNavbar(<MyProducts />)}
            </Route>
            <Route path='/mis-productos/nuevo' exact>
              {withNavbar(<PublishProduct />)}
            </Route>
            <Route path='/mis-compras' exact>
              {withNavbar(<MyPurchases />)}
            </Route>
            <Route path='/' exact>
              {withNavbar(<ComingSoon />)}
            </Route>
          </Switch>
        </AuthContextProvider>
      </ToastProvider>
    </Router>
  )
}

export default App
