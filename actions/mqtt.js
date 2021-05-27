import {types} from '../types/types';

export const connectionMqtt = ( mqtt ) => ({

    type: types.connectionMqtt,
    payload: mqtt

});