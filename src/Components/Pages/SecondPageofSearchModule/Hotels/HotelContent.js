import React, {useState, useEffect} from 'react'
import axios from "axios"
import {useDispatch, useSelector} from 'react-redux'
import {getContent} from "../../../../Redux/actions/content"
import {useIntl} from 'react-intl'

// import { Route, Switch, BrowserRouter, useHistory } from "react-router-dom";
import {SearchInner} from '../../../Library/SearchPanneldel/SearchPanneldel'
import {LoadingMessage} from '../../../Library/PageDevices/LoadingMessage'
import {Star} from '../../../Library/Icons/star'
// import {MyMapComponent} from '../../../Library/PageDevices/GoogleMaps'
import moment from 'moment';
import ReactHtmlParser from 'react-html-parser'
import 'moment/locale/uk'
import { getHotelContent } from '../../../../Redux/actions'
import {useWindowWidthAndHeight} from '../../Helpers/WindowResizeHook'

import './HotelItemsCSS.css'

moment.locale('uk')

export const HotelContent = ({hotel,hotelTariff})=>{

  const {locale} = useIntl();

  // console.log('[HOTEL_CONTENT]' , hotel)
  const [result, setResult] = useState('')
  const [emptyContent, setEmptyContent] = useState(false)
  
  const [width, height] = useWindowWidthAndHeight()
  // const [id, setId] = useState([])

// const hotelcontents = useSelector(state => state.hotelcontent.hotelcontent)
// const dispatch = useDispatch();

// useEffect (() =>{
//   dispatch(getHotelContent(hotel.hotel_id))
// },[hotel.hotel_id])

// console.log('[HOTEL_HOTEL_CONTENTS]', hotelcontents)

  useEffect ( () => {
    axios.get(`https://hotels-ua.biz/interface/hotelcontent?id=${hotel.hotel_id}&language=${locale}`)
      .then( res => {
        console.log('RES_DATA', res.data)
        setResult(res.data)
        })
      
    .catch( error => {
      setResult(undefined)
      console.log( '[axios error] : ' , error)
       });
   }, []);

   console.log('[HOTEL_RESULT] : ' , result)

  //   useEffect ( () => {
  //     dispatch (getContent (tour.tour_id));
  //   },[]);

  //   if( !contents ){
  //     return <div> Loading...</div>
  // }

   return(
     
    <div class='WrapperHotel_ItemContent'>
      
      <ul class={`${width>1000? 'Hotel_ItemContent':'Hotel_ItemContentSmallScreen'}`}>
        
        <>
      {
       result.length>0?(result.map((trip) =>{
         for(let key in trip){
          if(key==="hotel_parameters"){

            for(let key1 in trip[key]){
                console.log('KEY1',trip[key])
               return (
                <li class={`${width>1000?'Li_HotelContent':'Li_HotelContentSmallScreen'}`}>
                {/* // <li style={{gridColumn:'2', gridRow:'1'}}> */}
                  <div class={`${width>1000?'HotelNameStarRating':'HotelNameStarRatingSmallScreen'}`}>
                     <h3 style={{fontSize:'27px',
                                color: '#001959',
                                fontWeight: 'bold',
                                marginRight:'2vw'}}>
                                   {hotel.hotel_name} 
                     </h3>
                     <div>
                     
                      {
                        trip[key].category&&Array.from(trip[key].category).includes('*')?
                          Array.from(trip[key].category).map((star)=>
                              <span style={{marginLeft:'0.1vw', marginRight:'0.1vw'}}><Star/></span>
                          ):null

                      }
                     </div>
                    </div>
                    <div class={`${width>1000?null:'HotelAddressSmallScreen'}`}><span style={{fontWeight:'bold'}}>{hotel.city_name.toUpperCase()}</span> - {trip[key].address}</div>
                    {/* <MyMapComponent
                          isMarkerShown
                          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                          loadingElement={<div style={{ height: `100%` }} />}
                          containerElement={<div style={{ height: `400px` }} />}
                          mapElement={<div style={{ height: `100%` }} />}
                    /> */}
                  {/* <ul> */}
                    {/* { */}
                      {/* // Object.values(trip[key]).length>0&&Object.values(trip[key]).map((value)=>{ */}
                  
                        {/* // return( */}
                          {/* // <li class='HotelAddress'> */}
                              {/* {value&&Array.from(value).includes('*')?Array.from(value).map((star)=><Star/>):value} */}
                          {/* // </li> */}
                        {/* // ) */}
                      {/* // }) */}
                    {/* // } */}
                  {/* // </ul> */}
                </li>
              
               )
              // }
              
             }
          }
        }
        // if(trip.content_name === 'Summary'){
        //   return (
        //       <li class='Li_HotelContent'>
        //           {ReactHtmlParser(trip.text)}
        //       </li>
        //     )
        //   }
          
          if(trip.content_name === 'Image'){
            return (
            <li class={`${width>1000?'Li_Image':'Li_ImageSmallScreen'}`}
            >
                  <img 
                      // class='imageSearchrender'
                     style = {{
                      width: `${width>1000?'18vw':'90%'}`,
                      height: `${width>1000?'14vw':'100%'}`,
                      borderRadius: '5px'  
                      }}
                      src={'http://' + trip.text[2]}/> 
              </li>
            )
          }
          
          // else {
          //   return (
          //     <li class='Li_HotelContent'>
          //       <div style={{display:'flex', 
          //                    flexDirect:'row'}}>
          //          <h3 style={{fontSize:'27px',
          //                     color: '#001959',
          //                     fontWeight: 'bold',
          //                     marginRight:'2vw'}}>
          //                        {hotel.hotel_name} 
          //          </h3>
          //       </div>
          //    </li>
          //   )
          // }
         }
       )) : (
        // <div>{tour.name}{tour.duration}</div> 
        // <LoadingMessage/>
        
          <li class='Li_HotelContent'>
            <div style={{display:'flex', 
                         flexDirect:'row'}}>
               <h3 style={{fontSize:'27px',
                          color: '#001959',
                          fontWeight: 'bold',
                          marginRight:'2vw'}}>
                                {hotel.hotel_name} 
               </h3>
              </div>
            </li>
        
       )
     }
      </>
     </ul>
 
    </div>
   )
}


