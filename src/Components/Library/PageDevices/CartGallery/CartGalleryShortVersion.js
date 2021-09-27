import React , {useEffect, useState} from 'react'
// import axios from "axios"
import {useDispatch, useSelector} from 'react-redux'
import {LoadingMessage} from '../LoadingMessage'
import {useWindowWidthAndHeight} from '../../../Pages/Helpers/WindowResizeHook'

// import ReactHtmlParser from 'react-html-parser'

import './CartGalleryShortVersionCSS.css'

export const CartGalleryShortVersion = ({photos}) => {

    const [picked, setPicked] = useState(`https://${photos.text[0]}`)
    const [activeIndex, setActiveIndex] = useState()

    const [width, height] = useWindowWidthAndHeight()

    const pickAction = (index) =>(e)=>{
        setPicked(e.target.getAttribute('src'))
        setActiveIndex(index)
        console.log('[PICKED]:',e.target.getAttribute('src'))
    }

    return(
        <div>
            <div>
                  <img 
                      src={picked}
                      style={{padding:'5px',
                              marginLeft:'auto',
                              marginRight:'auto',
                              width:'100%',
                              height:'45vh',
                              borderRadius:'0.7vw'
                   }}/>
            </div>
                              
            <div style={{
                        display:'flex',
                         flexDirection:'row',
                        //  justifyContent:'space-evenly'
                        // display:'grid',
                        // gridTemplateColumns:'repeat(4,25%)'
                        }}>
                        {
                           photos.text.map((image,index,array)=>{
                             return(
                                  <div> 
                                         {(index > 1 && index <=5)?
                                             <img src={'https://'+image} 
                                                  class={activeIndex === index?'PickedImage':'NotPickedImage'}
                                                  onClick={pickAction(index)}/>:null}
                                   </div>
                                   )
                                })
                            }
                                        
                     </div>
        </div>
    )
}
