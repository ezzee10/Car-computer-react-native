import React from 'react'
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { LightScreen } from './LightScreen';
import { HomeScreen } from './HomeScreen';
import { DrivingScreen } from './DrivingScreen';
import { RegisterScreen } from './RegisterScreen';
import { LoginScreen } from './LoginScreen';

export const Navegacion = () => {

    const Stack = createStackNavigator();

    return (
        <NavigationContainer
          theme={DarkTheme}
        >
          <Stack.Navigator 
            initialRouteName="Home"
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
              component={DrivingScreen} 
            />
            <Stack.Screen
              name="Registro"
              component={RegisterScreen}
            />
            <Stack.Screen
              name="Login"
              component={LoginScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
    )
}
