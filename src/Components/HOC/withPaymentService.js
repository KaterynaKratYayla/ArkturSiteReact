import React from "react";
import { PaymentServiceConsumer } from "../Context/PaymentServiceContext";

// Это функция, которая возвращает функцию, которая принимает компонент, который мы будем оборачивать
const withPaymentService = () => (Wrapped) => {

    return (props) => {
        return (
            <PaymentServiceConsumer>
                {/* Для того, чтобы получить получить данные из Consumer, нам нужно передать в него render-функцию. Это функция, которая примет в качестве своего значения тот сервис (bookStoreService), который мы передадим через Контекст. А вернуть из неё мы должны тот самый компонент (Wrapped), который оборачиваем, передать в него все свойства (...props), которые получил наш собственный компонент, и добавить в наш вложенный компонент ещё одно свойство, которое называется "bookStoreService". */}
                {
                    (paymentService) => {
                        return (<Wrapped {...props} paymentService={paymentService} />);
                    }
                }
            </PaymentServiceConsumer>
        );
    }
};

export default withPaymentService;
