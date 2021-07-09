import { types } from '../types/types'

const initialState = {
    note: null
}

export const noteReducer = ( state = initialState, action) => {

    switch (action.type) {

        case types.loadNote:
            return {
                note: action.payload
            }
        default:
            return state;
    }
}