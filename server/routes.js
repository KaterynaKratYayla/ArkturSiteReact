const { Counter } = require( '../src/components/counter' );
const { Post } = require( '../src/components/post' );
import {HomePage} from '../src/Components/Pages/PageComponents/HomePage'

module.exports = [
    {
        path: '/',
        exact: true,
        component: HomePage,
    },
    {
        path: '/en',
        exact: true,
        component: HomePage,
    },
    {
        path: '/post',
        exact: true,
        component: HomePage,
    }
];