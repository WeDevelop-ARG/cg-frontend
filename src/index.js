import React from 'react'
import ReactDOM from 'react-dom'
import './fonts/DMSans-Regular.ttf'
import './index.scss'
import App from './App'
import { initialize as initializeMercadoPago } from './MercadoPago'

import { ApolloProvider } from 'react-apollo'
import client from './apollo/configurations/client'

initializeMercadoPago()

const Root = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)

ReactDOM.render(<Root />, document.getElementById('root'))
