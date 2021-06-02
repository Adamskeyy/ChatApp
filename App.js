import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// components
import Chat from './components/Chat';
// apollo
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const endpoint = 'https://chat.thewidlarzgroup.com/api/graphiql';

const client = new ApolloClient({
  uri: endpoint,
  cache: new InMemoryCache(),
});

client
  .query(
    {
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
    },
    {
      options: {
        context: {
          headers: {
            authorization: `Bearer ${process.env.TOKEN}`,
          },
        },
      },
    }
  )
  .then((result) => console.log(result));

const App = () => {
  return (
    <View style={styles.container}>
      <Text>CHAT APP!!!! safdg</Text>
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
