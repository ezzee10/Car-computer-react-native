import { clienteAxios } from '../config/config';
import {types} from '../types/types';

export const switchStateCar = ( state ) => ({

    type: types.carOn,
    payload: state
});

export const changeStateDoors = ( state ) => ({
    type: types.doors,
    payload: state
})

export const changeStateOdometer = ( kms ) => ({
    type: types.odometer,
    payload: kms
})

export const changeBattery = ( battery ) => ({
    type: types.battery,
    payload: battery
})

export const startLoadingKms = () => {
    return async( dispatch ) => {
        const result = await clienteAxios.get('/api/vehicle');
        if (result.data.vehicle.length === 0) {
            await clienteAxios.post('/api/vehicle', { kilometresTotal: 0 });
            dispatch({ type: types.odometer, payload: 0 });
        } else {
            dispatch({ type: types.odometer, payload: result.data.vehicle[0].kilometresTotal });
        }  
    }
};