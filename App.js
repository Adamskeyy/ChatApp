import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
// components
import ChatroomList from './components/ChatroomList';
// utils
import { colors } from './utils';

const App = () => {
  return (
    <View style={styles.container}>
      <ChatroomList />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: colors.BACKGROUND_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
