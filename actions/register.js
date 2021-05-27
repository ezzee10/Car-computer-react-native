import {types} from '../types/types';

export const startRegister = ( user ) => ({

    type: types.userRegister,
    payload: user
});