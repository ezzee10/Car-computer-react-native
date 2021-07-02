import {types} from '../types/types';

export const switchStateCar = ( state ) => ({

    type: types.carOn,
    payload: state
});

export const changeSpeedometer = ( velocity ) => ({
    type: types.speedometer,
    payload: velocity
})

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