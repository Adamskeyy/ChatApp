import React from 'react';
// apollo
import { useQuery, gql } from '@apollo/client';
// react native
import { View, Text, StyleSheet } from 'react-native';
// components
import Chatroom from './Chatroom';
// utils
import { colors } from '../utils';

const CHATROOMS = gql`
  query GetRoomsAndUsers {
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
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const roomsToDisplay = data.usersRooms.rooms.map(({ id, name, roomPic }) => (
    <Chatroom name={name} roomPic={roomPic} key={id} />
  ));

  return (
    <View>
      <Text style={styles.header}>Rooms</Text>
      {roomsToDisplay}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 40,
    flex: 1,
    backgroundColor: colors.PRIMARY_COLOR,
    color: colors.SECONDARY_COLOR,
    padding: 20,
    fontWeight: 700,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ChatroomList;
