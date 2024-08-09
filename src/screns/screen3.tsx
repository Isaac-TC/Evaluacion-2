import React from 'react'
import { StatusBar, Text, View } from 'react-native'
import { PRIMARY_COLOR } from '../common/constantsColor'
import { TitleComponet } from '../components/TitleComponet'
import { BodyComponent } from '../components/BodyComponent'

export const screen3 = () => {
  return (
    <View>
      <StatusBar backgroundColor={PRIMARY_COLOR} />
      <TitleComponet title='Imagen II' />
      <BodyComponent> 
        <View>
          
        
        </View>
        </BodyComponent>
        </View>
  )
  
}
