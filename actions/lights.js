import {types} from '../types/types';

export const switchStateLight = ( item, state ) => ({

    type: types.switchStateLight,
    payload: {
        light: {
            ...item,
            active: !state
        }
    }
});

export const switchLeftTurn = ( state ) => ({

    type: types.switchLeftTurn,
    payload: state
});

export const switchRigthTurn = ( state ) => ({

    type: types.switchRightTurn,
    payload: state
});



