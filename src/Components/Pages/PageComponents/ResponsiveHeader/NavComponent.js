import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux'
// import { Link } from 'react-scroll';
import {Link, NavLink} from 'react-router-dom'
import { PureContent } from '../MenuPageGenerator'
import {ContentPages} from '../ContentPages'
// import {icons} from '../../../Library/Icons/icons'
import {changeLang} from '../../../../Redux/actions/locale'
import {FormattedMessage} from 'react-intl';
import {localizeRoutePath} from '../../Helpers/localizeRoutePath'
import { LocalizationNavLink } from '../../../Library/Localization/LocalizationNavLink';
import {useIntl} from 'react-intl'

import './header.css'

export const NavComponent = ({onClick, navClass, linkClassName,sitepage_type})=>{
  // console.log("NAV_sitepage_type",sitepage_type)
  
  const {locale} = useIntl();

  const lang = useSelector(state=>state.locale.locale)

  const dispatch = useDispatch();

  useEffect ( () => {
		dispatch (changeLang ());
	  }, [])

  const pages = ContentPages(lang);

  console.log('PAGES',pages)
    return(
    <div className={navClass}>

        <ul class={linkClassName}>
              {
                  pages.length>0?pages.map((page)=>{
                   if(sitepage_type.sitepage_type_id === page.sitepage_type_id&&sitepage_type.sitepage_type_id!=='7'){
                      return(
                          <li key={page.id}>
                              <h2>
                                 <LocalizationNavLink to={`/sitepages/?name=${page.name},id=${page.id}`} onClick={onClick}>
                                    <FormattedMessage id={page.title.map((item1)=>item1.text)}/>
                                 </LocalizationNavLink> 
                              </h2>
                          </li>
                      )
                   }
                  }):(null)
              }	
              </ul>

    </div>
  )
}

// export const NavComponent = ({onClick, navClass, linkClassName,pages})=>{
//   return(
//   <nav className={navClass}>

//       <ul class={linkClassName}>
//           {
//           pages && pages.map((page)=>{
//             if(page.name.includes('MID')){	
//             return (
//             <li>
//                 <h2>
//                 <Link exact to={{pathname: `/${page.name.replace(/ /g, "_").toLowerCase()}`,
//                                  state: {id: page.id}}}
//                                  onClick={onClick}>
//                                           {page.name.replace(/MID/g, " " )}
//                 </Link> 
                             
//               </h2>
//              </li>
//              )
//             }
//           })
//           }
//       </ul>
//   </nav>
// )
// }