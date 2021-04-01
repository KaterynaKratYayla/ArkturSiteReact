import React, { useState } from 'react';
import { NavComponent } from './NavComponent';
// import {CloseOutlined , MenuOutlined } from '@ant-design/icons'
import {MenuBar} from '../../../Library/Icons/menubar'
import {MenuClose} from '../../../Library/Icons/menuclose'

console.log('[file]', 'src/Components/Pages/PageComponents/ResponsiveHeader/SmallScreensNavBar.js');
const SmallScreensNavBar = ({pages,width}) =>{
    // declare 'translate' as a state variable
    console.log('PAGES', pages)
    let [translate, setTranslate ] = useState(false);
    return(
        <div>
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
                    pages={pages}
                    width={width}
                    onClick = {()=>setTranslate(true)}  //set translate to true to hide the sidebar list
                />
             </div>
        </div>
    )
}
export default SmallScreensNavBar;
