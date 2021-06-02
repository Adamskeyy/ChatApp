import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// components
import Chat from './components/Chat';
// apollo
import {
  ApolloClient,
  InMemoryCache,
  gql,
  HttpLink,
  ApolloLink,
} from '@apollo/client';
// env constants
import getEnvVars from './environment';
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

const client = new ApolloClient({
  uri: endpoint,
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});

client
  .query({
    query: gql`
      query GetRoomsAndUsers {
        usersRooms {
          rooms {
            id
            name
            roomPic
          }
          user {
            email
            firstName
            id
            lastName
            profilePic
            role
          }
        }
      }
    `,
  })
  .then((result) => console.log(result));

const App = () => {
  console.log(token);
  return (
    <View style={styles.container}>
      <Text>CHAT APP</Text>
      <Chat />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
