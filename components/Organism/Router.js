import React, { useState, useEffect } from 'react'
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { LightScreen } from './LightScreen';
import { HomeScreen } from './HomeScreen';
import { RegisterScreen } from './RegisterScreen';
import { LoginScreen } from './LoginScreen';
import { ScheduleScreen } from './ScheduleScreen';
import { connectionMqtt } from '../../actions/mqtt';
import { useDispatch, useSelector } from 'react-redux';
import { DriveScreen } from './DriveScreen';
import {UbicationScreen} from './UbicationScreen';
import { getMqtt } from '../../mqtt/Mqtt';
import { ExitScreen } from './ExitScreen';

export const Router = ({ logged }) => {

    const Stack = createStackNavigator();

    const dispatch = useDispatch();

    let mqtt = getMqtt();

    useEffect(() => {

      const interval = setInterval(() => {

          if(mqtt.connected) {
            dispatch(connectionMqtt(mqtt));
            clearInterval(interval);
            console.log(mqtt);
          }
      }, 200);
    }, [mqtt])

    return (
        <NavigationContainer
          theme={DarkTheme}
        >
          <Stack.Navigator
            initialRouteName={ logged ? 'Home' : 'Login'}
            mode="modal"
            screenOptions={{
              headerStyle: {
                backgroundColor: 'black',
                height: 80
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontSize: 20,
                textTransform: 'uppercase',
                textAlign: 'center',
              },
              headerTitleAlign: 'center',
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
              
            }}
          >
            <Stack.Screen 
              name="Home" 
              component={HomeScreen} 
            /> 
            <Stack.Screen 
              name="luces" 
              component={LightScreen} 
            />
            <Stack.Screen 
              name="conducción" 
              component={DriveScreen} 
            />
            <Stack.Screen
              name="Registro"
              component={RegisterScreen}
            />
            <Stack.Screen
              name="Login"
              component={LoginScreen}
            />
            <Stack.Screen
              name="agenda"
              component={ScheduleScreen}
            />
            <Stack.Screen
              name="ubicación"
              component={UbicationScreen}
            />
            <Stack.Screen
              name="salir"
              component={ExitScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
    )
}
