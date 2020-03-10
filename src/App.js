import React from 'react'
import Landing from './scenes/Landing'
import Checkout from './scenes/Checkout'
import Signin from './scenes/Signin'
import Signup from './scenes/Signup'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App () {
  return (
    <Router>
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
      </Switch>
    </Router>
  )
}

export default App
