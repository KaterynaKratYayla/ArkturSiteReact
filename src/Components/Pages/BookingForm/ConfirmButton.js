import React,{useState, useEffect} from 'react';
import axios from 'axios'
import { connect } from "react-redux";
import {useIntl, FormattedMessage} from 'react-intl'

import {OnlineSummary} from './OnlineSummary'
import {OfflineSummary} from './OfflineSummary'
import { Pay } from '../../Library/LiqPay/Pay'
import SaveReference from '../../Library/Notifications/SaveReference'

import './ConfirmButton.css'

export const ConfirmButton = ({AddContacts, name,surname,phone,email, app_service_id, smart_order_id, customer_reference, clicked}) =>{

    const {locale, messages} = useIntl();

    return(
      <>
      <button
            type='submit'
            class={clicked === false? 'SubmitButton':'NonActiveSubmit'}
            onClick={AddContacts}>
                    {
                        messages&&messages.map((item)=>{
                          if(item.sitepage_region_id === 7&&item.sitepage_type_id === 17){
                            return (
                               <FormattedMessage id={item.title.map((item1)=>item1.text)}/>
                            )
                          }
                        })
                      }
       </button>
       {
          clicked === true?(
              <>
               <OnlineSummary
                    name={name}
                    surname={surname}
                    phone={phone}
                    email={email}
                    app_service_id = {app_service_id}
                    />
               </>     
            
            ):null
       }
       {
        clicked === true?(
            <>
                {/*<button
                    class='ActivePmnt'>
                        Please proceed to PrivatBank terminal for payment
                </button>*/}
                <SaveReference customer_reference = {customer_reference} />
                <Pay
                    service_id = {app_service_id}
                    smart_order_id = {smart_order_id}
                />
            </>
            ):null
      }
    </>  
  
 )
}
