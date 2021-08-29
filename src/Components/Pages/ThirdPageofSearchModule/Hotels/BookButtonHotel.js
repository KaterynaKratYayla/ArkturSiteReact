import React, {useState, useEffect}  from 'react'
import {useHistory , useLocation} from "react-router-dom"
import {useDispatch, useSelector} from 'react-redux'
// import {getPax} from "../../../Redux/actions/paxchoice"
// import axios from "axios"
// import {CartDemo} from '../Cart/Cart'

import './BookButtonHotelCSS.css'

export const BookButtonHotel = (props) =>{

    const {tariff_id,room_id,sum,selectedAvailability,tariff_type_id,contract_id} = props;

    const [booking,setBooking] = useState([]);
    const location = useLocation();
    const history = useHistory();

    console.log('BOOKBUTTON', location.search)
 
     const AddToBasket=(e)=>{

        const newBooking={
            tariff_id:tariff_id, //ok
            room_id:room_id, //ok
            amount:sum, //ok
            rooms:selectedAvailability,
            tariff_type_id:tariff_type_id,

            // tourDate: start, (из поиска)
            // totalPax: totalPax,(из поиска)
            // paxPerRoom: value,(из поиска)
            // hotelName: hotelChoice,(из поиска)
            }
        setBooking([newBooking])

        const route_hotel_query_form = `?service_type_id=${1},start=${location.search.start},end=${location.search.end},contract_id=${contract_id},tariff_id=${tariff_id},room_id=${room_id},numberofunits=${selectedAvailability},hotel_id=${location.search.hotel_id},adults=${location.search.start},children=${location.search.start},htlName=${location.search.hotel_name},amount=${sum}`
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