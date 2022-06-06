import React,{useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import {useIntl} from 'react-intl';

import './CanxBookingCSS.css'

export const CanxBookingButton = ({email, bookingNumber}) =>{

  const [CancelServicesRQ, setCancelServicesRQ] = useState();
  const { user: currentUser } = useSelector((state) => state.auth);

  console.log('currentUser.user_id',currentUser.user_id)
  const {locale} = useIntl();

  useEffect(() => {
    const ActionRQ = {   
    // CancelServicesRQ // Many services can be canceled by this action
	    "username": "Serodynringa",
	    "password": "%tmMJZbABm6cB@tY",
	    // "user_id": 1426,
        "user_id":currentUser.user_id,
	    "refpartner": 1361, // If "= 1361" - it is Id of "hotelsukraine.com.ua" else 
				// If "!= 0" - it is Id of partner; and it is in both cases "bo.company_id".
				// Otherwise, if "= 0", then "bo.company_id" is company of user, defined by "user_id" (by default - 1361)
	    "language": "EN",	// current site language
	    "action": "CancelServicesRQ",
        "language":locale,
	    "data": 
	        {		
		            "site_buyer_id": 1, // index of the buyer in the site (by default = 1), it is not in Smart's DB
		            "buyer_email": email, // For registered user this email can be omitted
				    // but this parameter "buyer_email" is mandatory for unregistered user
		            "services": // Multiple bookings can be canceled
		        [
			        {	
				        "site_order_id": 1,        	// index of the order in the site (by default = 1), it is not in Smart's DB		
        		        "smart_order_reference": bookingNumber, // booking.reference - customer reference
        		        "site_service_id": 1,      	// index of the service in the site, it is not in Smart's DB
				        "smart_service_number": 1	// booking_entity.ref_serv_smart - by default = 1
			        }
	        	]
	        }
        }
        axios.post(`${process.env.REACT_APP_SMART_URL}interface/xmlsubj/`, JSON.stringify({ActionRQ}))
        .then(response => {
            setCancelServicesRQ(response.data)
        })
}, []);

console.log('CancelServicesRQ',CancelServicesRQ)

return(
    <div>
        {
            CancelServicesRQ&&CancelServicesRQ.map((item)=>{
              if(item.success === true){
                return(
                  <div>
                      Your booking is cancelled
                  </div>  
                )
               }
             else 
             return(
                <div>
                    Sorry, your request was not processed. Please try again later.
                </div>
             )
            }) 
        }
    </div>
  )
}