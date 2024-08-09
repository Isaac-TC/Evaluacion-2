import 'react-native-gesture-handler';
import React from 'react'
import { LoginScreen } from './src/screns/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigator/stackNavigator';

 const App = () => {
  return (
    <NavigationContainer>
      
      <StackNavigator/>
    </NavigationContainer>
    
  )
}

export default App;