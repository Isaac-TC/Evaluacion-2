import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screns/LoginScreen';
import { PRIMARY_COLOR } from '../common/constantsColor';
import { RegisterSreen } from '../screns/RegisterSreen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator 
    screenOptions= {{
      cardStyle:{
        backgroundColor: PRIMARY_COLOR
      }
    }} >
      
      <Stack.Screen name="Login" options={{ headerShown: false }} component={LoginScreen} />
      <Stack.Screen name="Register" options={{ headerShown: false }} component={RegisterSreen} />
    </Stack.Navigator>
  )
}