import React, {useState, useEffect}  from 'react'
import {useHistory , useLocation} from "react-router-dom"
import {useDispatch, useSelector} from 'react-redux'
import {useIntl,FormattedMessage} from 'react-intl'
import { getHotelContent, getHotelSearch} from '../../../../Redux/actions';
import {useWindowWidthAndHeight} from '../../Helpers/WindowResizeHook'
// import {getPax} from "../../../Redux/actions/paxchoice"
// import axios from "axios"
// import {CartDemo} from '../Cart/Cart'

import './BookButtonHotelCSS.css'

export const BookButtonHotel = (props) =>{
    
    const {selectedAvailability,room_id,room_name,totalsum,tariff_id,contract_id,occupancy,pickedCurrency,refpartner,tariff_policy,start,end} = props;
    const {locale,messages} = useIntl();
    const [width, height] = useWindowWidthAndHeight()
    
    const [booking,setBooking] = useState([]);
    const location = useLocation();
    const history = useHistory();

    const redux_search_data = useSelector(state=>state.hotelsearchdata.hotel_search_data)
    const hotelcontents = useSelector(state => state.hotelcontent.hotelcontent)

    const dispatch = useDispatch();

    useEffect (() =>{
      dispatch(getHotelContent(redux_search_data.hotel_id,locale))
    },[])

    let hotel_name;
    hotelcontents.forEach((item)=>{
      if(item.content_name ==='Title')
        hotel_name = item.text
     }
    )

    // console.log('BOOKBUTTON', search_data)
 
     const AddToBasket=(e)=>{

        const newBooking={
            tariff_id:tariff_id,
            room_id:room_id,
            amount:totalsum,
            pickedCurrency:pickedCurrency,
            rooms:selectedAvailability
            }
        setBooking([newBooking])

        const route_hotel_query_form = `?${refpartner!==null?'refpartner='+refpartner+',':''}selected_currency=${pickedCurrency},service_type_id=${parseInt(1)},start=${start},end=${end},contract_id=${contract_id},tariff_id=${tariff_id},room_id=${room_id},numberofunits=${selectedAvailability},hotel_id=${redux_search_data.hotel_id},adults=${occupancy},children=${redux_search_data.children},htlName=${hotel_name},amount=${totalsum},nrf=${tariff_policy}`
        history.push(`/${locale}/booking_form/${route_hotel_query_form}`, [...booking, newBooking])
    }

    return(
        
        /* style={{display: 'flex', */
                /* justifyContent: 'flex-end', */
                     /* alignItems: 'center'}}> */
            <button class={width>=768? "AddToBasketButton": "AddToBasketButtonSmallScreen"}
                onClick={AddToBasket}> 
                    {/* value={item1.smart_tariff_type_id} onClick={AddToBasket(Math.ceil(item3.sale*totalPax.counterAdults))}> */}
                    {
                        messages&&messages.map((item)=>{
                          if(item.sitepage_region_id === 7&&item.sitepage_type_id === 14){
                            return (
                               <FormattedMessage id={item.title.map((item1)=>item1.text)}/>
                            )
                          }
                        })
                      }
            </button>
       

    )
}