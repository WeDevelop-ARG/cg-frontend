import React from 'react'
import Landing from './scenes/Landing'
import Checkout from './scenes/Checkout'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App () {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <Landing />
        </Route>
        <Route path='/checkout/:productId/:groupId' exact>
          <Checkout />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
