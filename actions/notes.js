import {types} from '../types/types';
import { clienteAxios } from '../config/config';

export const startLoadingNote = () => {
    return async( dispatch ) => {
        console.log('entro aca');
        const result =  await clienteAxios.get('/api/notes');
        dispatch({type: types.loadNote, payload: result.data.note[0]});
    }
};

export const createNote = ( note ) => {

    return async( dispatch ) => {
        try {
            await clienteAxios.post('/api/notes', note);
            dispatch({type: types.createNote, payload: note});
            dispatch({type: types.setMessageNote, payload: 'Agenda creada correctamente'});
        } catch (e) {
            dispatch({type: types.setMessageNote, payload: 'No se pudo crear la agenda'});
            console.log(e);
        }
    }
};

export const updateNote = ( note ) => {

    return async( dispatch ) => {
        try {
            await clienteAxios.put('/api/notes', note);
            dispatch({type: types.updateNote, payload: note});
            dispatch({type: types.setMessageNote, payload: 'Agenda actualizada correctamente'});
        } catch (e) {
            dispatch({type: types.setMessageNote, payload: 'Fallo al actualizar la agenda'});
            console.log(e);
        }
    }
};

export const showAlert = ( state ) => ({

    type: types.showAlert,
    payload: state
    
});
