import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { IMPUT_COLOR, PRIMARY_COLOR } from '../common/constantsColor'
import { styles } from '../theme/appTheme';
import { View, ViewBase } from 'react-native';


//interface - props
interface Props{
    placeholder: string;
    handleSetValues:(name: string, value: string)=> void;
    name: string;
    isPassword?: boolean;
    hasIcon?: boolean;
    actionIcon?:() => void;
}

export const ImputComponent = ({ placeholder, handleSetValues }:Props) => {
  return (
    <View>
    
    <TextInput
    placeholder='numero 1'
    keyboardType='default'
    
    style={styles.imputText}
    />
    </View>
  )
}

