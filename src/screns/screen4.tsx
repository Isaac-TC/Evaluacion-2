import React from 'react'
import { Button, StatusBar, Text, View } from 'react-native'
import { TitleComponet } from '../components/TitleComponet'
import { BodyComponent } from '../components/BodyComponent'
import { PRIMARY_COLOR } from '../common/constantsColor'
import { ImputComponent } from '../components/ImputComponent';
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { styles } from '../theme/appTheme'


export const screen4 = () => {
  const navigation = useNavigation();

    const handleComparison = (num1, num2) => {
        if (num1 >= num2) {
            return `${num1} is greater than or equal to ${num2}`;
        } else {
            return `${num1} is not greater than or equal to ${num2}`;
        }
    };
 
  return (
    <View>
    <StatusBar backgroundColor={PRIMARY_COLOR} />
    <TitleComponet title='Mayor o igual' />
    <BodyComponent> 
      <View>
      <ImputComponent 
      placeholder='numero1'
          name= 'numero 1'
          
         />
        
      
      
      </View>
      <TouchableOpacity 
        style={styles.contentInput}
         >
          <Text style={styles.textRedirect}>Preciona boton</Text>
        </TouchableOpacity>


      </BodyComponent>
      </View>

  )
}

