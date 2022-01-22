import React, {useState,useEffect} from 'react'
import axios from 'axios'
import {useIntl} from 'react-intl'
import {useSelector} from "react-redux";
import {EmailNotify} from './EmailNotify'
import {OfflineSummary} from './OfflineSummary'


export const OnlineSummary = ({name,surname,phone,email,app_service_id,cart}) =>{

    const [ModifyClientsRQ_Add, setModifyClientsRQ_Add] = useState([]);
	const { user: currentUser } = useSelector((state) => state.auth);

    
    useEffect(() => {
        const ActionRQ = {
                "username":"Serodynringa",
                "password":"%tmMJZbABm6cB@tY",
                // "user_id" :1426,
                "user_id" :currentUser.user_id,
                "refpartner":cart.refpartner?cart.refpartner:null,
                "action":"ModifyClientsRQ",
                "language":locale,
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
                                {
                                    "operation" : "add",
                                    "client_type" : "client",
                                    "site_client_id" : 2,
                                    "name" : name,
                                    "surname" : surname,
                                    "phone" : phone,
                                    "email" : email
                                },
                           ]
                    }
                };

        axios.post(`${process.env.REACT_APP_SMART_URL}interface/xmlsubj/`, JSON.stringify({ActionRQ}))
            .then(response => setModifyClientsRQ_Add(response.data));
    }, []);

    console.log('ModifyClientsRQ_Add',ModifyClientsRQ_Add)

 return(
     <>
     {/* <div>Thank your reservation!</div> */}
     <EmailNotify
                        name={name}
                        surname={surname}
                        phone={phone}
                        email={email}
                        app_service_id = {app_service_id}
                        cart={cart}
                      />
     <div>
         {
             ModifyClientsRQ_Add.length > 0? (ModifyClientsRQ_Add.map((item)=>{
                return(
                    <>
                      {/* <h4>{item.action}</h4> */}
                      <div>Thank your reservation!</div>
                   </>
                )
             })):<OfflineSummary wait={2000}/>
         }
     </div>
     </>
 )

}
