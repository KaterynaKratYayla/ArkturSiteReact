import React,{useState} from 'react'
import {Star} from '../../../Library/Icons/star'
import ReactHtmlParser from 'react-html-parser'
import {Gallery} from '../../../Library/PhotoGallery/PhotoGallery'
import {CartGallery} from '../../../Library/PageDevices/CartGallery/CartGallery'
import {useWindowWidthAndHeight} from '../../Helpers/WindowResizeHook'

import './HotelDetailsCSS.css'

export const ContentBlock = ({hotelcontents,search_data,localized_hotel_name,localized_city_name}) =>{
   
  console.log('[HOTELCONTENTS]', hotelcontents)
const [photoHeight, setPhotoHeight] = useState('55vh')
const [width, height] = useWindowWidthAndHeight()

console.log('WIDTH',width)

  return(
   <div class={`${width>768?"ContentDetails":"ContentDetailsSmallScreen"}`}>
     <>
       {
         hotelcontents.length>0?(hotelcontents.map((trip) =>{
           for(let key in trip){
              if(key==="hotel_parameters"){
                for(let key1 in trip[key]){
                    return (
                        <div style={{gridColumn:'1 / 3'}}>
                            {
                                trip[key].category&&Array.from(trip[key].category).includes('*')?
                                Array.from(trip[key].category).map((star)=>
                                    <span style={{marginLeft:'0.1vw', marginRight:'0.1vw'}}><Star/></span>
                                ):null

                            }
                              <div style={{fontFamily:'Arial',
                                            color: 'blue'}}>
                                <span style={{fontWeight:'bold'}}>
                                              {localized_city_name.toUpperCase()}
                                </span> - {trip[key].address}
                              </div>
                           
                      </div>
                     )
                  }
                }
            }
            
            if(trip.content_name === 'Body'){
                return (
                    // <div class='Li_HotelContent'>
                    <div style={{gridColumn: '2',
                                gridRow:'2', 
                                color:'#102D69', 
                                fontSize:'14px', 
                                height:`${photoHeight}`,
                                overflow:'scroll',
                                padding:'0.5vw',
                                marginLeft: '2vw'}}>
                        {ReactHtmlParser(trip.text)}
                    </div>
                )
             }
            if(trip.content_name === "Image"){
                return (
                    // <div class='GalleryTourDetails'>
                    <div style={{gridColumn: '1',gridRow:'2'}}>
                       {/* <Gallery galleryImages={trip.text}/> */}
                       <CartGallery photos={trip}
                                    photoHeight={photoHeight}/>
                    </div>
                  )
            } 
          }
         )):(null)
        }
      </>
    </div>
  )
}