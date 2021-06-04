// apollo
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { setContext } from 'apollo-link-context';
import { split } from 'apollo-link';
// phoenix / absinthe
import * as AbsintheSocket from '@absinthe/socket';
import { createAbsintheSocketLink } from '@absinthe/socket-apollo-link';
import { Socket as PhoenixSocket } from 'phoenix';
import { hasSubscription } from '@jumpn/utils-graphql';
// env constants
import getEnvVars from '../environment';
const { token, httpEndpoint, wssEndpoint } = getEnvVars();

// http link
const httpLink = new HttpLink({ uri: httpEndpoint });

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${token}`,
    },
  };
});

const authedHttpLink = authLink.concat(httpLink);

// websocket
const phoenixSocket = new PhoenixSocket(wssEndpoint, {
  params: () => {
    return { token: token };
  },
});
const absintheSocket = AbsintheSocket.create(phoenixSocket);
const websocketLink = createAbsintheSocketLink(absintheSocket);

const link = split(
  (operation) => hasSubscription(operation.query),
  websocketLink,
  authedHttpLink
);

const cache = new InMemoryCache();

// apollo client
export const client = new ApolloClient({
  link,
  cache,
});
