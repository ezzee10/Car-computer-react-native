import { types } from '../types/types'
import { lightsInfo } from '../Mocks/LightsInfo'

const initialState = {
    lights: lightsInfo
}

export const lightsReducer = ( state = initialState, action) => {

    switch (action.type) {

        case types.switchStateLight:
            console.log(action.payload.light)
            return {
                ...state,
                lights: state.lights.map(
                    light => light.id === action.payload.light.id
                        ? action.payload.light
                        : light
                )
            }
        default:
            return state;
    }
}