import React from 'react';
import 'react-native-gesture-handler';

import { Provider } from 'react-redux';
import { store } from './store/store';
import { Navegacion } from './components/Organism/Navegacion';
import { client } from './mqtt/Mqtt';
import MyqttState from './context/MyqttState';

const App = () => {
  
  return (
    <Provider store={store}>
        <Navegacion /> 
    </Provider>
  );
};

export default App;
