// apollo
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
} from '@apollo/client';
// env constants
import getEnvVars from '../environment';
const { token, endpoint } = getEnvVars();

const httpLink = new HttpLink({ uri: endpoint });

const authLink = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return forward(operation);
});

export const client = new ApolloClient({
  uri: endpoint,
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});
