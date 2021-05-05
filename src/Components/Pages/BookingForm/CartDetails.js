import React , {useEffect, useState} from 'react'
import axios from "axios"

export const CartDetails = ({cart}) =>{

    console.log('CART', cart)

    const [sendCart, setSendCart] = useState([]);

    // const sc = axios.post('http://smartbooker.biz/interface/xmlsubj/', JSON.stringify({"title": {
    //         "username":"Serodynringa",
    //         "password":"%tmMJZbABm6cB@tY",
    //         "user_id" :1426,
    //         "action":"AddToCartRQ",
    //
    //         "data" :
    //             {
    //                 "bookings":
    //                     [
    //                         {
    //                             "start" : cart.start,
    //                             "tour_id" : cart.tour_id,
    //                             "tour_tariff_id" : cart.tour_tariff_id,
    //                             "tour_room_id" : cart.tour_room_id,
    //                             "numberofunits" : 1,
    //                             "hotel_id" : cart.hotel_id,
    //                             "hotel_room_id" : cart.hotel_room_id,
    //                             "hotel_rate_id" : null,
    //                             "calculation_data" :
    //                                 {
    //                                     "adults":cart.adults,
    //                                     "children":cart.children,
    //                                     "amount" : null
    //                                 }
    //                         }
    //                     ]
    //             }
    //     }}))
    //     .then(response => console.log('SENDCART-2',response.data));
        // .then(response => setSendCart(response.data));

    useEffect(() => {
        const ActionRQ = {
                "username":"Serodynringa",
                "password":"%tmMJZbABm6cB@tY",
                "user_id" :1426,
                "action":"AddToCartRQ",
                "data" :
                    {
                        "bookings":
                            [
                                {
                                    "start" : cart.start,
                                    "tour_id" : cart.tour_id,
                                    "tour_tariff_id" : cart.tour_tariff_id,
                                    "tour_room_id" : cart.tour_room_id,
                                    "numberofunits" : 1,
                                    "hotel_id" : cart.hotel_id,
                                    "hotel_room_id" : cart.hotel_room_id,
                                    "hotel_rate_id" : null,
                                    "calculation_data" :
                                        {
                                            "adults":cart.adults,
                                            "children":cart.children,
                                            "amount" : cart.amount
                                        }
                                }
                            ]
                    }
            };

        // const headers = {"username":"Serodynringa",
        //     "password":"%tmMJZbABm6cB@tY",
        //     "user_id" :1426,
        //     "action":"AddToCartRQ"}

        axios.post('http://smartbooker.biz/interface/xmlsubj/', JSON.stringify({ActionRQ}))
            .then(response => setSendCart(response.data));

        // axios.post('http://smartbooker.biz/interface/xmlsubj/', AddToCartRQ,{headers})
        //     .then(response => setSendCart(response.data));

    }, []);

    // useEffect(() => {
    //     const AddToCartRQ = {
    //         title: {
    //             // "username":"Serodynringa",
    //             // "password":"%tmMJZbABm6cB@tY",
    //             // "user_id" :1426,
    //             // "action":"AddToCartRQ",
    //
    //             "data" :
    //                 {
    //                     "bookings":
    //                         [
    //                             {
    //                                 "start" : cart.start,
    //                                 "tour_id" : cart.tour_id,
    //                                 "tour_tariff_id" : cart.tour_tariff_id,
    //                                 "tour_room_id" : cart.tour_room_id,
    //                                 "numberofunits" : 1,
    //                                 "hotel_id" : cart.hotel_id,
    //                                 "hotel_room_id" : cart.hotel_room_id,
    //                                 "hotel_rate_id" : null,
    //                                 "calculation_data" :
    //                                     {
    //                                         "adults":cart.adults,
    //                                         "children":cart.children,
    //                                         "amount" : null
    //                                     }
    //                             }
    //                         ]
    //                 }
    //         }
    //     };
    //
    //     const headers = {"username":"Serodynringa",
    //         "password":"%tmMJZbABm6cB@tY",
    //         "user_id" :1426,
    //         "action":"AddToCartRQ"}
    //
    //     axios.post('http://smartbooker.biz/interface/xmlsubj/', AddToCartRQ,{headers})
    //         .then(response => setSendCart(response.data));
    //
    // }, []);

    console.log('SENDCART',sendCart)
    return(
        <h2 class='CartDetails'>
                Hi, I am your cart
                <div>{cart.start}</div>
        </h2>
    )
}
