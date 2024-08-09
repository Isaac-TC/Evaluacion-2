import React from 'react'
import { StatusBar, Text, View } from 'react-native'
import { TitleComponet } from '../components/TitleComponet'
import { BodyComponent } from '../components/BodyComponent'
import { PRIMARY_COLOR } from '../common/constantsColor'

export const screen4 = () => {
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
