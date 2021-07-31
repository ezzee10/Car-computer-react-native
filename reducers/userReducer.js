import { types } from '../types/types'

const initialState = {
    name: '',
    surname: '',
    email: '',
    travel: []
}

export const userReducer = ( state = initialState, action) => {

    switch (action.type) {

        case types.saveUser:
            return{
                ...state,
                name: action.payload.name,
                surname: action.payload.surname,
                email: action.payload.email
            }
        case types.saveTravelInitial:
            return{
                ...state,
                travel: [...state.travel, action.payload]
            }
        case types.saveTravel:
            return {
                ...state,
                travel: [...state.travel, action.payload]
            }
        default:
            return state;
    }
}