import React ,{useEffect} from 'react';
import {useLocation} from "react-router-dom";

console.log('[file]', 'src/Components/Library/PageDevices/ScrollToTop.js');
export const ScrollToTop = () => {
    console.log('[file]:export const ScrollToTop', 'src/Components/Library/PageDevices/ScrollToTop.js');
    const {pathname} = useLocation();

    useEffect(() => {
        window.scrollTo(0,0);
    }, [pathname]);

    return null;
}
