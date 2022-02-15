import React, {useState, useEffect}  from 'react'
import {useHistory , useLocation} from "react-router-dom"
import {useDispatch, useSelector} from 'react-redux'
import {useIntl,FormattedMessage} from 'react-intl'

// import {getPax} from "../../../../Redux/actions/paxchoice"
import axios from "axios"
import {useWindowWidthAndHeight} from '../../Helpers/WindowResizeHook'
// import {CartDemo} from '../Cart/Cart'

import './TourDetailsCSS.css'

export const NoHotelBookButton = ({totalPax,start,tour_id,tariff_id,amount,selected_currency}) =>{
    
    // console.log("TARIFF",tariff[0],tour_room)
    const {locale,messages} = useIntl();
    
    const [booking,setBooking] = useState([])
    const history = useHistory();

    const [width, height] = useWindowWidthAndHeight()

    const AddToBasket= () =>{
      
        const route_query_form = `?selected_currency=${selected_currency},start=${start},contract_id=${tour_id},tariff_id=${tariff_id},adults=${totalPax.adults},children=${totalPax.children},amount=${amount},service_type_id=${11}`
        history.push(`/${locale}/booking_form/${route_query_form}`)
    }

    return(
        <button type='submit' class='AddToCartTour' onClick={AddToBasket}>
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
