import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { lightsReducer } from '../reducers/lightsReducer';
import { authReducer } from '../reducers/authReducer';
import { mqttReducer } from '../reducers/mqttReducer';
import { carReducer } from '../reducers/carReducer';
import { registerReducer } from '../reducers/registerReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    lights: lightsReducer,
    auth: authReducer,
    mqtt: mqttReducer,
    carStatus: carReducer,
    userRegister: registerReducer
})

export const store = createStore(
    reducers,
    composeEnhancers(),
)
