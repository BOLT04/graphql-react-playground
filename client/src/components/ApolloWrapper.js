/**
 * Wrap the root component with React Apollo functionality, so that all components in this tree 
 * are connected to the GraphQL API on the back end.
 */
import React, { Component } from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import App from '../App.js'

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql' //TODO: take this out to some configuration file. Its hardcorded now!!
})

class ApolloWrapper extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    )
  }
}

export default ApolloWrapper
