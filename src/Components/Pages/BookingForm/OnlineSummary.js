import React, {useState,useEffect} from 'react'
import axios from 'axios'

import {OfflineSummary} from './OfflineSummary'

export const OnlineSummary = ({name,surname,phone,email,app_service_id}) =>{

    const [ModifyClientsRQ_Add, setModifyClientsRQ_Add] = useState([]);

    useEffect(() => {
        const ActionRQ = {
                "username":"Serodynringa",
                "password":"%tmMJZbABm6cB@tY",
                "user_id" :1426, 
                "action":"ModifyClientsRQ",
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
                           ]
                    }
                };

        axios.post('http://smartbooker.biz/interface/xmlsubj/', JSON.stringify({ActionRQ}))
            .then(response => setModifyClientsRQ_Add(response.data));
    }, []);

    console.log('ModifyClientsRQ_Add',ModifyClientsRQ_Add)

 return(
     <>
     <div>All ok</div>
     <div>
         {
             ModifyClientsRQ_Add.length > 0? (ModifyClientsRQ_Add.map((item)=>{
                return(
                    <h4>{item.action}</h4>
                )
             })):<OfflineSummary wait={2000}/>
         }
     </div>
     </>
 )   
    
}