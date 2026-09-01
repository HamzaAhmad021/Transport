import 'react-native-gesture-handler'
import React from 'react';
import { View } from 'react-native';
import StackNavigation from './App/Navigations/StackNavigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex:1}}>
      <StackNavigation />
    </GestureHandlerRootView>
  )
};
export default App;