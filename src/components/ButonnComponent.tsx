import React from 'react'
import { Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { styles } from '../theme/appTheme'

interface Props{ 
    textButton: string;
    actionButton: ()=> void;
}

export const ButonnComponent = ({textButton , actionButton}: Props) => {
  return (
    
    <TouchableOpacity 
    onPress={actionButton}
    style={styles.button}>
        <Text style={styles.buttonText}>{textButton}</Text>
    </TouchableOpacity>
  )
}
