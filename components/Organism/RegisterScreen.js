import React, { useState } from 'react'
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableHighlight
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import validator from 'validator';
import { startRegister } from '../../actions/register';
import { Alert } from '../Atoms/Alert';
import { useNavigation } from '@react-navigation/native';


export const RegisterScreen = () => {

  const dispatch = useDispatch();

  const navigation = useNavigation();

  const { mqtt } = useSelector(state => state.mqtt)

  const [register, setRegister] = useState({
    name: '', surname: '', email:'', password: '', password2: ''
  })

  const { name, surname, email, password, password2 } = register;

  const [message, setMessage] = useState({ msg:'', type:'' });

  const onChangeText = (key, val) => {
      setRegister({...register,  [key]: val })
  }

  const isFormValid = () => {
      
    if ( name.trim().length === 0 ) { 
        setMessage({type: 'error', msg:'El nombre es requerido'});
        return false;
    } else if ( surname.trim().length === 0 ) {
      setMessage({type: 'error', msg:'El apellido es requerido'});
        return false;
    } else if ( !validator.isEmail( email ) ) {
        setMessage({type: 'error', msg:'El email es inválido'});
        return false;
    } else if ( password.length < 6 ) {
        setMessage({type: 'error', msg:'La contraseña debe tener 6 caracteres como mínimo'});
        return false;
    } else if ( password !== password2 || password.length < 6 ) {
      setMessage({type: 'error', msg:'Las contraseñas deben coincidir'});
      return false;
    }
    return true;

  }

  const handleRegister = () => {

    if( isFormValid() ) {

        const user = {
          name,
          surname,
          email,
          password,
        }
        mqtt.publish('user/register', Buffer.from(JSON.stringify(user), "utf8"));
        dispatch( startRegister( user ) );
        setMessage({type: 'success', msg:'Usuario registrado correctamente'});

        navigation.navigate('Login');
        
    }

  }


  return (
      <View style={styles.container}>

      { message ? <Alert message= { message } /> : null }

      <TextInput
        style={[styles.input]}
        placeholder='Nombre'
        autoCapitalize="none"
        placeholderTextColor='white'
        onChangeText={data => onChangeText('name', data)}
      />
      <TextInput
        style={[styles.input]}
        placeholder='Apellido'
        autoCapitalize="none"
        placeholderTextColor='white'
        onChangeText={data => onChangeText('surname', data) }
      />
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
        <TextInput
        style={[styles.input]}
        placeholder='Repetir contraseña'
        autoCapitalize="none"
        placeholderTextColor='white'
        onChangeText={ data => onChangeText('password2', data) }
        secureTextEntry={true}
      />

      <TouchableHighlight 
        style ={styles.submit}
        onPress={handleRegister}
      >
        <Text style={styles.appButtonText}>Crear nueva cuenta</Text>
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
