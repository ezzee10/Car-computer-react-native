import axios from 'axios';
// import variables from '../variables';
import {REACT_APP_BACKEND_URL} from '@env'

console.log('xd1');
console.log(REACT_APP_BACKEND_URL);

export const clienteAxios = axios.create({
    baseURL: 'http://192.168.100.159:4000/',
}, console.log(REACT_APP_BACKEND_URL));
