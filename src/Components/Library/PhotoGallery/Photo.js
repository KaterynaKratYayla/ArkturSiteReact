import React from 'react'
import {css, jsx} from '@emotion/react'
import {useWindowWidthAndHeight} from '../../Pages/Helpers/WindowResizeHook'

import ArkturDMClogo from '../Images/ArkturDMClogo.svg'

const Photo = ({content}) => {
  const [width, height] = useWindowWidthAndHeight()
return (

 <div    
    style={{
            width: '100%',
            paddingTop: '0.5vw',
            paddingBottom: '5vw',
        //     textAlign: 'left',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'}}

    >
      <img 
        // style={{width: '50%', height: '60vh' }} 
        style={{height: `${height/2}px`,width:'40%'}} 
        // src={content.includes('jpg') ? 'http://' + content : ArkturDMClogo}/> 
        src={content}/>
 </div>
 )
}

export default Photo;