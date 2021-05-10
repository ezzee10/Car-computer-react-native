import {types} from '../types/types';

export const switchStateLight = ( item, state ) => ({

    type: types.switchStateLight,
    payload: {
        light: {
            ...item,
            active: !state
        }
    },
    meta:{
        socket : { 
            channel : 'chat message'
        } , 
    }
});



