import React from 'react';
import {NavComponent} from './NavComponent'
import {NavLink,Link} from 'react-router-dom'
import {HomeOutlined} from '@ant-design/icons'
import {Icons} from '../../../Library/Icons/icons'
import {HotelsObject} from '../../../Library/Icons/hotels'

import {PureContent} from '../MenuPageGenerator'

import './header.css'

export const LargeScreensNavBar = ({pages}) =>{
    console.log('[file]');

    console.log('ICONS', Icons)

    return(
        <div class='nav_big'>
            <NavComponent
                linkClassName='nav_big_link'
                pages={pages}
                />


            {/* <h2>
                <NavLink exact to='/about_us_info' activeClassName='active' >About us</NavLink>
            </h2>
            <h2>
                <NavLink exact to='/hotels_in_ukraine' activeClassName='active'>Hotels</NavLink>
            </h2>

            <div class ='dropdown'>
                <h2>
                    <NavLink exact to='/' activeClassName='active'>Tours</NavLink>

                    <ul class = 'dropdown_list'>
                        <li>
                            <NavLink exact to='/Kyiv' activeClassName='active'>Kyiv</NavLink>
                        </li>
                        <li>
                            <NavLink exact to='/Odesa' activeClassName='active'>Odesa</NavLink>
                        </li>
                        <li>
                            <NavLink exact to='/Lviv' activeClassName='active'>Lviv</NavLink>
                        </li>
                        <li>
                            <NavLink exact to='/Kharkiv' activeClassName='active'>Kharkiv</NavLink>
                        </li>
                        <li>
                            <NavLink exact to='/Vinnitsya' activeClassName='active'>Vinnitsya</NavLink>
                        </li>
                        <li>
                            <NavLink exact to='/Bukovel_Resort' activeClassName='active'>Bukovel</NavLink>
                        </li>
                        <li>
                            <NavLink exact to='/Mariupol' activeClassName='active'>Mariupol</NavLink>
                        </li>
                    </ul>
                </h2>
          </div>
        <h2>
            <NavLink exact to='/gallery' activeClassName='active'>Gallery</NavLink>
        </h2> */}

    </div>

//     <div class="middleMenu_right">
//     </div>
// </div>

    // <NavComponent navClass={navClass}
    //               linkClassName = {linkClassName}
    // />
   );
}



// export const NavComponent = ({onClick, navClass, linkClassName})=>(
//   <nav className={navClass}>
//       {["Projects", "About", "Contact", "Footer"].map(section=>
//         <Link to={section}
//               smooth={true}
//               className={linkClassName}
//               onClick={onClick}>
//             {section}
//         </Link>
//       )}
//   </nav>
// )

// export default LargeScreensNavBar;
