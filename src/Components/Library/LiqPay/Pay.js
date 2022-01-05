import React from "react";
import {useIntl} from 'react-intl'
import { LiqPayPay } from "react-liqpay";
import {useSelector} from "react-redux";
import {useLocation} from "react-router-dom"
import {ValidateQuery} from '../../Pages/Helpers/helper'

console.log('[file]', 'src/Components/Library/LiqPay/Example.js');

export const Pay = ({service_id, smart_order_id,cart,client, service_number}) => {
    console.log('[file]:export const Pay', 'src/Components/Library/LiqPay/Pay.js');
    console.log('BUTTON_CART',cart)
    // console.log('server_url: ', process.env.REACT_APP_URL);

    //ВОТ ДОБАВИЛА ИНФО О ЛОКАЛИ . можешь включить параметр locale в запрос ниже
    const {locale} = useIntl();
    console.log('locale: ', locale)
	const { user: currentUser } = useSelector((state) => state.auth);
    const location = useLocation();
    let search_data = ValidateQuery(location);

    const CryptoJS = require("crypto-js");

    // TODO: Взять откуда-то site_order_id и site_service_id
    const orderData = {
        "username":"Serodynringa",
        "password":"%tmMJZbABm6cB@tY",
        // "user_id" :1426,
        "user_id" :currentUser.user_id,
        "refpartner":search_data.refpartner?search_data.refpartner:null,
        "language":locale,
        "action":"GetPaymentInfoRQ",
        "data" :
            {
                "site_order_id": 1,        // index of the order in the site (by default = 1) - в БД нет
                "smart_reference" : smart_order_id,	// twid_reference in Smart - for control
                "site_service_id" : 1,		// index of the service in the site
                "smart_service_id" : service_id,	// booking_entity.id in Smart
                "smart_service_number": service_number,		// На будущее, когда в заказе будет разрешено несколько сервисов - booking_entity.ref_serv_smart
            }
    }
    // Хотел зашиврофать state и восстановить его позже в Redux
	/* const { state } = useSelector((state) => state);
    // console.log('state: ', state);

    const cipherstate = CryptoJS.AES.encrypt(JSON.stringify(state), process.env.REACT_APP_PRIVATE_KEY).toString();
    localStorage.setItem('state', cipherstate); */

    const ciphertext = CryptoJS.AES.encrypt(JSON.stringify(orderData), process.env.REACT_APP_PRIVATE_KEY).toString();
    localStorage.setItem('orderData', ciphertext);

    localStorage.setItem('service_id', service_id);
    localStorage.setItem('smart_order_id', smart_order_id);

    const payInfo = {
        // amount: 1,
        // currency: 'UAH',
        // title: 'PAY'
        client: client,
        start: cart.start,
        service:cart.htlName.replace('%20',' '),
        adults:cart.adults,
        children:cart.children,
        amount:cart.amount,
        units:cart.numberofunits,
        currency: 'UAH'
    }

    // Описание платежа, которое выводится на странице ввода деталей платёжной карты
    // const paymentDescription = () => `title: ${payInfo.title}
    // amount: ${payInfo.amount}
    // currency: ${payInfo.currency}`;

      const paymentDescription = () =>
   `client: ${payInfo.client}
    start: ${payInfo.start}
    service: ${payInfo.service}
    adults: ${payInfo.adults}
    children: ${payInfo.children}
    amount: ${payInfo.amount}
    units:${payInfo.units}
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
            Proceed to payment
            {/* {`${payInfo.title} ${payInfo.amount} ${payInfo.currency}`} */}
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
                orderId={smart_order_id}
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
