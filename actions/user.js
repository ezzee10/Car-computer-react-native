import { ActionSheetIOS } from 'react-native';
import { clienteAxios } from '../config/config';
import {types} from '../types/types';

export const saveOdometer = (kms) => ({
    type: types.saveOdometer,
    payload: kms
})

export const saveUserInitial = () => {
    return async (dispatch) => {
        result = await clienteAxios.get('api/driver');
        const { name, surname, email } = result.data.driver[0];
        dispatch({type: types.saveUser, payload: {name, surname, email}});
    }
};

export const saveTravelInitial = () => {
    return async (dispatch) => {
        result = await clienteAxios.get('api/travel');
        dispatch({type: types.saveTravelInitial, payload: result.data.travel[0]});
    }
}

export const saveTravels = (travel) => ({
    types: types.saveTravel,
    payload: travel
});
