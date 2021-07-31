import React, { useEffect } from 'react'
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { LightScreen } from '../components/Organism/LightScreen';
import { HomeScreen } from '../components/Organism/HomeScreen';
import { RegisterScreen } from '../components/Organism/RegisterScreen';
import { LoginScreen } from '../components/Organism/LoginScreen';
import { ScheduleScreen } from '../components/Organism/ScheduleScreen';
import { connectionMqtt } from '../actions/mqtt';
import { useDispatch } from 'react-redux';
import { DriveScreen } from '../components/Organism/DriveScreen';
import {UbicationScreen} from '../components/Organism/UbicationScreen';
import { getMqtt } from '../mqtt/Mqtt';
import { ExitScreen } from '../components/Organism/ExitScreen';
import { InfoScreen } from '../components/Organism/InfoScreen';

const RouterApp = ({ logged }) => {

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
              name="información"
              component={InfoScreen}
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

export default RouterApp