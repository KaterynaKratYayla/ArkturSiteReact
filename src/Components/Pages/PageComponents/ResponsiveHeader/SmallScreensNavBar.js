import React, { useState } from 'react';
import { NavComponent } from './NavComponent';
// import {CloseOutlined , MenuOutlined } from '@ant-design/icons'
import {MenuBar} from '../../../Library/Icons/menubar'
import {MenuClose} from '../../../Library/Icons/menuclose'
import {ContentPages,SitePageType,SitePageRegion} from '../ContentPages'

const SmallScreensNavBar = ({width,sitepage_type}) =>{
    console.log("SMALLkk",sitepage_type)
    let [translate, setTranslate ] = useState(false);

    const sitePageType = SitePageType();
	const sitePageRegion = SitePageRegion();

    return(
        <div style={{width:'100%'}}>  
            
             <button className="hamburger-btn"
                     onClick= {()=> setTranslate(!translate)}>  {/* toggle translate */}
                  {/* change the btn text based on whether translate is true or false */} 
                 {/* {translate?<CloseOutlined className='MenuButtonIcon'/>:<UnorderedListOutlined className='MenuButtonIcon'/>} */}
                 {translate?
                    <span class='CloseMenuIcon'>
                        <MenuClose/>
                    </span>
                         :
                    <span class='MenuButtonIcon'>
                        <MenuBar />
                    </span>}
             </button>
             {/* /*hide and show the sidebar list based on whether translate is true or false*/ }
             <div id="sidebar-list" 
                //   style={{width:width*0.8}}
                  className={`${translate? "addTransition": "removeTransition"}`}>
                      
                <NavComponent
                    // navClass="nav-small"
                    linkClassName = "nav-small-link"
                    // pages={pages}
                    sitepage_type={sitepage_type}
                    width={width}
                    onClick = {()=>setTranslate(true)}  //set translate to true to hide the sidebar list
                />
             </div>
        </div>
    )
}
export default SmallScreensNavBar;