import React from 'react';
import 'react-native-gesture-handler';

import { Provider } from 'react-redux';
import { store } from './store/store';
import { Navegacion } from './Navegacion';

const App = () => {
  
  return (
    <Provider store={store}>
        <Navegacion />
    </Provider>
  );
};

export default App;
