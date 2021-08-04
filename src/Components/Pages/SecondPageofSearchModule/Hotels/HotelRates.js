import React, {useState, useEffect} from 'react'
// import axios from "axios"
import {useHistory , useLocation} from "react-router-dom"
import {ValidateQuery} from '../../Helpers/helper'
import './HotelItemsCSS.css'
// import {SearchInner} from '../../../Library/SearchPannel/SearchPannel'
import moment from 'moment';
// import ReactHtmlParser from 'react-html-parser'
import 'moment/locale/uk'

import './HotelItemsCSS.css'

moment.locale('uk')

export const HotelRates = ({key,hotelTariff,hotelRooms,searchResults,hotelName})=>{
 
    const location = useLocation()
    const history = useHistory();
  
    let search_data = ValidateQuery(location)

    let newobj = {};
    let newobj1 = {};
    const filtered_hotelRooms = hotelRooms.map((item)=>{
   
    newobj1 = {roomType: `${item.room_name === '0'? 'Regular' : item.room_name}` + ' ' + item.room_type_name};
       return(
           newobj = Object.assign(newobj1,item.tariffs.sort((a,b)=>(parseInt(a.sum,10)-parseInt(b.sum,10)))[0])
            )
    })
    
    const filtered_new = filtered_hotelRooms.sort((c,d)=>(parseInt(c.sum,10)-parseInt(d.sum,10)))[0]

    const addToHotelDetails = (e) => {

        e.preventDefault()
      
        // const outline = {
        //     id: tariff.tour_id,
        //     date: selection
        // };
      
    //   setDetailsList([outline]);
      
        const route_hotel_query = `${location.search},hotel_name=${hotelName},hotel_id=${hotelTariff.hotel_id}`
        history.push(`/hotel_details/${route_hotel_query}`)
      }

    console.log('[HOTEL_RATES_RATES_1]', filtered_new)

    console.log('[HOTEL_RATES_RATES]',hotelRooms)
   return(
    <div style={{gridColumn:'2',
                 gridRow:'2'}}>

      <div style={{display:'grid',
                   gridTemplateColumns: '50% 50%',
                   gridAutoRows: 'minmax(50px, auto)'
                }}>
        <h3 style={{fontSize:'14px',
                 color: '#001959',
                 fontWeight: 'bold',
                 gridColumn:'1',
                 gridRow:'1'}}>
                             {filtered_new.roomType}
        </h3>
        <div style={{fontSize:'10px',
                    color:'grey',
                    fontStyle:'italic',
                    gridColumn:'1',
                    gridRow:'2'}}>
                            {hotelTariff.hotel_id}
        </div> 
        <h3 style={{fontSize:'14px',
                 color: 'blue',
                 fontWeight: 'bold',
                 gridColumn:'2',
                 gridRow:'1',
                 textAlign:'end'}}>
                            {hotelTariff.currency} {filtered_new.sum}
        </h3>
        <h4 style={{fontSize:'12px',
                 color: 'grey',
                 fontWeight: 'bold',
                 gridColumn:'2',
                 gridRow:'2',
                 textAlign:'end'}}>
                            Includes taxes and charges
        </h4>
          <div style={{
            gridColumn:'2',
            gridRow:'3',
            textAlign:'end'}}>
                <button 
                    type='submmit'
                    className='availableButtonGeneral'
                  onClick={addToHotelDetails}
                            >See Availability
                </button>
          </div>
       </div>         
    </div>
   )
}


