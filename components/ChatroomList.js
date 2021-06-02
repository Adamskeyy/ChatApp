import React from 'react';
// apollo
import { useQuery, gql } from '@apollo/client';
// react native
import { View, Text } from 'react-native';
// components
import Chatroom from './Chatroom';

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
      <Text>Rooms</Text>
      {roomsToDisplay}
    </View>
  );
};

export default ChatroomList;
