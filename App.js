import React from 'react';

import 'react-native-gesture-handler';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { LightScreen } from './components/Organism/LightScreen';
import { HomeScreen } from './components/Organism/HomeScreen';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { DrivingScreen } from './components/Organism/DrivingScreen';


const App = () => {
  

  const Stack = createStackNavigator();

  return (
    <Provider store={store}>
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
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
