import React from 'react'
import { Image, StatusBar, Text, View } from 'react-native'
import { PRIMARY_COLOR } from '../common/constantsColor'
import { TitleComponet } from '../components/TitleComponet'
import { BodyComponent } from '../components/BodyComponent'
import { styles } from '../theme/appTheme'

export const screen3 = () => {
  
  return (
    <View>
      <StatusBar backgroundColor={PRIMARY_COLOR} />
      <TitleComponet title='Imagen II' />
      <BodyComponent> 
        <View>
        <Image source={require('../../assets/images.jpg')} style={styles.image}/>
        
        </View>
        </BodyComponent>
        </View>
  )
  
}
