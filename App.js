import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { LogBox } from 'react-native';
import AppCar from './AppCar';
LogBox.ignoreAllLogs();


const App = () => {

  return (
    <Provider store={store}>
        <AppCar />
    </Provider>
  );
};

export default App;
