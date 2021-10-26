import React , {useEffect}from 'react'
import {useHistory , useLocation} from "react-router-dom"
import {useSelector, useDispatch} from "react-redux"
import {useIntl} from 'react-intl'
import {changeLang} from '../../../../Redux/actions/locale'
import {ValidateQuery} from '../../Helpers/helper'

export const HotelBookButton = ({innerText,hotel,hotelsearch,cityName,hotelName}) =>{
    
  // console.log('HOTEL_HOTEL',hotel)
  const {locale} = useIntl();
    let search_data = ValidateQuery(hotelsearch)
    
    console.log('HOTELSEARCH',search_data )
    // const location = useLocation()
    const history = useHistory();

    const lang = useSelector(state=>state.locale.locale)
    const dispatch = useDispatch();

    useEffect ( () => {
      dispatch (changeLang ());
      }, [])

    const addToHotelDetails = (e) => {

        e.preventDefault()
      
        const route_hotel_query = `?title=${hotel.eng_hotel_name},cityName=${hotel.eng_city_name},${search_data.start?`start=${search_data.start}`:`start=${null}`},${search_data.end?`end=${search_data.end}`:`end=${null}`},id=${hotel.hotel_id},${search_data.city_id?`city_id=${search_data.city_id}`:`city_id=${hotel.city_id}`},${search_data.adults?`adults=${search_data.adults}`:`adults=${null}`},${search_data.children?`children=${search_data.children}`:`children=${null}`},${search_data.rooms?`rooms=${search_data.rooms}`:`rooms=${null}`},hotel_name=${hotel.eng_hotel_name},hotel_id=${hotel.hotel_id}`
        history.push(`/${locale}/hotel_details/${route_hotel_query}`)
      }

    return(
        <button 
             type='submit'
             class='availableButtonHotel'
             onClick={addToHotelDetails}
                >{innerText}
      </button>
    )
}