import React from 'react';
import {NavComponent} from './NavComponent'

import './header.css'

export const LargeScreensNavBar = ({sitepage_type}) =>{

    return(
        <div class='nav_big'>
            <NavComponent 
                linkClassName='nav_big_link'
                sitepage_type={sitepage_type}
                />
    </div>
        
   );
}