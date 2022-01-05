// import { Divider } from 'antd'
import React from 'react'
import {useHistory , useLocation} from "react-router-dom"
import {useIntl, FormattedMessage} from 'react-intl'
import moment from 'moment';

import {ValidateQuery} from '../Helpers/helper'
import {ClientDetails} from './ClientDetails'
import {CartDetails} from './CartDetails'
import {useWindowWidthAndHeight} from '../Helpers/WindowResizeHook'

import './BookingForm.css'

moment.locale('en')

export const BookingForm = (props) =>{
    const location = useLocation()
    const history = useHistory();

    // console.log('HISTORY',history)
    // console.log('LOCATION', location.state)

    let search_data = ValidateQuery(location)
    console.log('GUEST ITEM LOCATION', process.env.REACT_APP_PRIVATE_KEY)
    console.log('location: ', location)
    const lastLocation = location.pathname + location.search;
    localStorage.setItem('lastLocation', lastLocation);
    console.log('lastLocation: ', lastLocation);
  
    const {locale, messages} = useIntl();
    const [width, height] = useWindowWidthAndHeight();

    const CryptoJS = require("crypto-js");

    const ciphertext = CryptoJS.AES.encrypt(JSON.stringify(search_data), process.env.REACT_APP_PRIVATE_KEY).toString();
    localStorage.setItem('search_data', ciphertext);
    console.log('ciphertext',ciphertext)

    const date_difference = moment(search_data.start).diff(moment(moment().format('YYYY-MM-DD')),'days')
    const canx_deadline_date=moment(search_data.start).subtract(7, 'days').calendar()
    console.log('DATE_DIFFERENCE',date_difference)

    return(
      <div class='FormWrapper'>
        <h2>
          {
          messages.map((item)=>{
            if(item.sitepage_region_id === 6&&item.sitepage_type_id === 21){
              return (
               <FormattedMessage id={item.title.map((item1)=>item1.text)}/>
              )
            }
          })
        }
          {/* Secure booking — only takes 2 minutes! */}
        </h2>
        <h3 class="HeadPolicies">
            <span>{date_difference<7?(
              "Your booking is for arrivals in less then 7 days. In case of cancellation, the fee will amount to 100% of the reservaton cost")
                  :(`Free cancellation before 12:00 pm on ${moment(canx_deadline_date).format('YYYY-MM-DD')} (E. Europe Standard Time).You can change or cancel this stay for a full refund if plans change. Because flexibility matters.`)}
            </span>
        </h3>
          <div class={`${width>1000?'RegWrapper':'RegWrapperSmallScreen'}`}>
              <ClientDetails cart={search_data}/>
              <CartDetails cart={search_data}/>
          </div>
      </div>
    )
}
