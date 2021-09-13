import React, {useState, useEffect}  from 'react'
import {useHistory , useLocation} from "react-router-dom"
import {useDispatch, useSelector} from 'react-redux'
// import {getPax} from "../../../Redux/actions/paxchoice"
// import axios from "axios"
// import {CartDemo} from '../Cart/Cart'

import './BookButtonHotelCSS.css'

export const BookButtonHotel = (props) =>{

    const {selectedAvailability,room_id,room_name,totalsum,tariff_id,contract_id,occupancy} = props;

    const [booking,setBooking] = useState([]);
    const location = useLocation();
    const history = useHistory();

    const search_data = useSelector(state=>state.hotelsearchdata.hotel_search_data)

    console.log('BOOKBUTTON', search_data)
 
     const AddToBasket=(e)=>{

        const newBooking={
            tariff_id:tariff_id,
            room_id:room_id,
            amount:totalsum,
            rooms:selectedAvailability
            }
        setBooking([newBooking])

        const route_hotel_query_form = `?service_type_id=${parseInt(1)},start=${search_data.start},end=${search_data.end},contract_id=${contract_id},tariff_id=${tariff_id},room_id=${room_id},numberofunits=${selectedAvailability},hotel_id=${search_data.hotel_id},adults=${occupancy},children=${search_data.children},htlName=${search_data.hotel_name},amount=${totalsum}`
        history.push(`/booking_form/${route_hotel_query_form}`, [...booking, newBooking])
    }

    return(
        
        /* style={{display: 'flex', */
                /* justifyContent: 'flex-end', */
                     /* alignItems: 'center'}}> */
            <button class='AddToBasketButton'
                onClick={AddToBasket}> 
                    {/* value={item1.smart_tariff_type_id} onClick={AddToBasket(Math.ceil(item3.sale*totalPax.counterAdults))}> */}
                    Book Now
            </button>
       

    )
}