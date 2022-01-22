import React, {useState,useEffect} from 'react'
import axios from 'axios'
import {useSelector} from "react-redux";

// import {OfflineSummary} from './OfflineSummary'

export const EmailNotify = ({name,surname,phone,email,app_service_id,cart}) =>{

    // TODO: Передать сюда объект cart
    console.log('EmailNotify', cart)
	const { user: currentUser } = useSelector((state) => state.auth);

    // const [ModifyClientsRQ_Add, setModifyClientsRQ_Add] = useState([]);

    useEffect(() => {
        const ActionRQ = {
            "username":"Serodynringa",
            "password":"%tmMJZbABm6cB@tY",
            // "user_id" :1426,
            "user_id" :currentUser.user_id,
            "action":"ModifyClientsRQ",
            "refpartner":cart.refpartner?cart.refpartner:null,
            "data" :
                {
                    "service_id" : app_service_id,
                    "service_number" : 1,
                    "clients" :
                        [
                            {
                                "operation" : "add",
                                "client_type" : "buyer",
                                "site_client_id" : 1,
                                "name" : name,
                                "surname" : surname,
                                "phone" : phone,
                                "email" : email
                            },
                            // {
                            //     "operation" : "add",
                            //     "client_type" : "client",
                            //     "site_client_id" : 2,
                            //     "name" : "Gogel",
                            //     "surname" : "Mogel",
                            //     "phone" : "+38 (044) 490 7114",
                            //     "email" : "atest@arktur.ua"
                            // },
                        ],
                    "cart": cart
                }
        };

        axios.post('http://arkturdmc.com.ua:8011/', JSON.stringify({ActionRQ}))
            .then(response => {
                /*console.log('RESPONSE', response)
                setSendCart(response.data[0])*/
            })
            .catch(error =>{
                // setSendCart(undefined)
                console.log('[axios error]: ', error)
            });

    }, []);

    // console.log('ModifyClientsRQ_Add',ModifyClientsRQ_Add)

    return(
        <>
            {/* <div>Email sent.</div> */}
        </>
    )

}
