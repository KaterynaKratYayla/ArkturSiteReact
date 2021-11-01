import React ,{useState, useEffect} from 'react';
import axios from "axios"
import {useHistory , useLocation} from "react-router-dom"
import {useDispatch, useSelector} from 'react-redux'
import {useIntl} from 'react-intl'
import {ValidateQuery} from '../../Helpers/helper'
import {Star} from '../../../Library/Icons/star'
import { getHotelContent, getHotelSearch} from '../../../../Redux/actions';
import {ContentBlock} from './ContentBlock'
import {RatesBlock} from './RatesBlock/RatesBlock'
import {InnerSearchBlock} from './InnerSearchBlock'
import {getHotelCities} from '../../../../Redux/actions/hotelcities'

import './HotelDetailsCSS.css' 

export const HotelDetails = () =>{

    const {locale} = useIntl();
    const history = useHistory();
    const location = useLocation ();
    let search_data = ValidateQuery(location)

    console.log('[HOTEL_DETAILS_SEARCH]', search_data)
    
    const dispatch = useDispatch();
    const hotelcontents = useSelector(state => state.hotelcontent.hotelcontent)
    const searchUpdate = useSelector(state=>state.hotelsearchdata.occupancy_search_data)
    const citiesList = useSelector(state => state.hotelcities.hotel_cities)

    console.log('[OCCUPANCY]',searchUpdate)

useEffect (() =>{
  dispatch(getHotelContent(search_data.hotel_id,locale))
},[])

useEffect(() =>{
    dispatch(getHotelSearch(search_data))
},[search_data])

  useEffect ( () => {
    dispatch (getHotelCities(locale))
  },[locale])

    // console.log('[HOTEL_HOTEL_CONTENTS]', hotelcontents)
    // console.log('CITIES', citiesList)

    let filtered_hotel_name;
    let filtered_city_name;
    citiesList.forEach((hotel)=>{
        if(parseInt(hotel.hotel_id) === parseInt(search_data.hotel_id)){
            filtered_hotel_name = hotel.localized_hotel_name;
            filtered_city_name = hotel.localized_city_name;
        }
      })      

      console.log('NEWDATA',filtered_hotel_name, filtered_city_name)

    return (
        <div className='HotelDetailsWrapper'>

            <h2>{filtered_hotel_name} , {filtered_city_name}</h2>

                <ContentBlock 
                    hotelcontents={hotelcontents}
                    search_data={search_data}
                    // localized_hotel_name={filtered_hotel_name}
                    // localized_city_name={filtered_city_name}
                    />

                    <h3 style={{fontFamily: 'Arial',
                        color:'#102D69',
                        fontSize: '24px',
                        fontWeight: 'bold',
                        marginTop: '3vh',
                        }}>Availability</h3>

                    <InnerSearchBlock search_data={search_data}/>
                    {/* <h3  class="SearchDetails">
                        <h4>Check-in date : <span>{search_data.start}</span></h4>
                        <h4>Check-out date : <span>{search_data.end}</span></h4>
                        <h4>Rooms : <span>{search_data.rooms} </span></h4>
                        <h4>Adults : <span>{search_data.adults}</span> {search_data.children === "0"? null:`${' , Children : ' + `${<span>{search_data.children}</span>}`}`}</h4>
                        <button 
                            type='submmit'
                            className='availableButton'
                            // onClick={addToHotelDetails}
                                >Change search details
                        </button>
                    </h3> */}

                {/* <RatesBlock
                    search_data={search_data}
                />     */}

        </div>
    )
}