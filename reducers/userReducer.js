import { types } from '../types/types'

const initialState = {
    odometer: 0,
}

export const userReducer = ( state = initialState, action) => {

    switch (action.type) {

        case types.saveOdometer:
            return{
                ...state,
                odometer: state.odometer + action.payload
            }
        default:
            return state;
    }
}