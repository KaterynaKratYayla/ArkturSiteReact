import React, {useState} from 'react'
import {useWindowWidthAndHeight} from '../../../Pages/Helpers/WindowResizeHook'

import './CartGalleryCSS.css'

export const CartGallery = ({photos,photoHeight,photoWidth,smallImageHeight}) => {

    console.log('PHOTOS',photos)

    const [picked, setPicked] = useState(`https://${photos.text[0]}`)
    const [activeIndex, setActiveIndex] = useState()

    const [width, height] = useWindowWidthAndHeight()

    const pickAction = (index) =>(e)=>{
        setPicked(e.target.getAttribute('src'))
        setActiveIndex(index)
        console.log('[PICKED]:',e.target.getAttribute('src'))
    }

    return(
        <div 
            style={{width:'96%',display:'flex',flexDirection:`${width>768?'row':'column'}`}}
            >
            <div style={{width:`${width>768?'60%':'100%'}`}}>
                  <img 
                      src={picked}
                      style={{padding:'5px',
                              marginLeft:'auto',
                              marginRight:'auto',
                              width:`${photoWidth?photoWidth:'100%'}`,
                              height:`${photoHeight}`,
                              borderRadius:'0.7vw'
                   }}/>
            </div>
                              
            <div style={{
                        // display:'flex',
                        //  flexDirection:'row',
                        //  justifyContent:'space-evenly'
                         display:'grid',
                         gridTemplateColumns:'repeat(4,25%)',
                         rowGap:'0',
                         width:`${width>768?'40%':'100%'}`,
                         height:`${photoHeight}`,
                         overflow:'scroll'
                        //  justifyContent:'space-evenly'
                        }}>
                        {
                           photos.text.map((image,index,array)=>{
                             return(
                                  <div> 
                                         {/* {(index > 1 && index <=5)? */}
                                             <img src={'https://'+image} 
                                                  class={activeIndex === index?'CartPickedImage':'CartNotPickedImage'}
                                                  style={{height:`${smallImageHeight?smallImageHeight:null}`}}
                                                // width={width*0.5}
                                                  onClick={pickAction(index)}/>
                                                  {/* :null} */}
                                   </div>
                                   )
                                })
                            }
                                        
                     </div>
        </div>
    )
}
