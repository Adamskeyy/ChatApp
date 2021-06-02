import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
// components
import ChatroomList from './components/ChatroomList';

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
    flex: 1,
    backgroundColor: '#dsd',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
