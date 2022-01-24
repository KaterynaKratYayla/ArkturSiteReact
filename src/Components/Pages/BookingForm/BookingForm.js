// import { Divider } from 'antd'
import React from 'react'
import {useHistory , useLocation} from "react-router-dom"
import {useIntl, FormattedMessage} from 'react-intl'
import moment from 'moment';

import {ValidateQuery} from '../Helpers/helper'
import {ClientDetails} from './ClientDetails'
import {CartDetails} from './CartDetails'
import {useWindowWidthAndHeight} from '../Helpers/WindowResizeHook'
import {getPickedCurrencyResponse} from '../../../Redux/actions/currency'

import './BookingForm.css'
import { useDispatch } from 'react-redux';

moment.locale('en')

export const BookingForm = (props) =>{
    const location = useLocation()
    const history = useHistory();
    const dispatch= useDispatch();

    // console.log('HISTORY',history)
    // console.log('LOCATION', location.state)

    let search_data = ValidateQuery(location)

    dispatch(getPickedCurrencyResponse(search_data.selected_currency))

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
    
    let canx_deadline_date;
    
    if(search_data.service_type_id === '11'&&search_data.nrf === '0'){
      canx_deadline_date = moment(search_data.start).subtract(7, 'days').calendar()
    }
    else if(search_data.service_type_id === '1'&&search_data.nrf === '0'){
      canx_deadline_date = moment(search_data.start).subtract(1, 'days').calendar()
    }
    else if(search_data.nrf === '1'){
      canx_deadline_date = moment(search_data.start).calendar()
    }

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
            <span>
              {
                search_data.service_type_id === '11'?
                 (date_difference<7?
                 
                    <span>Your booking is for arrivals in less then 7 days. In case of cancellation, the fee will amount to 100% of the reservaton cost</span>
                       :
                    <>
                        <span style={{marginRight:'5px'}}>
                          {
                             messages.map((item)=>{
                               if(item.id === 134){
                                 return (
                                   <FormattedMessage id={item.title.map((item1)=>item1.text)}/>
                                  )
                                }
                            })
                          }
                          <span style={{marginLeft:'5px'}}>{moment(canx_deadline_date).format('YYYY-MM-DD')}</span>
                      </span>
                       <span>
                          {
                             messages.map((item)=>{
                               if(item.id === 133){
                                 return (
                                   <FormattedMessage id={item.title.map((item1)=>item1.text)}/>
                                  )
                                }
                            })
                          }
                       </span>
                    </>
                  )
                 :
                 search_data.service_type_id === '1'&&search_data.nrf === '0'?
                   <>
                     <span style={{marginRight:'5px'}}>
                          {
                             messages.map((item)=>{
                               if(item.id === 134){
                                 return (
                                   <FormattedMessage id={item.title.map((item1)=>item1.text)}/>
                                  )
                                }
                            })
                          }
                          <span style={{marginLeft:'5px'}}>{moment(canx_deadline_date).format('YYYY-MM-DD')}</span>
                    </span>
                     <span>
                         {
                           messages.map((item)=>{
                             if(item.id === 133){
                                return (
                                  <FormattedMessage id={item.title.map((item1)=>item1.text)}/>
                                     )
                                  }
                                 })
                          }
                       </span>
                    </>  
                :
                  search_data.service_type_id === '1'&&search_data.nrf === '1'? 
                     <>
                       <span style={{marginRight:'5px'}}>
                          {
                             messages.map((item)=>{
                               if(item.id === 134){
                                 return (
                                   <FormattedMessage id={item.title.map((item1)=>item1.text)}/>
                                  )
                                }
                            })
                          }
                          <span style={{marginLeft:'5px'}}>{moment(canx_deadline_date).format('YYYY-MM-DD')}</span>
                      </span>
                       <span>
                       {
                         messages.map((item)=>{
                           if(item.id === 135){
                              return (
                                <FormattedMessage id={item.title.map((item1)=>item1.text)}/>
                                   )
                                }
                               })
                        }
                     </span>
                  </>  :
                 null
                }
            
            </span>
        </h3>
          <div class={`${width>1000?'RegWrapper':'RegWrapperSmallScreen'}`}>
              <ClientDetails cart={search_data}/>
              <CartDetails cart={search_data}/>
          </div>
      </div>
    )
}
