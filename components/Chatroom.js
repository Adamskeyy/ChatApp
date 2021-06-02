import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
  },
});

const Chatroom = ({ name, roomPic }) => {
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <Image
        style={styles.logo}
        source={
          roomPic
            ? roomPic
            : 'https://i.ytimg.com/vi/LqlspMJdq8E/maxresdefault.jpg'
        }
      />
    </View>
  );
};

export default Chatroom;
