import { types } from '../types/types'

const initialState = {
    active: false,
    velocity: 0
}

export const carReducer = ( state = initialState, action) => {

    switch (action.type) {

        case types.carOn:
            return {
                ...state,
                active: action.payload
            }
        case types.speedometer:
            console.log(action.payload)
            return{
                ...state,
                velocity: action.payload
            }
        default:
            return state;
    }
}