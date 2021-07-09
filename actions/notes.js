import {types} from '../types/types';
import { clienteAxios } from '../config/config';

export const updateNotes = ( note ) => ({
    type: types.updateNote,
    payload: note
});

export const setNote = ( note ) => ({
    type: types.loadNote,
    payload: note
}, console.log(note));

export const startLoadingNote = () => {
    return async( dispatch ) => {
        const result =  await clienteAxios.get('/api/notes');
        // dispatch(setNote( result.data.note[0] ) );
        dispatch({type: types.loadNote, payload: result.data.note[0]});
    }
};
