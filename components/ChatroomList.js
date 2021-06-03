import React from 'react';
// apollo
import { useQuery, gql } from '@apollo/client';
// react native
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
// components
import ChatroomTile from './ChatroomTile';
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

const ChatroomList = ({ navigation }) => {
  const { loading, error, data } = useQuery(CHATROOMS);
  if (loading)
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );
  if (error) return <Text>Error</Text>;

  const roomsToDisplay = data.usersRooms.rooms.map(({ id, name, roomPic }) => (
    <TouchableOpacity key={id} onPress={() => navigation.navigate('Chat')}>
      <ChatroomTile name={name} roomPic={roomPic} />
    </TouchableOpacity>
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
