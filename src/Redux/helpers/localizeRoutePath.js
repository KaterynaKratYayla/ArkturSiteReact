import config from '../config';
import {useSelector} from "react-redux";

console.log('[file]', 'src/Redux/helpers/localizeRoutePath.js');
// const supportedLangs = config.supportedLangs.join('|');
const supportedLangs = config.supportedLangs;
// console.log('supportedLangs2: ', supportedLangs);

export const localizeRoutePath = ( path ) => {
    console.log('[file]:export const localizeRoutePath', 'src/Redux/helpers/localizeRoutePath.js');
    return `/:locale(${supportedLangs})${path}`;
    // return `/:en${path}`;
}

export const localizePath = ( path, locale ) => {
    console.log('[file]:export const localizePath', 'src/Redux/helpers/localizeRoutePath.js');

    console.log('[pathType]:', typeof(path), locale);

    switch( typeof(path) ){

        case 'undefined':
            return undefined;

        case 'string':
            return `/${locale}${path}`;

        case 'object':
            return ({
                ...path,
                pathname: `/${locale}${path.pathname}`
            });

        default:
            return '/';
    }

}
