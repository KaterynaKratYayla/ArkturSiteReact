import React, {useEffect, useState} from 'react';
import axios from "axios";

const PaymentResult = () => {

    const CryptoJS = require("crypto-js");

    const orderId = localStorage.getItem('service_id');
    const orderDataEncrypted = localStorage.getItem('orderData');
    const bytes  = CryptoJS.AES.decrypt(orderDataEncrypted, process.env.REACT_APP_PRIVATE_KEY);
    const orderData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    console.log('orderData: ', orderData);
    console.log('orderData_str: ', JSON.stringify({orderData}));

    const [paymentInfo, setPaymentInfo] = useState(null);

    useEffect(() => {
        const ActionRQ = orderData;
        console.log('orderData_ActionRQ: ', ActionRQ);
        console.log('orderData_ActionRQ_str: ', JSON.stringify({ActionRQ}));

        axios.post('http://smartbooker.biz/interface/xmlsubj/', JSON.stringify({ActionRQ}))
            .then(response => setPaymentInfo(response.data))
            .catch(error =>{
                setPaymentInfo(undefined)
                console.log('[axios error]: ', error)
            });

    }, []);
    console.log('paymentInfo: ', paymentInfo);
    return (
        <div>
            <p>Congrats!</p>
            <p>{orderId}</p>
        </div>
    );
}

export default PaymentResult;
