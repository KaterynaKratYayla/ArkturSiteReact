import React from "react";
import {useIntl} from 'react-intl'
import { LiqPayPay } from "react-liqpay";

console.log('[file]', 'src/Components/Library/LiqPay/Example.js');

export const Pay = ({service_id, smart_order_id}) => {
    console.log('[file]:export const Pay', 'src/Components/Library/LiqPay/Pay.js');
    console.log('server_url: ', process.env.REACT_APP_URL);

    //ВОТ ДОБАВИЛА ИНФО О ЛОКАЛИ . можешь включить параметр locale в запрос ниже
    const {locale} = useIntl();
    console.log('locale: ', locale)

    const CryptoJS = require("crypto-js");

    const orderData = {
        "username":"Serodynringa",
        "password":"%tmMJZbABm6cB@tY",
        "user_id" :1426,
        "action":"GetPaymentInfoRQ",
        "data" :
            {
                "site_order_id" : 1,		// index of the order in the site (by default = 1)
                "smart_order_id" : smart_order_id,	// booking.id in Smart - for control
                "site_service_id" : 1,		// index of the service in the site
                "smart_service_id" : service_id,	// booking_entity.id in Smart
                "site_client_id" : 3,		// it must be BUYER only
                "smart_client_id" : 5817	// it must be BUYER only
            }
    }

    const ciphertext = CryptoJS.AES.encrypt(JSON.stringify(orderData), process.env.REACT_APP_PRIVATE_KEY).toString();
    localStorage.setItem('orderData', ciphertext);

    localStorage.setItem('service_id', service_id);

    const payInfo = {
        amount: 1,
        currency: 'UAH',
        title: 'PAY'
    }

    // Описание платежа, которое выводится на странице ввода деталей платёжной карты
    const paymentDescription = () => `title: ${payInfo.title}
    amount: ${payInfo.amount}
    currency: ${payInfo.currency}`;

    const ButtonComponent = () => (
        <button style={{
            backgroundColor: '#337ab7',
            color: '#fff',
            borderColor: '#2e6da4',
            border: '1px solid transparent',
            borderRadius: '4px',
            padding: '6px 12px',
            cursor: 'pointer'
        }}>
            {`${payInfo.title} ${payInfo.amount} ${payInfo.currency}`}
        </button>
    )

    return (
        <div style={{display: "flex"}}>
            <LiqPayPay
                publicKey={process.env.REACT_APP_PUBLIC_KEY}
                privateKey={process.env.REACT_APP_PRIVATE_KEY}
                // TODO: create Component to load description dynamically
                description={paymentDescription()}
                /*description={`${payInfo.title} ${payInfo.amount} ${payInfo.currency}`}*/
                /*description={`Payment for product
                              Payment for product
                              Payment for product`}*/
                // TODO: send booking_entity_id
                orderId={service_id}
                result_url={`${process.env.REACT_APP_URL}/${locale}/payment_result`}
                server_url={process.env.REACT_APP_SERVER_URL}
                product_description="Online courses"
                product_description_my="Online courses my"
                style={{margin: "8px"}}
                extra={[<ButtonComponent key="1"/>]}
                amount={payInfo.amount}
                currency={payInfo.currency}
                language={locale}
            />
        </div>
    );
}
