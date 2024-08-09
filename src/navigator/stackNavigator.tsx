import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screns/LoginScreen';
import { PRIMARY_COLOR } from '../common/constantsColor';
import { screen2 } from '../screns/screen2';
import { screen3 } from '../screns/screen3';
import { screen4 } from '../screns/screen4';
import { screen5 } from '../screns/screen5';
export type RootStackParams = {
  Login: undefined,
  screen2: undefined,
  screen3: undefined,
  screen4: undefined,
  screen5: undefined,

}


const Stack = createStackNavigator<RootStackParams>();


export const StackNavigator = () => {
  return (
    <Stack.Navigator 
    screenOptions= {{
      cardStyle:{
        backgroundColor: PRIMARY_COLOR
      }
    }} >
      
      <Stack.Screen name="Login" options={{ headerShown: false }} component={LoginScreen} />
      <Stack.Screen name="screen2" options={{ headerShown: false }} component={screen2} />
      <Stack.Screen name="screen3" options={{ headerShown: false }} component={screen3} />
      <Stack.Screen name="screen4" options={{ headerShown: false }} component={screen4} />
      <Stack.Screen name="screen5" options={{ headerShown: false }} component={screen5} />
       
    </Stack.Navigator>
  )
}