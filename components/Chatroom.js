import React from 'react';
import { useState } from 'react';
// react native
import { Text, View, Image, StyleSheet } from 'react-native';
// utils
import { colors } from '../utils';

const Chatroom = ({ name, roomPic }) => {
  return (
    <View style={styles.container}>
      <View style={styles.chatroomTile}>
        <Image
          style={styles.logo}
          source={
            roomPic
              ? roomPic
              : 'https://i.ytimg.com/vi/LqlspMJdq8E/maxresdefault.jpg'
          }
        />
        <Text style={styles.chatroomName}>{name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  chatroomTile: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.WHITE_COLOR,
    borderRadius: 15,
    padding: 10,
  },
  chatroomName: {
    fontWeight: '500',
    marginLeft: 15,
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
  },
});

export default Chatroom;
