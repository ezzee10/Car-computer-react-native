import { types } from '../types/types'

const initialState = {
    note: null,
    message: null,
    alert: false
}

export const noteReducer = ( state = initialState, action) => {

    switch (action.type) {

        case types.loadNote:
            return {
                ...state,
                note: action.payload
            }
        case types.createNote:
            return {
                ...state,
                note: action.payload
            }
        case types.updateNote:
            return {
                ...state,
                note: action.payload
            }
        case types.setMessageNote:
            return {
                ...state,
                message: action.payload,
                alert: true
            }
        case types.showAlert:
            return {
                ...state,
                alert: action.payload
            }
        default:
            return state;
    }
}