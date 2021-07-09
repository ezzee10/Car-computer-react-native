import { clienteAxios } from './config';

const tokenAuth = token => {
    if (token) {
        console.log('Entro aca?');
        clienteAxios.defaults.headers.common['x-auth-token'] = token;
        console.log(clienteAxios.defaults);
    } else {
        delete clienteAxios.defaults.headers.common['x-auth-token'];
    }
}

export default tokenAuth;