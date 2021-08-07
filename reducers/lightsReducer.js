import { types } from '../types/types'
import { lightsInfo } from '../Mocks/LightsInfo'

const initialState = {
    lights: lightsInfo,
    leftTurn: false,
    rightTurn: false
}

export const lightsReducer = ( state = initialState, action) => {

    console.log(initialState.lights);

    switch (action.type) {
        case types.switchStateLight:
            return {
                ...state,
                lights: state.lights.map(
                    light => light.id === action.payload.light.id
                        ? action.payload.light
                        : light
                )
            }
        case types.switchLeftTurn:
            return {
                ...state,
                leftTurn: action.payload == 1 ? true : false
            }
        case types.switchRightTurn:
            return {
                ...state,
                rightTurn: action.payload == 1 ? true : false
            }
        default:
            return state;
    }
}