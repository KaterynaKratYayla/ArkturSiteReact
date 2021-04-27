// import { Link } from 'react-scroll';
import {Link, NavLink} from 'react-router-dom'
import { PureContent } from '../MenuPageGenerator'
import {ContentPages} from '../ContentPages'
// import {icons} from '../../../Library/Icons/icons'
import './header.css'

export const NavComponent = ({onClick, navClass, linkClassName,sitepage_type})=>{
  console.log("NAV_sitepage_type",sitepage_type)
  const pages = ContentPages();
    return(
    <div className={navClass}>

        <ul class={linkClassName}>
              {
                  pages.length>0?pages.map((page)=>{
                   if(sitepage_type.sitepage_type_id === page.sitepage_type_id){
                      return(
                          <li key={page.id}>
                              <h2>
                                          <Link to={`/${page.title.map((item1)=>item1.text)}/?id=${page.id}`}
                                                onClick={onClick}>
                                            {page.title.map((item1)=>item1.text)}
                                          </Link> 
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