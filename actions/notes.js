import {types} from '../types/types';

export const updateNotes = ( note ) => ({

    type: types.updateNote,
    payload: note
});

export const loadNote = ( note ) => ({

    type: types.loadNote,
    payload: note
}, console.log(note));