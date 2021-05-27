import { types } from "../types/types";

export const registerReducer = ( state = {}, action) => {

    switch ( action.type ) {
        case types.userRegister:
            return {
                user: action.payload
            }        
        default:
            return state;
    }

}