import React from 'react';
// apollo
import { useQuery, gql } from '@apollo/client';
// react native
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
// components
import Chatroom from './Chatroom';
import RoomsNavigation from './RoomsNavigation';

const CHATROOMS = gql`
  query GetRooms {
    usersRooms {
      rooms {
        id
        name
        roomPic
      }
    }
  }
`;

const ChatroomList = () => {
  const { loading, error, data } = useQuery(CHATROOMS);
  if (loading)
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );
  if (error) return <Text>Error</Text>;

  const roomsToDisplay = data.usersRooms.rooms.map(({ id, name, roomPic }) => (
    <Chatroom name={name} roomPic={roomPic} key={id} />
  ));

  return (
    <View>
      <RoomsNavigation />
      {roomsToDisplay}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ChatroomList;
