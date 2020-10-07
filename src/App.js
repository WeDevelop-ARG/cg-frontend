import React from 'react'
// import Home from './scenes/Home'
import Checkout from './scenes/Checkout'
import ProductDetail from './scenes/ProductDetail'
import MyPurchases from './modules/UserProfile/pages/MyPurchases'
import MainApp from './modules/MainApp'
import Auth from './modules/Auth'
import SellerProducts from './modules/SellerProducts'
import SellerLanding from './modules/SellerLanding'
import AuthContextProvider from './Contexts/AuthContext/provider'
import { ToastProvider } from 'react-toast-notifications'
import Toast from './components/Toast'
import withNavbar from './HOCs/withNavbar'
import Home from './modules/Store/pages/Home'

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
            {
              <Route path='/home' exact>
                <Home />
              </Route>
            }
            <Route path='/checkout/:groupId' exact>
              {withNavbar(<Checkout />)}
            </Route>
            <Route path='/product-detail/:groupId' exact>
              {withNavbar(<ProductDetail />)}
            </Route>
            <Route path='/mis-compras' exact>
              {withNavbar(<MyPurchases />)}
            </Route>
            <Route path='/auth' component={Auth} />
            <Route path='/mis-productos' component={SellerProducts} />
            <Route path='/quiero-vender' component={SellerLanding} />
            <MainApp />
          </Switch>
        </AuthContextProvider>
      </ToastProvider>
    </Router>
  )
}

export default App
