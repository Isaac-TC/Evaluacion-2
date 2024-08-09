import React from 'react'
import { StatusBar, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { TitleComponet } from '../components/TitleComponet'
import { BodyComponent } from '../components/BodyComponent';
import { PRIMARY_COLOR } from '../common/constantsColor'

export const screen2 = () => {
  return (
    <View>
      <StatusBar backgroundColor={PRIMARY_COLOR} />
      <TitleComponet title='Imagen I' />
      <BodyComponent> 
        <View>
          
        
        </View>
        </BodyComponent>
        </View>
   
  )
}
