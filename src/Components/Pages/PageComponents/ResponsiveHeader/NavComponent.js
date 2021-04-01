// import { Link } from 'react-scroll';
import {Link, NavLink} from 'react-router-dom'
import { PureContent } from '../MenuPageGenerator'
import { FormattedMessage } from 'react-intl';
// import {icons} from '../../../Library/Icons/icons'
import './header.css'

console.log('[file]', 'src/Components/Pages/PageComponents/ResponsiveHeader/NavComponent.js');
export const NavComponent = ({onClick, navClass, linkClassName,pages})=>{
    return(
    <nav className={navClass}>
        {/* {["Projects", "About", "Contact", "Footer"].map(section=>
          <Link to={section}
                smooth={true}
                className={linkClassName}
                onClick={onClick}>
              {section}
          </Link>
        )}  */}

<ul class={linkClassName}>
					  {
						pages && pages.map((page)=>{
						  if(page.name.includes('MID')){
							return (
							<li>
    							<h2>
									<Link exact to={{pathname: `/${page.name.replace(/ /g, "_").toLowerCase()}`,
									                 state: {id: page.id}}}
                                   onClick={onClick}>
                                                         {/* <span style={{border: 'none',
                                                                        marginLeft: '0.5vw',
                                                                        marginRight: '0.5vw'}}>
                                                         {
                                                             Icons && Icons.map((icon)=>{
                                                               if(page.name.toLowerCase().includes(icon.name.toLowerCase())){
                                                                return(
                                                                    <>
                                                                        {icon.icon}
                                                                    </>
                                                               )
                                                             }
                                                         })
                                                        }
                                                        </span> */}
                                                    {/*<FormattedMessage id = "common.name" />&nbsp;*/}
                                                    {page.name.replace(/MID/g, " " )}
									</Link>

								</h2>
						   </li>
						   )
						  }
						})
					  }
				</ul>

               {/* <Link exact to='/' className={linkClassName} onClick={onClick}>Home</Link>
               <Link exact to='/about_us_info' className={linkClassName} onClick={onClick} >About us</Link>
               <Link exact to='/hotels_in_ukraine' className={linkClassName} onClick={onClick}>Hotels</Link>
               <Link exact to='/' className={linkClassName} onClick={onClick}>Tours</Link>
                 <ul style={{listStyle:'none', paddingLeft:'10px'}}>
                    <li><Link exact to='/Kyiv' className={linkClassName} onClick={onClick}>Kyiv</Link></li>
                    <li><Link exact to='/Odesa' className={linkClassName} onClick={onClick}>Odesa</Link></li>
                    <li><Link exact to='/Lviv' className={linkClassName} onClick={onClick}>Lviv</Link></li>
                    <li><Link exact to='/Kharkiv' className={linkClassName} onClick={onClick}>Kharkiv</Link></li>
                    <li><Link exact to='/Vinnitsya' className={linkClassName}onClick={onClick}>Vinnitsya</Link></li>
                    <li><Link exact to='/Bukovel_Resort' className={linkClassName} onClick={onClick}>Bukovel</Link></li>
                    <li><Link exact to='/Mariupol' className={linkClassName} onClick={onClick}>Mariupol</Link></li>
                  </ul>
                <Link exact to='/gallery' className={linkClassName} onClick={onClick}>Gallery</Link> */}

    </nav>
  )
}
