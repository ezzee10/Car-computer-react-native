import { types } from '../types/types'

const initialState = {
    active: false,
    velocity: 0,
    doors: false,
    odometer: 0,
    battery: 0,
    seatBeltMessage: '',
    showAlertSeat: false,
    odometer2: 0,
    kmsMissingUpdateRotationWheels: null,
    kmsMissingUpdateTransmission: null
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
        case types.odometer:
            return{
                ...state,
                odometer: state.odometer + action.payload,
                odometer2: state.odometer2 + action.payload
            }
        case types.battery:
            return{
                ...state,
                battery: action.payload
            }
        case types.seatBelt:
            return {
                ...state,
                showAlertSeat: true,
                seatBeltMessage: action.payload
            }
        case types.changeShowSeltBelt:
            return {
                ...state,
                showAlertSeat: action.payload
            }
        case types.changeOdometer2:
            return {
                ...state,
                odometer2: action.payload
            }
        case types.restartOdometer2:
            return {
                ...state,
                odometer2: 0
            }
        case types.startCar:
            return {
                ...state,
                odometer: action.payload.kilometresTotal,
                odometer2: action.payload.kilometresPartial,
                kmsMissingUpdateRotationWheels: action.payload.kmsMissingUpdateRotationWheels,
                kmsMissingUpdateTransmission: action.payload.kmsMissingUpdateTransmission
            }
        case types.updateRotateKms:
            return {
                ...state,
                kmsMissingUpdateRotationWheels: action.payload,
            }
        case types.updateTransmissionKms:
            return {
                ...state,
                kmsMissingUpdateTransmission: action.payload
            }
        default:
            return state;
    }
}