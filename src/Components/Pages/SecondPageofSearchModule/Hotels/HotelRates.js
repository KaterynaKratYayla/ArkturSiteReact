import React, {useState, useEffect} from 'react'
// import axios from "axios"
import {useHistory , useLocation} from "react-router-dom"
import {useIntl, FormattedMessage} from 'react-intl'
import {ValidateQuery} from '../../Helpers/helper'
// import {SearchInner} from '../../../Library/SearchPannel/SearchPannel'
import moment from 'moment';
// import ReactHtmlParser from 'react-html-parser'
import {useWindowWidthAndHeight} from '../../Helpers/WindowResizeHook'
import {HotelBookButton} from '../../PageComponents/HotelBookButton/HotelBookButton'

import 'moment/locale/uk'

import './HotelItemsCSS.css'
import { useSelector } from 'react-redux';

moment.locale('uk')

export const HotelRates = ({key,hotelTariff,hotelRooms,searchResults,hotelName,cityName,date_difference,adults,pickedCurrency})=>{
 
  console.log('PROPS_PROPS',key,hotelTariff,hotelRooms,searchResults,hotelName,cityName)
  
  // console.log('HOTEL_ROOMS_2',hotelTariff)
    const location = useLocation()
    const history = useHistory();
    const {locale, messages} = useIntl();
  
    let search_data = ValidateQuery(location)
    const [width, height] = useWindowWidthAndHeight()

    const currencies = useSelector(state=>state.currency.currencies)

    let exchangeRate;

    currencies.forEach((curr)=>{
      if(curr.name === pickedCurrency)
        exchangeRate = parseInt(curr.value)
    })

    let min_rate = Number.MAX_VALUE;

    // console.log('[HOTELROOMS22]', hotelRooms)

    let newobj2 = {};

    hotelTariff.dates.forEach((item,index,array)=>{
      console.log('ONE',hotelName , item)
      if (item.date === searchResults.start){
        // console.log('ONE1',item.date)
        item.rooms.forEach((item1)=>{
          item1.tariffs.forEach((item2)=>{
            item2.prices.forEach((item3)=>{
              if(item3.sum < min_rate){
                min_rate = item3.sum
                newobj2={min_rate: min_rate, 
                         room_id: item1.room_id}
              }
            })
            // }
            // else 
            // message = "Not Available"
          })
        })
      }
    })

    // console.log('[MIN_RATE at]', hotelName , min_rate ,newobj2)

    // const filtered_new = filtered_hotelRooms.sort((c,d)=>(parseInt(c.sum,10)-parseInt(d.sum,10)))[0]

    // const addToHotelDetails = (e) => {

    //     e.preventDefault()
      
    //     const route_hotel_query = `${location.search},hotel_name=${hotelName},hotel_id=${hotelTariff.hotel_id}`
    //     history.push(`/hotel_details/${route_hotel_query}`)
    //   }

   return(

    <div style={{gridColumn:'2', gridRow:'2'}}>

      <div style={{display:'grid',
                   gridTemplateColumns: '50% 50%',
                   gridAutoRows: `${width>1000? 'minmax(40px, auto)': 'minmax(15px, auto)'}`
                }}>
                <>
                   {
                      hotelRooms.length? hotelRooms.map((item)=>{
                        if(item.room_id === newobj2.room_id){
                          return (
                            <h3 style={{fontSize:'14px',
                                       color: '#001959',
                                        fontWeight: 'bold',
                                         gridColumn:'1',
                                          gridRow:'1'}}>
                                                {item.room_name === '0'? 'Regular' : item.room_name} {item.room_type_name}
                             </h3>
                          )
                        }
                      }):<h3>Your search returned no result</h3>
                    }
                </>
        <div style={{fontSize:'10px',
                    color:'grey',
                    fontStyle:'italic',
                    gridColumn:'1',
                    gridRow:'2'}}>
                            {hotelTariff.hotel_id}
        </div> 
        <h3 style={{
                 gridColumn:'2',
                 gridRow:'1',
                 textAlign:'end',
                 display:'flex',
                 flexDirection:'column',
                 justifyContent:'flex-end'}}>

                            <div style={{
                                          fontSize:'12px',
                                          color: 'grey',
                                          fontWeight: 'bold',
                                          marginBottom:'1vh'}}>
                                                 {
                                                    messages&&messages.map((item)=>{
                                                      if(item.id === 144){
                                                        return (
                                                          <FormattedMessage id={item.title.map((item1)=>item1.text)}/>
                                                        )
                                                      }
                                                    })
                                                 } 
                                                 <span style={{marginLeft:'5px'}}></span> 

                                                 {date_difference}<span style={{marginRight:'5px'}}></span>
                                                 {
                                                    messages&&messages.map((item)=>{
                                                      if(item.id === 163){
                                                        return (
                                                          <FormattedMessage id={item.title.map((item1)=>item1.text)}/>
                                                        )
                                                      }
                                                    })
                                                 } 
                                                 
                                                 , {adults} <span style={{marginRight:'5px'}}></span>
                                                      {
                                                        messages&&messages.map((item)=>{
                                                          if(item.id === 141){
                                                            return (
                                                              <FormattedMessage id={item.title.map((item1)=>item1.text)}/>
                                                              )
                                                            }
                                                          })
                                                      } 
                            </div>
                            
                            <div style={{
                                          fontSize:'14px',
                                          color: 'blue',
                                          fontWeight: 'bold'}}>
                                                {pickedCurrency} {Math.round(newobj2.min_rate/exchangeRate)}
                                                {/* {hotelTariff.currency} {newobj2.min_rate} */}
                            </div>
         </h3>
        <h4 style={{fontSize:'12px',
                 color: 'grey',
                 fontWeight: 'bold',
                 gridColumn:'2',
                 gridRow:'2',
                 textAlign:'end'}}>
                              {
                                messages&&messages.map((item)=>{
                                  if(item.id === 162){
                                     return (
                                          <FormattedMessage id={item.title.map((item1)=>item1.text)}/>
                                         )
                                       }
                                     })
                                } 
        </h4>
         <div style={{
            gridColumn:'2',
            gridRow:'3',
            textAlign:'end'}}>
             {/* {
              newobj2.min_rate?( */}
               
                {/* <button 
                    type='submit'
                    class='availableButtonHotel'
                    onClick={addToHotelDetails}
                            >See Availability
                </button> */}

                <HotelBookButton 
                  innerText={
                    
                      messages&&messages.map((item)=>{
                        if(item.sitepage_region_id === 7&&item.sitepage_type_id === 16){
                          return (
                             <FormattedMessage id={item.title.map((item1)=>item1.text)}/>
                          )
                        }
                      })
                    }
                  
                  hotel={hotelTariff}
                  hotelsearch={location}
                  cityName={cityName}
                  hotelName={hotelName}/>
             {/* ): */}
               {/* <button  */}
            {/* //       class='onrequestButton'>
            //           <a href='https://arktur.ua/en/form/offline-booking-form'>Send your request</a>
            //   </button>
            // } */}
          </div>
       </div>         
    
    </div>
  
   )
}


