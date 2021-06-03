import React from 'react';
// components
import ChatroomList from './components/ChatroomList';
import ChatroomWindow from './components/ChatroomWindow';
// routing
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// utils
import { colors } from './utils';

const Stack = createStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.BACKGROUND_COLOR,
  },
};

const App = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator initialRouteName="Chats">
        <Stack.Screen name="Chats" component={ChatroomList} />
        <Stack.Screen name="Chat" component={ChatroomWindow} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
