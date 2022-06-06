import React, {useEffect, useState} from 'react'
import axios from 'axios'

export const BookingRQ = () =>{

 const [bookingRQ, setBookingRQ] = useState()

    useEffect(() => {
        const ActionRQ = {   
       // GetBookingsRQ
        	"username": "Serodynringa",
	        "password": "%tmMJZbABm6cB@tY",
	        "user_id": 1426, // Id of client - booking_entity.user_id
	        "refpartner": 1361, // If "= 1361" - it is Id of "hotelsukraine.com.ua" else 
				// If "!= 0" - it is Id of partner; and it is in both cases "bo.company_id".
				// Otherwise, if "= 0", then "bo.company_id" is company of user, defined by "user_id" (by default - 1361)
        	"language": "EN",	// current site language
            "action": "GetBookingsRQ",
            "data":
	            {         
		            "selection_period_start": "2022-01-25",	// selection period start date, by default - today
		            "selection_period_end": "2022-02-10", 	// selection period end date, by default - "selection_period_start"
		            "getting_from": "cart", // "cart" - services from cart, "bookings" - booked services (by default), "all" - both services from cart and booked 
                    "getting_clients": 	"no", // "yes" - with list of clients, "no" - without list of clients (by default)
			        // buyer must be extracted in any case but only when "getting_clients": "yes"
		            "all_users":		"no", // "yes" - services for all "user_id" of the "refpartner", "no" - services of the "user_id" only (by default)
		            "all_refpartners":	"no", // "yes" - services for all "refpartner" of the "user_id", "no" - services of the "refpartner" only	(by default)	
		            "all_services":		"no"  // "yes" - all services of Smart, "no" - services from Site only (by default)
	            }
            }
            axios.post(`${process.env.REACT_APP_SMART_URL}interface/xmlsubj/`, JSON.stringify({ActionRQ}))
            .then(response => {
                setBookingRQ(response.data)
            })
    }, []);
    

    return(
        <div>
            BookingResponse
        </div>
    )
}