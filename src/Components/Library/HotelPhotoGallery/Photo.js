import React from 'react'
import {css, jsx} from '@emotion/react'

console.log('[file]', 'src/Components/Library/HotelPhotoGallery/Photo.js');
const Photo = ({content}) => {


  console.log('[PHOTO] : ', content)
return (

 <div
    style={{
            width: '100%',
            paddingTop: '2vw',
        //     textAlign: 'left',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'}}

    >
      <img
        style={{width: '50%'}}
        src={content}/>
 </div>
 )
}

export default Photo;
