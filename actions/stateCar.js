import {types} from '../types/types';

export const switchStateCar = ( state ) => ({

    type: types.carOn,
    payload: state
});

export const changeSpeedometer = ( velocity ) => ({
    type: types.speedometer,
    payload: velocity
})