import React, {useState, useEffect}  from 'react'
import {useHistory , useLocation} from "react-router-dom"
import {useDispatch, useSelector} from 'react-redux'
// import {getPax} from "../../../Redux/actions/paxchoice"
// import axios from "axios"
// import {CartDemo} from '../Cart/Cart'

import './BookButtonHotelCSS.css'

export const BookButtonHotel = (props) =>{

    const {tariff_id,room_id,room_name,sum,selectedAvailability,room_type_name,room_subcategory_name,room_type_id,room_subcategory_id,tariff_name,tariff_type_id,tariff_type_name} = props;

    const [booking,setBooking] = useState([]);
    const location = useLocation();
    const history = useHistory();

    console.log('BOOKBUTTON', location.search)
 
     const AddToBasket=(e)=>{

        const newBooking={
            hotel_tariff_id:tariff_id,
            hotel_room_id:room_id,
            hotel_room_name:room_name,
            amount:sum,
            rooms:selectedAvailability,
            room_type_name:room_type_name,
            room_subcategory_name:room_subcategory_name,
            room_type_id:room_type_id,
            room_subcategory_id:room_subcategory_id,
            tariff_name:tariff_name,
            tariff_type_id:tariff_type_id,
            tariff_type_name:tariff_type_name


            // tour_id:hotel_id, (из поиска)
            // tour_tariff_id: tariff_id,
            // tourDate: start, (из поиска)
            // totalPax: totalPax,(из поиска)
            // paxPerRoom: value,(из поиска)
            // hotel_room_id: room_id,
            // hotelName: hotelChoice,(из поиска)
            // tour_room_id: tour_room.id, (не нужно)
            // hotel_id: hotel_id,(из поиска)
            // amount:sum
            }

        // console.log('ETARGET',e.target.value)
        setBooking([newBooking])

        const route_hotel_query_form = `${location.search}?hotel_tariff_id=${tariff_id},hotel_room_id=${room_id},hotel_room_name=${room_name},amount=${sum},rooms=${selectedAvailability},room_type_name=${room_type_name},room_subcategory_name=${room_subcategory_name},room_type_id=${room_type_id},room_subcategory_id=${room_subcategory_id},tariff_name=${tariff_name},tariff_type_id=${tariff_type_id},tariff_type_name=${tariff_type_name}`
        history.push(`/booking_form/${route_hotel_query_form}`, [...booking, newBooking])
    }

    return(
        <div>
            <button class='AddToBasketButton'
                onClick={AddToBasket}> 
                    {/* value={item1.smart_tariff_type_id} onClick={AddToBasket(Math.ceil(item3.sale*totalPax.counterAdults))}> */}
                    Book Now
            </button>
        </div>

    )
}