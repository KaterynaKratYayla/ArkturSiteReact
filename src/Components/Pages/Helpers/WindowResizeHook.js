import React , { useEffect, useState } from 'react';

export const useWindowWidthAndHeight = ()=>{
    console.log('[file]');
    // 1- Получаем размер окна
    let windowInnerSize = [window.innerWidth, window.innerHeight];

    // 2- Define the state variable windowSize and pass windowInnerSize as its initial value
    let [ windowSize, setWidowSize ] = useState(windowInnerSize);

    useEffect(()=>{
        const changeWindowSize = ()=>{
            setWidowSize([window.innerWidth, window.innerHeight]);
        }
        /* 3- add a 'resize' eventListener to window so that whenever
        the size of window changes the state variable windowSize changes and the component re-renders */
        window.addEventListener("resize", changeWindowSize);

        // 4- cleanup the 'resize' eventListener
        return ()=> window.removeEventListener('resize', changeWindowSize);
    }, []);
    // 5- return the window size
    return windowSize;
}
