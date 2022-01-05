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
            style={{width:'96%',height:`${width>768?'55vh':'85vh'}`,display:'flex',flexDirection:`${width>768?'row':'column'}`}}
            >
            <div style={{width:`${width>768?'60%':'100%'}`,display:'flex',justifyContent:'center'}}>
                  <img 
                      src={picked}
                      style={{padding:'5px',
                              marginLeft:'auto',
                              marginRight:'auto',
                            //   width:`${photoWidth?photoWidth:'100%'}`,
                            // width:'100%',
                            maxHeight:'100%',
                            // height:'65vh',
                            // maxHeight:'65vh',
                            objectFit:'cover',
                            //   height:`${photoHeight}`,
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
                        //  height:`${photoHeight}`,
                         overflow:'scroll'
                        //  justifyContent:'space-evenly'
                        }}>
                        {
                           photos.text.map((image,index,array)=>{
                             return(
                                  <div> 
                                             <img src={'https://'+image} 
                                                  class={activeIndex === index?'CartPickedImage':'CartNotPickedImage'}
                                                  style={{height:`${smallImageHeight?smallImageHeight:null}`}}
                                                  onClick={pickAction(index)}/>
                                   </div>
                                   )
                                })
                            }
                                        
                     </div>
        </div>
    )
}
