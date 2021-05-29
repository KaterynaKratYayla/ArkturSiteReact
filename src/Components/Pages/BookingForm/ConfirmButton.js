import React,{useState, useEffect} from 'react';
import axios from 'axios'

import './ConfirmButton.css'
import Item from 'antd/lib/list/Item';
import { Pay } from '../../Library/LiqPay/Pay';

export const ConfirmButton = ({AddContacts, clientData, booking,clicked}) =>{

    console.log('CLIENTDATA1', clientData[0].name)
    // console.log('CLIENTDATA2',Object.entries(booking[0]))

    const [ModifyClientsRQ_Add, setModifyClientsRQ_Add] = useState([]);
    // const [visible,setVisible] = useState(false)
    // const [clicked,setClicked] = useState(false)

        let service_id_booking;

        for (let key in booking[0]){
            if(key === 'data'){
                for (let i in booking[0][key]){
                    if(i === 'bookings'){
                        for (let j in booking[0][key][i]){
                            if(j = 'service_id'){
                                service_id_booking = booking[0][key][i][j]
                            }
                        }
                    }
                }
          }
    }

    console.log('service_id_booking',service_id_booking)

    useEffect(() => {
        const ActionRQ = {
                "username":"Serodynringa",
                "password":"%tmMJZbABm6cB@tY",
                "user_id" :1426,
                "action":"ModifyClientsRQ",
                "data" :
                    {
                        "service_id" : service_id_booking,
                        "service_number" : 1,
                        "clients" :
                            [
                                {
                                    "operation" : "add",
                                    "client_type" : "buyer",
                                    "site_client_id" : 1,
                                    // "name" : clientData[0].name,
                                    // "surname" : clientData[0].surname,
                                    // "phone" : clientData[0].phone,
                                    // "email" : clientData[0].email
                                    "name" : "Kate",
                                    "surname" : "Krat",
                                    "phone" : "+380933266802",
                                    "email" : "kkrat@arktur.ua"
                                },
                                {
                                    "operation" : "add",
                                    "client_type" : "client",
                                    "site_client_id" : 2,
                                    "name" : "Gogel",
                                    "surname" : "Mogel",
                                    "phone" : "+38 (044) 490 7114",
                                    "email" : "atest@arktur.ua"
                                },
                           ]
                    }
                };

        axios.post('http://smartbooker.biz/interface/xmlsubj/', JSON.stringify({ActionRQ}))
            .then(response => setModifyClientsRQ_Add(response.data));
    }, []);

    console.log('ModifyClientsRQ_Add',ModifyClientsRQ_Add)

    return(
      <>
      {/* <div>{service_id_booking}</div> */}
      <button
            type='submit'
            class={clicked === false? 'SubmitButton':'NonActiveSubmit'}
            onClick={AddContacts}>
                Confirm Details
       </button>
       {
         clicked === true?(
          <button
                class='ActivePmnt'>
                Please proceed to PrivatBank terminal for payment
            </button>
            ):null
        }
       {
         clicked === true?(
             <Pay />
            ):null
        }
      </>
    )
}


            // {/* <button
            //     class={clicked === true? 'ActivePmnt':'NonActivePmnt'}>
            //     Proceed to PrivatBank for Payment
            //  </button> */}

