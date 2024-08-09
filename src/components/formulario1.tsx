import React, { useState } from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import { styles } from '../theme/appTheme'


const [number1, setNumber1] = useState('');
    const [number2, setNumber2] = useState('');
    const [result, setResult] = useState('');

    const handlePress = () => {
        const num1 = parseFloat(number1);
        const num2 = parseFloat(number2);
        const result = onsubmit(num1, num2);
        setResult(result);
    };




export const formulario1 = () => {
  return (
    <View style={styles.container}>
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                placeholder="Enter number 1"
                value={number1}
                onChangeText={setNumber1}
            />
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                placeholder="Enter number 2"
                value={number2}
                onChangeText={setNumber2}
            />
             <Button title={buttonText} onPress={handlePress} />
             <Text>{result}</Text>
            </View>
    
  )
}
