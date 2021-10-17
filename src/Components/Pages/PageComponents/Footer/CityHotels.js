import React, {useState, useEffect} from 'react'
import axios from "axios"
import {useDispatch, useSelector} from 'react-redux'
import { useLocation, Route, Switch, BrowserRouter, useHistory } from "react-router-dom";
import {useIntl,FormattedMessage} from 'react-intl'
import {SearchInner} from '../../../Library/SearchPanneldel/SearchPanneldel'
import {getGeneralHotels} from "../../../../Redux/actions/hotels"
import {getHotels} from '../../../../Redux/actions/hotels'
import moment from 'moment';
// import ReactHtmlParser from 'react-html-parser'
import {HotelContent} from '../../SecondPageofSearchModule/Hotels/HotelContent'
import {ValidateQuery} from '../../Helpers/helper'
import {useWindowWidthAndHeight} from '../../Helpers/WindowResizeHook'
import { getHotelSearch } from '../../../../Redux/actions';
import {HotelBookButton} from '../HotelBookButton/HotelBookButton'

import './CityHotelsCSS.css'
import { getByDisplayValue } from '@testing-library/dom';

export const CityHotels = () => {

    let location = useLocation();
    let history = useHistory();
    
    const {locale,messages} = useIntl();
    const [width, height] = useWindowWidthAndHeight()

    const search_details=ValidateQuery(location)
    console.log('LOCATION_SEARCH',search_details)

    const filteredLinkCityName = search_details.name.substring(0,search_details.name.indexOf("-Hotels".toLowerCase())).replace(/\//g,'');
    console.log('TESTPATH',filteredLinkCityName)
        
    const dispatch = useDispatch();
    
    const citiesList = useSelector(state => state.cities.locs)
    const general_smart_hotels = useSelector(state => state.hotels.general_hotels)
    
    useEffect ( () => {
       dispatch (getHotels ());
    }, []);
        console.log('[CITIESLIST] : ' , citiesList)
    
    useEffect ( () => {
       dispatch (getGeneralHotels ());
      }, [])

      console.log('HOTELLIST',general_smart_hotels)

      const filteredCities = general_smart_hotels.filter((hotel)=>{
        return hotel.city_name.toLowerCase().includes(filteredLinkCityName.toLowerCase()) === true; 
      })

      console.log('filteredHotels',filteredCities)
    
        return(
          <div class={`${width>1000?"HotelFooterPages":"HotelFooterPagesSmallScreen"}`}>
            
            <h2>Hotels in {filteredLinkCityName.toUpperCase()}</h2>
             <>
                {
                    filteredCities?filteredCities.map((filtered_hotel)=>{
                      return(
                            <div class={`${width>1000?'HotelContentWrapper':'HotelContentWrapperSmallScreen'}`}>
                                <HotelContent hotel={filtered_hotel}/>
                                <HotelBookButton innerText=  {
                                                   messages&&messages.map((item)=>{
                                                    if(item.sitepage_region_id === '6'&&item.sitepage_type_id === '16'){
                                                      return (
                                                        <FormattedMessage id={item.title.map((item1)=>item1.text)}/>
                                                        )
                                                      }
                                                    })
                                                   } 
                                                 hotel={filtered_hotel}
                                                 hotelsearch={location}/>
                            </div>
                        )
                       }
                    ):<h3>Sorry, we do not have hotels available in {filteredLinkCityName.toUpperCase()} at the moment</h3>
                 }
            </>
        </div>
        )
    }

// export const CityHotels =()=>{
//   return(
//     <h2>Hi Kate</h2>
//   )
// }
