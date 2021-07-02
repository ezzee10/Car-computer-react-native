import {types} from '../types/types';

export const saveOdometer = (kms) => ({
    type: types.saveOdometer,
    payload: kms
})