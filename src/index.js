import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'

import { ApolloProvider } from 'react-apollo'
import client from './apollo/configurations/client'

const Root = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)

ReactDOM.render(<Root />, document.getElementById('root'))
