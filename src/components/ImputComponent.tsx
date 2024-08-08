import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { IMPUT_COLOR, PRIMARY_COLOR } from '../common/constantsColor'
import { styles } from '../theme/appTheme';
import { View, ViewBase } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

//interface - props
interface Props{
    placeholder: string;
    handleSetValues:(name: string, value: string)=> void;
    name: string;
    isPassword?: boolean;
    hasIcon?: boolean;
    actionIcon?:() => void;
}

export const ImputComponent = ({ placeholder, handleSetValues, name ,isPassword= false, hasIcon= true, actionIcon }:Props) => {
  return (
    <View>
      {
        (hasIcon)
        ?<Icon
        name='visibility'
        size={25}
        onPress={actionIcon}
        color={PRIMARY_COLOR}
        styles={styles.iconPassword}/>
        :null
      }
     
      
      
    
    <TextInput
    placeholder={placeholder}
    keyboardType='default'
    onChangeText={(value)=> handleSetValues(name, value)}
    secureTextEntry={isPassword}
    style={styles.imputText}
    />
    </View>
  )
}

