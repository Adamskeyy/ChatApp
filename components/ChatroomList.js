import React from 'react';
// apollo
import { useQuery, gql } from '@apollo/client';
// react native
import { View, Text } from 'react-native';

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
    <Text key={id}>{name}</Text>
  ));

  return (
    <View>
      <Text>Rooms</Text>
      {roomsToDisplay}
    </View>
  );
};

export default ChatroomList;
