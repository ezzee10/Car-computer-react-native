import { clienteAxios } from '../config/config';
import { store } from '../store/store';
import {types} from '../types/types';

export const switchStateCar = ( state ) => ({

    type: types.carOn,
    payload: state
});

export const changeStateDoors = ( state ) => ({
    type: types.doors,
    payload: state
})

export const changeStateOdometer = ( kms ) => {

    return async( dispatch ) => {

        try {
                await clienteAxios.patch('/api/vehicle', {kilometresTotal: store.getState().carStatus.odometer + 1, 
                kilometresPartial: store.getState().carStatus.odometer2 + 1});
                dispatch({ type: types.odometer, payload: kms });
        } catch (e) {
            console.log('Error al cargar la cantidad de kilómetros: ' + e);
        }
    }
};

export const changeBattery = ( battery ) => ({
    type: types.battery,
    payload: battery
})

export const startCar = () => {
    return async( dispatch ) => {

        try {
            const result = await clienteAxios.get('/api/vehicle');

            dispatch({ type: types.startCar, payload: result.data.vehicle[0]});
        } catch (e) {
            console.log('Error al cargar la cantidad de kilómetros: ' + e);
        }
    }
};

export const changeSeltBelt = ( message ) => ({
    type: types.seatBelt,
    payload: message
})

export const changeShowSeltBelt = ( state ) => ({
    type: types.changeShowSeltBelt,
    payload: state
})

export const changeOdometer2 = (kms) => ({
    type: types.changeOdometer2,
    payload: kms
})

export const changeSpeedometer = (velocity) => ({
    type: types.speedometer,
    payload: velocity
})

export const restartOdometer2 = () => {

    return async( dispatch ) => {

        try {
                await clienteAxios.patch('/api/vehicle', {kilometresTotal: store.getState().carStatus.odometer, 
                kilometresPartial: 0});
                dispatch({ type: types.restartOdometer2, payload: 0 });
        } catch (e) {
            console.log('Error al reiniciar la cantidad de kilómetros parciales: ' + e);
        }
    }
}

export const updateRotateKms = (kms) => ({
    type: types.updateRotateKms,
    payload: kms
});

export const updateTransmissionKms = (kms) => ({
    type: types.updateTransmissionKms,
    payload: kms
})
