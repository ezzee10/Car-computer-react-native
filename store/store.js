import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import { lightsReducer } from '../reducers/lightsReducer';
import { authReducer } from '../reducers/authReducer';
import { mqttReducer } from '../reducers/mqttReducer';
import { carReducer } from '../reducers/carReducer';
import { registerReducer } from '../reducers/registerReducer';
import { userReducer } from '../reducers/userReducer';
import { noteReducer } from '../reducers/noteReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    lights: lightsReducer,
    auth: authReducer,
    mqtt: mqttReducer,
    carStatus: carReducer,
    userRegister: registerReducer,
    user: userReducer,
    note: noteReducer
})

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware( thunk )
    ),
)
