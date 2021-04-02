import axios from 'axios';

import config from '../config';

console.log('[file]', 'src/Redux/helpers/public.axios.js');
const publicAxios = axios.create({
    baseURL: config.apiUrl
});


console.log('[file]:export default publicAxios', 'src/Redux/helpers/public.axios.js');
export default publicAxios;
