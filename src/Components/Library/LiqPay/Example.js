import React, { Component } from "react";
import { LiqPayPay, LiqPaySubscribe } from "react-liqpay";

console.log('[file]', 'src/Components/Library/LiqPay/Example.js');

export const Example = () => {
    console.log('[file]:export const Example', 'src/Components/Library/LiqPay/Example.js');
    const payInfo = {
        amount: 999,
        currency: 'USD',
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
        <div style={{ display: "flex" }}>
            <LiqPayPay
                publicKey={process.env.REACT_APP_PUBLIC_KEY}
                privateKey={process.env.REACT_APP_PRIVATE_KEY}
                // publicKey="sandbox_i47974490767"
                // privateKey="sandbox_6NcPUqW5M3fr4DMBIdBv7b8ovYPNLjEemElbFeXX"
                amount="3"
                description="Payment for product"
                currency="UAH"
                orderId={Math.floor(1 + Math.random() * 900000000)}
                result_url="http://domain.com/user/account"
                server_url="http://server.domain.com/liqpay"
                product_description="Online courses"
                style={{ margin: "8px" }}
                disabled={false}
            />
            <LiqPaySubscribe
                publicKey={process.env.REACT_APP_PUBLIC_KEY}
                privateKey={process.env.REACT_APP_PRIVATE_KEY}
                // publicKey="sandbox_i47974490767"
                // privateKey="sandbox_6NcPUqW5M3fr4DMBIdBv7b8ovYPNLjEemElbFeXX"
                amount="3"
                subscribePeriodicity="month"
                description="Payment for subscription"
                currency="USD"
                orderId={Math.floor(1 + Math.random() * 900000000)}
                result_url="http://domain.com/user/account"
                server_url="http://server.domain.com/liqpay"
                product_description="Online courses"
                style={{ margin: "8px" }}
                disabled={true}
            />
            <LiqPayPay
                publicKey={process.env.REACT_APP_PUBLIC_KEY}
                privateKey={process.env.REACT_APP_PRIVATE_KEY}
                description="Payment for product"
                orderId={Math.floor(1 + Math.random() * 900000000)}
                result_url="http://domain.com/user/account"
                server_url="http://server.domain.com/liqpay"
                product_description="Online courses"
                style={{ margin: "8px" }}
                extra={[<ButtonComponent key="1" />]}
            />
        </div>
    );
}

/*
class Example extends Component {
    const payInfo = {
        amount: 999,
        currency: 'USD',
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

    render() {
        return (
            <div style={{ display: "flex" }}>
                <LiqPayPay
                    publicKey={process.env.REACT_APP_PUBLIC_KEY}
                    privateKey={process.env.REACT_APP_PRIVATE_KEY}
                    amount="3"
                    description="Payment for product"
                    currency="UAH"
                    orderId={Math.floor(1 + Math.random() * 900000000)}
                    result_url="http://domain.com/user/account"
                    server_url="http://server.domain.com/liqpay"
                    product_description="Online courses"
                    style={{ margin: "8px" }}
                    disabled={true}
                />
                <LiqPaySubscribe
                    publicKey={process.env.REACT_APP_PUBLIC_KEY}
                    privateKey={process.env.REACT_APP_PRIVATE_KEY}
                    amount="3"
                    subscribePeriodicity="month"
                    description="Payment for subscription"
                    currency="USD"
                    orderId={Math.floor(1 + Math.random() * 900000000)}
                    result_url="http://domain.com/user/account"
                    server_url="http://server.domain.com/liqpay"
                    product_description="Online courses"
                    style={{ margin: "8px" }}
                    disabled={false}
                />
                <LiqPayPay
                    publicKey={process.env.REACT_APP_PUBLIC_KEY}
                    privateKey={process.env.REACT_APP_PRIVATE_KEY}
                    description="Payment for product"
                    orderId={Math.floor(1 + Math.random() * 900000000)}
                    result_url="http://domain.com/user/account"
                    server_url="http://server.domain.com/liqpay"
                    product_description="Online courses"
                    style={{ margin: "8px" }}
                    extra={[<ButtonComponent key="1" />]}
                />
            </div>
        );
    }
}
*/
