import {types} from '../types/types';

export const switchStateCar = ( state ) => { 

    if (state) {
        console.log(state);
    }

    return {
        type: types.carOn,
        payload: 12
    }

}
