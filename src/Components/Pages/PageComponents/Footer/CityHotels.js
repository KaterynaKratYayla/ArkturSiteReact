import React, {useState, useEffect} from 'react'
import axios from "axios"
import {useDispatch, useSelector} from 'react-redux'
import { useLocation, Route, Switch, BrowserRouter, useHistory } from "react-router-dom";
import {SearchInner} from '../../../Library/SearchPanneldel/SearchPanneldel'
import {getGeneralHotels} from "../../../../Redux/actions/hotels"
import {getHotels} from '../../../../Redux/actions/hotels'
import moment from 'moment';
// import ReactHtmlParser from 'react-html-parser'
import {HotelContent} from '../../SecondPageofSearchModule/Hotels/HotelContent'
import {ValidateQuery} from '../../Helpers/helper'
import {useWindowWidthAndHeight} from '../../Helpers/WindowResizeHook'
import { getHotelSearch } from '../../../../Redux/actions';

import './CityHotelsCSS.css'
import { getByDisplayValue } from '@testing-library/dom';

export const CityHotels = () => {

    let location = useLocation();
    let history = useHistory();
    
    const [width, height] = useWindowWidthAndHeight()
    
    console.log('HOTEL ITEM LOCATION', location.pathname)

    const filteredLinkCityName = location.pathname.substring(0,location.pathname.indexOf("-Hotels")).replace(/\//g,'');
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
        return hotel.city_name.toLowerCase().includes(filteredLinkCityName.toLowerCase())
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
                            </div>
                        )
                       }
                    ):<h3>Sorry, we do not have hotels available in {filteredLinkCityName.toUpperCase()} at the moment</h3>
                 }
            </>
        </div>
        )
    }