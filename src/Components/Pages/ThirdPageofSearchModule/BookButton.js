import React, {useState, useEffect}  from 'react'
import {useHistory , useLocation} from "react-router-dom"
import {useDispatch, useSelector} from 'react-redux'
import {getPax} from "../../../Redux/actions/paxchoice"
import axios from "axios"
// import {CartDemo} from '../Cart/Cart'

import './TourDetailsCSS.css'

export const BookButton = ({hotel_room_id,value,totalPax,date,tour_id,hotelChoice,tour_room,hotel_id,tariff}) =>{
    

    console.log("TARIFF",tariff[0],tour_room)
    const [booking,setBooking] = useState([])
    const [rateTotal, setrateTotal] = useState()
    const [tourTariffId, setTourTariffId] = useState()

    const location = useLocation()
    const history = useHistory();

     const AddToBasket=(param)=>(e)=>{
        const newBooking={
            tour_id:tour_id,
            tour_tariff_id:e.target.value,
            tourDate: date,
            totalPax: totalPax,
            paxPerRoom: value,
            hotel_room_id: hotel_room_id,
            hotelName: hotelChoice,
            tour_room_id: tour_room.id,
            hotel_id: hotel_id,
            amount:param
            }

        console.log('ETARGET',e.target.value)
        setBooking([newBooking])

        // const route_query_form = `${location.search},smart_id=123234`
        const route_query_form = `?start=${date},contract_id=${tour_id},tariff_id=${e.target.value},room_id=${tour_room.id},hotel_id=${hotel_id},hotel_room_id=${hotel_room_id},adults=${totalPax.counterAdults},children=${totalPax.counterChild},infant=${totalPax.counterInfant},htlName=${hotelChoice},amount=${param},service_type_id=${11}`
        history.push(`/booking_form/${route_query_form}`, [...booking, newBooking])
    }

    return(
        <div>
            <>
            {
                tariff&&tariff[0].map((item)=>{
                 if(item.smart_category_id === tour_room.id){
                   return item.rates.map((item1)=>{
                    // if(item1.tariff_name.match(/\=.+/)[0].replace('=','') === hotel_id&&item.smart_category_id === tour_room.id)
                    //   return item1.rate_details.filter((item2,index,array)=>array.findIndex(t=>t.smart_category_id===item2.smart_category_id)===index).map((item3)=>{
                      
                        return item1.rate_details.map((item3)=>{
                          if(totalPax.counterAdults >= item3.min_adult&&totalPax.counterAdults<=item3.max_adult){
                           return(
                            <div class='WrapperAddToBasket'>
                              <div style={{display:'block',width:'25vw'}}>
                                     <h4>
                                            <span style={{color:'blue'}}>{'TOTAL tour cost '}</span>
                                                                with {item1.tariff_name} :
                                            <span style={{color:'blue',fontWeight:'bold', fontSize:'22px'}}>
                                                {Math.ceil(item3.sale*totalPax.counterAdults)} UAH
                                            </span>
                                     </h4>
                                     <span style={{fontSize:'12px',
                                                  color:'grey',
                                                  fontWeight:'bold',
                                                  fontFamily:'Arial',
                                                  lineHeight:'8px'
                                                  }}>
                                                      {'Cost Includes: ' + item.room_name + ' ' + item3.sale + 'UAH tour per person' + ' x ' + totalPax.counterAdults + ' adults'}
                                    </span>
                                </div>
                               <button type='submit' class='AddToCartTour' value={item1.smart_tariff_type_id} onClick={AddToBasket(Math.ceil(item3.sale*totalPax.counterAdults))}>Book Now</button>
                            </div>
                        )
                       }
                     
                    })
                })
              }
            })
            }
            </>
           
              {/* <CartDemo/> */}
           
        </div>
    )
}