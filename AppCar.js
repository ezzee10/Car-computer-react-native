import React, { useRef, useState, useEffect } from 'react'
import RouterApp  from './router/RouterApp';
import tokenAuth from './config/tokenAuth';
import SpinningImage from 'react-native-spinning-image';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { store } from './store/store';
import { AppState } from "react-native";
import { startLoadingNote } from './actions/notes';
import { useDispatch } from 'react-redux';
import { startLoadingKms } from './actions/stateCar';
import { clienteAxios } from './config/config';

const AppCar = () => {

  const dispatch = useDispatch();

  const appState = useRef(AppState.currentState);

  const [logged, setLogged] = useState(false);

  const [loaded, setLoaded] = useState(true); 

  useEffect(() => {

    getLogged();

  }, []);

  const getLogged = async () => {
    try {
      const token = await AsyncStorage.getItem('user-token');
      tokenAuth(token);
      dispatch(startLoadingNote());
      dispatch(startLoadingKms());
      if(token !== null) {
        setLogged(true);
      } else {
        setLogged(false);
      }
      setLoaded(false);
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
      try {
        await clienteAxios.put('/api/vehicle', {kilometresTotal: store.getState().carStatus.odometer});
      } catch (error) {
        console.log(error);
      }
    }
  };

    return (

        (loaded) ? 
            <SpinningImage
                source={'https://img.icons8.com/color/452/steering-wheel--v1.png'}
                speed={2000}
                rotations={null}
                height={200}
                width={200}
                direction='null'
            />
        : 
            <RouterApp logged={logged} />  
        )   
}

export default AppCar
