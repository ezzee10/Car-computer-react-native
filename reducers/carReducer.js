import { types } from '../types/types'

const initialState = {
    active: false,
    velocity: 0,
    doors: false
}

export const carReducer = ( state = initialState, action) => {

    switch (action.type) {

        case types.carOn:
            return {
                ...state,
                active: action.payload
            }
        case types.speedometer:
            return{
                ...state,
                velocity: action.payload
            }
        case types.doors:
            return{
                ...state,
                doors: action.payload
            }
        default:
            return state;
    }
}