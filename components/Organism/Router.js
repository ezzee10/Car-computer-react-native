import React, { useEffect } from 'react'
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { LightScreen } from './LightScreen';
import { HomeScreen } from './HomeScreen';
import { RegisterScreen } from './RegisterScreen';
import { LoginScreen } from './LoginScreen';
import { ScheduleScreen } from './ScheduleScreen';
import { connectionMqtt } from '../../actions/mqtt';
import { getMqtt } from '../../mqtt/Mqtt';
import { useDispatch, useSelector } from 'react-redux';
import { DriveScreen } from './DriveScreen';
import {UbicationScreen} from './UbicationScreen';


export const Router = ({ store }) => {

    const Stack = createStackNavigator();

    const dispatch = useDispatch();

    const { logged } = useSelector(state => state.auth);

    let mqtt = getMqtt(store);

    useEffect(() => {

      const interval = setInterval(() => {

          if(mqtt.connected) {
            dispatch(connectionMqtt(mqtt));
            clearInterval(interval);
          }
      }, 200);
    }, [mqtt])

    return (
        <NavigationContainer
          theme={DarkTheme}
        >
          <Stack.Navigator 
            initialRouteName={ !logged ? 'ubicacion' : 'Login'}
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
              name="ubicacion"
              component={UbicationScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
    )
}
