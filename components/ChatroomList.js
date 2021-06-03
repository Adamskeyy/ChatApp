import React from 'react';
// apollo
import { useQuery, gql } from '@apollo/client';
// react native
import { View, Text, StyleSheet } from 'react-native';
import { SimpleLineIcons, Ionicons } from '@expo/vector-icons';
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
      <View style={styles.navigation}>
        <Text style={styles.header}>Rooms</Text>
        <View style={styles.icons}>
          <View style={styles.icon}>
            <SimpleLineIcons
              name="magnifier"
              size={25}
              color={colors.SECONDARY_COLOR}
            />
          </View>
          <View style={styles.icon}>
            <Ionicons name="people" size={25} color={colors.SECONDARY_COLOR} />
          </View>
        </View>
      </View>
      {roomsToDisplay}
    </View>
  );
};

const styles = StyleSheet.create({
  navigation: {
    flex: 1,
    flexDirection: 'row',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingHorizontal: 15,
    paddingBottom: 10,
    paddingTop: 40,
    marginBottom: 15,
    overflow: 'hidden',
    backgroundColor: colors.PRIMARY_COLOR,
  },
  header: {
    fontSize: 30,
    flex: 1,
    color: colors.SECONDARY_COLOR,
    fontWeight: 700,
    justifyContent: 'center',
  },
  icons: {
    flexDirection: 'row',
  },
  icon: {
    backgroundColor: colors.WHITE_COLOR,
    borderRadius: '50%',
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
  },
});

export default ChatroomList;
