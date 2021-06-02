import { registerRootComponent } from 'expo';
import React from 'react';
import { ApolloProvider } from '@apollo/client/react';
import { client } from './apollo';
import App from './App';

const index = () => {
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
};
registerRootComponent(index);
