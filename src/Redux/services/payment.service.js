import axios from "axios";

export default class PaymentService {

    data = [];

    getPaymentInfo = () => {
        console.log("work_with_payment: getPaymentInfo ");
        const CryptoJS = require("crypto-js");
        const orderDataEncrypted = localStorage.getItem('orderData');
        const bytes  = CryptoJS.AES.decrypt(orderDataEncrypted, process.env.REACT_APP_PRIVATE_KEY);
        const orderData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        const ActionRQ = orderData;
        return axios.post('http://smartbooker.biz/interface/xmlsubj/', JSON.stringify({ActionRQ}))
            .then((response) => {
                const responseData = response.data;
                console.log("work_with_payment: responseData: getPaymentInfo ", responseData);
                return responseData;
            })
            .catch(error =>{
                console.log('[axios error]: ', error)
            });
    };

    getPaymentVoucher = (service_id) => {
        console.log("work_with_payment: getPaymentVoucher ");
        const ActionRQ = {
            "username":"Serodynringa",
            "password":"%tmMJZbABm6cB@tY",
            "user_id" :1426,
            "action":"GetPaymentVoucherRQ",
            "data" :
                {
                    "site_service_id" : 1,		// index of the service in the site
                    "smart_service_id" : service_id,	// booking_entity.id in Smart
                    "site_client_id" : 3,		// it must be BUYER only
                    "smart_client_id" : 5817	// it must be BUYER only
                }
        };
        return axios.post('http://smartbooker.biz/interface/xmlsubj/', JSON.stringify({ActionRQ}))
            .then((response) => {
                const responseData = response.data;
                console.log("work_with_payment: responseData: getPaymentVoucher ", responseData);
                // console.log("work_with_payment: response ", response);
                return responseData;
                // return response;
            })
            .catch(error =>{
                console.log('[axios error]: ', error)
            });
    };
}
