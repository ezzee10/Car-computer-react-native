import React, { useState } from 'react'
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableHighlight
} from 'react-native'
import { useDispatch } from 'react-redux';
import { Alert } from '../Atoms/Alert';
import { useNavigation } from '@react-navigation/native';

export const LoginScreen = () => {

    const dispatch = useDispatch();
    const navigation = useNavigation();
    const [error, setError] = useState('');

    const [login, setLogin] = useState({
        email: '', password: ''
    })

    const onChangeText = (key, val) => {
        setRegister({...register,  [key]: val })
    }

    const handleLogin = () => {

        console.log('entre')

        if (email.trim() === '' || password.trim() === '') {
            setError('Todos los campos son obligatorios');
            return;
        }
    
        dispatch( startLogin( user ) );
        
    }

    const handleRegister = () => {
      
      navigation.navigate('Registro');

    }
    

    return (

      <View style={styles.container}>

      { error ? <Alert message= {error } /> : null }


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
      <TouchableHighlight 
        style ={styles.submit}
        onPress={handleLogin}
      >
        <Text style={styles.appButtonText}>Iniciar Sesión</Text>
      </TouchableHighlight> 

      <TouchableHighlight 
        style={{marginTop: 50}}
        onPress={handleRegister}
      >
        <Text style={styles.appButtonText}>Registrarse</Text>
      </TouchableHighlight> 

    </View>
    )
}

const styles = StyleSheet.create({
    input: {
      width: '50%',
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
      width: '40%',
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
    }
})
