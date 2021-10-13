import config from '../../../Redux/config'

const supportedLangs = config.supportedLangs.join('|')

export const localizeRoutePath = (path) =>{

    // if(!locale){
        // console.log('TESTETEST',`/:locale(${supportedLangs})${path}`)
        return `/:locale(${supportedLangs})${path}`;
    // }

}

export const localizePath=(path, locale)=>{
    console.log('path2', path,locale)

    switch(typeof(path)){

        case 'undefined' : 
            return undefined;
        
        case 'string':
            return `/${locale}${path}`
 
        case 'object':
            return({
                ...path,
                pathname:`/${locale}${path.pathname}`
            })

        default :
            return '/';

    }
    return path;
}