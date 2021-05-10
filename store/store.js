import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { lightsReducer } from '../reducers/lightsReducer';
import io from 'socket.io-client';
import socketIO from 'socket.io-redux';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    lights: lightsReducer
})

export const store = createStore(
    reducers,
    composeEnhancers( 
        applyMiddleware(
            socketIO(io.connect("http://192.168.100.159:3001"))
        ) 
    ),
)
