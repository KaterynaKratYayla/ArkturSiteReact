import React, {useEffect, useState} from 'react';
import axios from "axios";

const PaymentResult = () => {

    const [paymentInfo, setPaymentInfo] = useState(null);

    useEffect(() => {
        const ActionRQ = {
            "username":"Serodynringa",
            "password":"%tmMJZbABm6cB@tY",
            "user_id" :1426,
            "action":"GetPaymentInfo",
            "data" :
                {
                    "service_id":3
                }
        };

        axios.post('http://smartbooker.biz/interface/xmlsubj/', JSON.stringify({ActionRQ}))
            .then(response => setPaymentInfo(response.data))
            .catch(error =>{
                setPaymentInfo(undefined)
                console.log('[axios error]: ', error)
            });

    }, []);
    return (
        <div>
            <p>Congrats!</p>
            <p>{paymentInfo}</p>
        </div>
    );
}

export default PaymentResult;
