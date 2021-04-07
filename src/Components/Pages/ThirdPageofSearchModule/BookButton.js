import React, {useState, useEffect}  from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getPax} from "../../../Redux/actions/paxchoice"
import axios from "axios"
import {CartDemo} from '../Cart/Cart'

export const BookButton = ({hotel_room_id,value,totalPax,date,tour_id,hotelChoice,tour_room,hotel_id,tariff}) =>{
    

    console.log("TARIFF",tariff[0])
    const [booking,setBooking] = useState({})

     const AddToBasket=()=>{
        const newBooking={
            tour_id:tour_id,
            tourDate: date,
            totalPax: totalPax,
            paxPerRoom: value,
            hotel_room_id: hotel_room_id,
            hotelName: hotelChoice,
            tour_room_id: tour_room.id,
            hotel_id: hotel_id
        }
    
        setBooking(newBooking)
        console.log('BOOKING',booking)
    }

    return(
        <div>
            <>
            {
                tariff&&tariff[0].map((item)=>{
                   return item.rates.map((item1)=>{
                    if(item1.tariff_name.match(/\=.+/)[0].replace('=','') === hotel_id&&item.smart_category_id === tour_room.id)
                    //   return item1.rate_details.filter((item2,index,array)=>array.findIndex(t=>t.smart_category_id===item2.smart_category_id)===index).map((item3)=>{
                        return item1.rate_details.map((item3)=>{
                        if(totalPax.counterAdults >= item3.min_adult&&totalPax.counterAdults<=item3.max_adult)
                         return(
                            <div class='WrapperAddToBasket'>
                                <h4>{
                                // item1.tariff_name.match(/\=.+/)[0].replace('=','')+
                                item.room_name +', ' + item1.tariff_name + ', ' +item3.sale + ' UAH'}</h4>
                                <button class='AddToBasketButton' onClick={AddToBasket}>Add to Basket</button>
                            </div>
                        )
                  
                    })
                })
            })
            }
            </>
           
              <CartDemo/>
           
        </div>
    )
}