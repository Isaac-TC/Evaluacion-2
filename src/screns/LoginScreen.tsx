import React, { useState } from 'react'
import { Alert, StatusBar, Text, View } from 'react-native'
import { TitleComponet } from '../components/TitleComponet';
import { PRIMARY_COLOR } from '../common/constantsColor';
import { BodyComponent } from '../components/BodyComponent';
import { styles } from '../theme/appTheme';
import { ImputComponent } from '../components/ImputComponent';
import { ButonnComponent } from '../components/ButonnComponent';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RootStackParams } from '../navigator/stackNavigator';
import { StackScreenProps } from '@react-navigation/stack';


interface FormLogin {
  email: string;
  password: string;
}

//interface para los objetos 
interface User {
  id: number;
  email: string;
  password: string;
}
interface Props extends StackScreenProps<RootStackParams, 'Login'> { }
export const LoginScreen = ({ navigation }: Props) => {
  //arreglo de usuario permitir inicio de sesion 
  const user: User[] = [
    { id: 1, email: 'iseduardot92@gmail.com', password: '123456' },
    { id: 2, email: 'eduardot92@gmail.com', password: '12345689' }
  ];
  //hook useState manipular estado de formulario 

  const [formLogin, setFormLogin] = useState<FormLogin>({
    email: '',
    password: ''

  });

  const [hiddenPassword, sethiddenPassword] = useState<boolean>(true)

  // FUNCION Q PERMITA ACTUALIZAR EL ESTADO DEL FORMULARIO 
  const handleSetValues = (name: string, value: string) => {
    // console.log(name);
    // console.log(value);
    //cambiar estado 
    ///...operador de propragacion spread saca copias de las propiedades del objeto 
    setFormLogin({ ...formLogin, [name]: value });
  }

  //funcion q permita iniciar sesion 
  const handleSingnIn = () => {
    if (formLogin.email === ' ' || formLogin.password === '') {
      Alert.alert(
        "Error",
        "porfavor ,completar campos"
      );
      return;
    }

    if (verifyUser!()) {
      Alert.alert(
        "error",
        "correo o contraseña incorrecta"
      );
      return;

    }
    console.log(formLogin);
  }

  const verifyUser = (): User => {
    const existUser = user.filter(user => user.email === formLogin.email && user.password === formLogin.password)[0];
    return existUser;
  }
  return (
    <View>
      <StatusBar backgroundColor={PRIMARY_COLOR} />
      <TitleComponet title='Biemvenido' />
      <BodyComponent>
        <View>
          <Text style={styles.titleBody}>Navegacion </Text>
          <Text style={styles.descriptionBody}>Elige una opcion  </Text>
        </View>


        <TouchableOpacity 
        style={styles.contentInput} 
        onPress={() => navigation.navigate('screen2')}>
          <Text 
          style={styles.textRedirect}>Imagen I</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.contentInput} 
        onPress={() => navigation.navigate('screen3')}>
          <Text 
          style={styles.textRedirect}>Imagen II</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.contentInput} 
        onPress={() => navigation.navigate('screen4')}>
          <Text style={styles.textRedirect}> MAYOR O IGUAL</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.contentInput}
         onPress={() => navigation.navigate('screen5')}>
          <Text style={styles.textRedirect}> MENOR O IGUAL</Text>
        </TouchableOpacity>

      </BodyComponent>
    </View>
  )
}


