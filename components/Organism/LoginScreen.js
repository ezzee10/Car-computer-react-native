import React, { useState } from 'react'
import { View, TextInput, StyleSheet, Text, TouchableHighlight } from 'react-native'
import { Alert } from '../Atoms/Alert';
import { useNavigation } from '@react-navigation/native';
import { clienteAxios } from '../../config/config';
import CheckBox from '@react-native-community/checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const LoginScreen = () => {

    const navigation = useNavigation();

    const [message, setMessage] = useState({ msg:'', type:'' });

    const [login, setLogin] = useState({
        email: '', password: ''
    })

    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    const onChangeText = (key, val) => {
      setLogin({...login,  [key]: val });
    }

    const {email, password } = login;

    const handleLogin = async () => {

        if (email.trim() === '' || password.trim() === '') {
            setMessage({type: 'Error', msg: 'Todos los campos son obligatorios'});
            return;
        }

        const user_login = {
          username : email,
          password
        }

        try {

          const token = await clienteAxios.post('/conductors/login', user_login);
          setMessage({type: 'success', msg:'Usuario logueado correctamente'});

          if (toggleCheckBox) {
            delete user_login.password;
            user_login.token = token.data.data;
            await AsyncStorage.setItem('user-token', JSON.stringify(token));
          }
        
          setTimeout(() => {
            navigation.navigate('Home');
          }, 300);

        } catch (error) {
          console.log(error);  
        }      
    }

    return (

      <View style={styles.container}>

      { message ? <Alert message= { message } /> : null }

      <TextInput
        style={[styles.input]}
        placeholder='Email'
        autoCapitalize="none"
        placeholderTextColor='white'
        onChangeText={data => onChangeText('email', data)}
      />
      <TextInput
        style={[styles.input]}
        placeholder='Contraseña'
        autoCapitalize="none"
        placeholderTextColor='white'
        onChangeText={ data => onChangeText('password', data) }
        secureTextEntry={true}
      />
      <View style={styles.checkboxContainer}>
        <CheckBox
            value={toggleCheckBox}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}
          />
        <Text style={styles.checkboxText}>Recordar usuario</Text>
      </View>
      <TouchableHighlight 
        style ={styles.submit}
        onPress={handleLogin}
      >
        <Text style={styles.appButtonText}>Iniciar Sesión</Text>
      </TouchableHighlight> 

      <TouchableHighlight 
        style={{marginTop: 50}}
        onPress={()=> navigation.navigate('Registro')}
      >
        <Text style={styles.appButtonText}>Registrarse</Text>
      </TouchableHighlight> 

    </View>
    )
}

const styles = StyleSheet.create({
    input: {
      width: '70%',
      height: 55,
      backgroundColor: 'black',
      margin: 30,
      padding: 8,
      color: 'white',
      borderRadius: 14,
      fontSize: 18,
      fontWeight: '500',
      textAlign: 'center',
      textDecorationLine: 'none',
      borderBottomWidth: 1,
      borderStyle: 'solid',
      borderBottomColor: 'gray',
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    submit: {
      backgroundColor: 'black',
      marginTop: 30,
      width: '70%',
      height: 50,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 4,
      borderWidth: 2,
      borderStyle: 'solid',
      borderColor: 'gray',
      paddingTop: 10,
      paddingBottom: 10,
    },
    appButtonText: {
      color: 'white',
      fontSize: 18,
      textAlign: 'center',
      position: 'relative',
      top: -2,
      textTransform: 'uppercase'
    },
    checkboxContainer: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    checkboxText: {
      color: 'white',
      marginLeft: 12,
      fontSize: 16
    }
})
