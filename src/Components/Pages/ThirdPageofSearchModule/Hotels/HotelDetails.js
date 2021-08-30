import React ,{useState, useEffect} from 'react';
import axios from "axios"
import {useHistory , useLocation} from "react-router-dom"
import {useDispatch, useSelector} from 'react-redux'
import {ValidateQuery} from '../../Helpers/helper'
import {Star} from '../../../Library/Icons/star'
import { getHotelContent, getHotelSearch } from '../../../../Redux/actions';
import {ContentBlock} from './ContentBlock'
import {RatesBlock} from './RatesBlock/RatesBlock'

import './HotelDetailsCSS.css' 

export const HotelDetails = () =>{

    const history = useHistory();
    const location = useLocation ();
    let search_data = ValidateQuery(location)

    console.log('[HOTEL_DETAILS_SEARCH]', search_data)
    
    const dispatch = useDispatch();
    const hotelcontents = useSelector(state => state.hotelcontent.hotelcontent)
    const searchUpdate = useSelector(state=>state.hotelsearchdata.occupancy_search_data)

    console.log('[OCCUPANCY]',searchUpdate)

useEffect (() =>{
  dispatch(getHotelContent(search_data.hotel_id))
},[search_data.hotel_id])

useEffect(() =>{
    dispatch(getHotelSearch(search_data))
})

    console.log('[HOTEL_HOTEL_CONTENTS]', hotelcontents)

    return (
        <div className='HotelDetailsWrapper'>

            <h2>{search_data.hotel_name.replace('%20',' ')} in {search_data.title}</h2>

                <ContentBlock 
                    hotelcontents={hotelcontents}
                    search_data={search_data}/>

                    <h3 style={{fontFamily: 'Arial',
                        color:'#102D69',
                        fontSize: '24px',
                        fontWeight: 'bold',
                        marginTop: '3vh',
                        }}>Availability</h3>

                    <h3  class="SearchDetails">
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
                    </h3>

                <RatesBlock
                    search_data={search_data}
                />    

        </div>
    )
}