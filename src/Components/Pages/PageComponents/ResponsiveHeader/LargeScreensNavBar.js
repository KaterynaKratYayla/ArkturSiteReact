import React from 'react';
import {NavComponent} from './NavComponent'

import './header.css'

export const LargeScreensNavBar = ({sitepage_type,linkClassName,navClass}) =>{

    return(
        <div class='nav_big'>
            <NavComponent 
                linkClassName={linkClassName}
                sitepage_type={sitepage_type}
                navClass={navClass}
                />
    </div>
        
   );
}