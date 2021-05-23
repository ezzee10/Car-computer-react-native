import { types } from "../types/types";

const initialState = {
    mqtt: ''
}

export const mqttReducer = ( state = initialState, action) => {

    switch ( action.type ) {
        case types.connectionMqtt:
            return {
                mqtt: action.payload
            }        
        default:
            return state;
    }

}