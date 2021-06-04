import React from 'react';
import { useState } from 'react';
// react-native
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
// utils
import { colors } from '../utils';
// components
import RoomNavigation from './RoomNavigation';
import Message from './Message';

const ChatroomWindow = () => {
  const [message, setMessageText] = useState('');
  // todo:
  // sendMessage mutation (for sending message)
  // messageAdded subscription (listening for every message)

  const handleMessageSend = () => {};

  return (
    <View style={styles.container}>
      <RoomNavigation />
      <Message sentByMe={false} />
      <Message sentByMe={true} />
      <View style={styles.inputBar}>
        <TextInput
          placeholder="Type new message..."
          style={styles.input}
          onChange={(e) => setMessageText(e.target.value)}
        />
        <TouchableHighlight onPress={() => alert(message)}>
          <View style={styles.icon}>
            <FontAwesome name="send" size={35} color={colors.SECONDARY_COLOR} />
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chatHistory: {
    flex: 1,
  },
  input: {
    height: 40,
    paddingLeft: 10,
    backgroundColor: colors.WHITE_COLOR,
    borderRadius: 10,
    borderBottomRightRadius: 0,
    flexGrow: 1,
  },
  inputBar: {
    marginTop: 'auto',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: colors.PRIMARY_COLOR,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 15,
    paddingHorizontal: 15,
    paddingBottom: 15,
  },
  icon: {
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
});

export default ChatroomWindow;
