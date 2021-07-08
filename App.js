import React, { useRef, useState, useEffect } from 'react';
import { AppState } from "react-native";
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Router } from './components/Organism/Router';
import SpinningImage from 'react-native-spinning-image';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LogBox} from 'react-native';
LogBox.ignoreAllLogs();


const App = () => {

  const appState = useRef(AppState.currentState);

  const [logged, setLogged] = useState(false);

  const [loaded, setLoaded] = useState(true); 

  useEffect(() => {

    getLogged();

  }, [loaded]);

  const getLogged = async () => {
    try {
      const value = await AsyncStorage.getItem('user-token');
      if(value !== null) {
        setLogged(true);
        setLoaded(false);
      } else {
        setLogged(false);
        setLoaded(false)
      }
    } catch(e) {
      console.log(e);
    }
  }

  useEffect(() => {
    AppState.addEventListener("change", _handleAppStateChange);

    return () => {
      AppState.removeEventListener("change", _handleAppStateChange);
    };
  }, []);

  const _handleAppStateChange = async (nextAppState) => {

    appState.current = nextAppState;

    if ( appState.current.match(/active/)) {
      return;
    } else {  
      let object = {
        odometer: store.getState().carStatus.odometer
      }
      await AsyncStorage.setItem('user', JSON.stringify(object));
      const value = await AsyncStorage.getItem('user');
    }

  };

  return (
    <Provider store={store}>
        {
          (loaded) 
            ? 
            <SpinningImage
              source={'https://img.icons8.com/color/452/steering-wheel--v1.png'}
              speed={2000}
              rotations={null}
              height={200}
              width={200}
              direction='null'
            />
            : 
            <Router logged={logged} loaded={loaded}/>  
        }
    </Provider>
  );
};

export default App;
