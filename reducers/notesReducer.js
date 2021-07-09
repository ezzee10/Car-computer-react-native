import { types } from '../types/types'

const initialState = {
    notes : {

    }
}

export const carReducer = ( state = initialState, action) => {

    switch (action.type) {

        case types.updateNotes:
            return {
                ...state,
                notes: state.notes.map(
                    note => note.id === action.payload.note.id
                        ? action.payload.note
                        : note
                )
            }
        default:
            return state;
    }
}