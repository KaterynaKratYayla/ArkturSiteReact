import React from "react";

const {
    Provider: PaymentServiceProvider,
    Consumer: PaymentServiceConsumer
} = React.createContext();

export {
    PaymentServiceProvider,
    PaymentServiceConsumer
};
