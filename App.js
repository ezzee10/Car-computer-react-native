import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import AppCar from './AppCar';

const App = () => {

  return (
    <Provider store={store}>
        <AppCar />
    </Provider>
  );
};

export default App;
