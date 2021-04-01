import axios from 'axios';

import config from '../config';

console.log('[file]');
const publicAxios = axios.create({
    baseURL: config.apiUrl
});


export default publicAxios;
