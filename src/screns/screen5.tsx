import React from 'react'
import { StatusBar, Text, View } from 'react-native'
import { PRIMARY_COLOR } from '../common/constantsColor'
import { TitleComponet } from '../components/TitleComponet'
import { BodyComponent } from '../components/BodyComponent'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { styles } from '../theme/appTheme'

export const screen5 = () => {
  return (
    <View>
    <StatusBar backgroundColor={PRIMARY_COLOR} />
    <TitleComponet title='Imagen II' />
    <BodyComponent> 
      <View>
        
      
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
