import React from 'react';

import { Provider } from 'react-redux';
import { store } from './store/store';
import { Router } from './components/Organism/Router';
const App = () => {
  
  return (
    <Provider store={store}>
        <Router store={store}/> 
    </Provider>
  );
};

export default App;
