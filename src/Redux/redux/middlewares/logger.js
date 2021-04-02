
console.log('[file]', 'src/Redux/redux/middlewares/logger.js');

export const logger = store => next => action => {
    console.log('[file]:export const logger', 'src/Redux/redux/middlewares/logger.js');
    console.log('[LOGGER]', action );
    return next( action );
}

export function loggerFn( store ){
    console.log('[file]:export function loggerFn', 'src/Redux/redux/middlewares/logger.js');
    return function( next ){
        return function ( action ){
            console.log('[LOGGER]', action );
            return next( action );
        }
    }
}
