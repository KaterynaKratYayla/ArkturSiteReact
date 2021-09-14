import React, {useState} from 'react'
 
import './CartGalleryCSS.css'

export const CartGallery = ({photos,photoHeight}) => {

    const [picked, setPicked] = useState(`https://${photos.text[0]}`)
    const [activeIndex, setActiveIndex] = useState()

    const pickAction = (index) =>(e)=>{
        setPicked(e.target.getAttribute('src'))
        setActiveIndex(index)
        console.log('[PICKED]:',e.target.getAttribute('src'))
    }

    return(
        <div 
            style={{width:'96%',display:'flex',flexDirection:'row'}}
            >
            <div style={{width:'inherit'}}>
                  <img 
                      src={picked}
                      style={{padding:'5px',
                              marginLeft:'auto',
                              marginRight:'auto',
                              width:'37vw',
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
                        //  justifyContent:'space-evenly'
                        }}>
                        {
                           photos.text.map((image,index,array)=>{
                             return(
                                  <div> 
                                         {/* {(index > 1 && index <=5)? */}
                                             <img src={'https://'+image} 
                                                  class={activeIndex === index?'PickedImage':'NotPickedImage'}
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
