import React from "react";
import { LiqPayPay } from "react-liqpay";

console.log('[file]', 'src/Components/Library/LiqPay/Example.js');

export const Pay = ({service_id}) => {
    console.log('[file]:export const Pay', 'src/Components/Library/LiqPay/Pay.js');
    console.log('server_url: ', process.env.REACT_SERVER_URL);
    const payInfo = {
        amount: 1,
        currency: 'UAH',
        title: 'PAY'
    }

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
                description={`Payment for product
                              Payment for product
                              Payment for product`}
                // TODO: send booking_entity_id
                orderId={service_id}
                // orderId={Math.floor(1 + Math.random() * 900000000)}
                // result_url="http://localhost:3000"
                result_url={process.env.REACT_APP_URL}
                server_url={process.env.REACT_APP_SERVER_URL}
                product_description="Online courses"
                product_description_my="Online courses my"
                style={{margin: "8px"}}
                extra={[<ButtonComponent key="1"/>]}
                amount={payInfo.amount}
                currency={payInfo.currency}
            />
        </div>
    );
}
