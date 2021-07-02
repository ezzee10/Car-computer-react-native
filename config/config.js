import axios from 'axios';
import variables from '../variables';

export const clienteAxios = axios.create({
    baseURL: variables.REACT_APP_BACKEND_URL
});
