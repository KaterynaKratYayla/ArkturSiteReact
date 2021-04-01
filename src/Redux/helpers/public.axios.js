import axios from 'axios';

import config from '../config';

console.log('[file]', 'src/Redux/helpers/public.axios.js');
const publicAxios = axios.create({
    baseURL: config.apiUrl
});


export default publicAxios;
