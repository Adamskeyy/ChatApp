import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// utils
import { colors } from '../utils';

const Message = ({ sentByMe }) => {
  const messageContainer = sentByMe ? (
    <View style={styles.myMessageBox}>
      <Text style={styles.myMessageText}>General Kenobi!</Text>
    </View>
  ) : (
    <View style={styles.yourMessageBox}>
      <Text style={styles.yourMessageText}>Hello there!</Text>
    </View>
  );

  return messageContainer;
};

const styles = StyleSheet.create({
  myMessageBox: {
    padding: 10,
    backgroundColor: colors.SECONDARY_COLOR,
    marginRight: 10,
    marginLeft: 'auto',
    borderRadius: 10,
    borderBottomRightRadius: 0,
  },
  myMessageText: {
    color: colors.WHITE_COLOR,
  },
  yourMessageBox: {
    padding: 10,
    backgroundColor: colors.WHITE_COLOR,
    marginRight: 'auto',
    marginLeft: 30,
    borderRadius: 10,
    borderBottomLeftRadius: 0,
  },
  yourMessageText: {
    color: colors.BLACK_COLOR,
  },
});

export default Message;
