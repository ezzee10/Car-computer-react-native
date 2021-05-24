import { types } from '../types/types'

const initialState = {
    carOn: false
}

export const carReducer = ( state = initialState, action) => {

    switch (action.type) {

        case types.carOn:
            return {
                carOn: action.payload
            }
        default:
            return state;
    }
}