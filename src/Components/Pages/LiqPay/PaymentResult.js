import React, {useEffect, useState, Component} from 'react';
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {connect} from "react-redux";
import {setPaymenInfo, fetchPaymentInfo, fetchPaymentVoucher} from "../../../Redux/actions";
import { withPaymentService } from "../../HOC";
import { compose } from "../../../Redux/helpers";
import { CartDetails } from "./CartDetails";

class PaymentResult extends Component {

    componentDidMount() {
        this.props.fetchPaymentInfo();
    }

    render() {
        console.log("work_with_payment: ");
        if (this.props.paymentInfo === null) {
            return (
                <div>
                    <div>Hi!</div>
                </div>
            );
        } else {
            console.log("work_with_payment, paymentInfo: ", this.props.paymentInfo);
            const orderId = this.props.paymentInfo[0].data.smart_service_id;
            const isSuccess = this.props.paymentInfo[0].success ? "All is good" : "Please wait..";
            const openInNewTab = (url) => {
                const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
                if (newWindow) newWindow.opener = null
            }
            const CryptoJS = require("crypto-js");
            const searchDataEncrypted = localStorage.getItem('search_data');
            const bytes  = CryptoJS.AES.decrypt(searchDataEncrypted, process.env.REACT_APP_PRIVATE_KEY);
            const searchData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
            return (
                <div>
                    <CartDetails cart={searchData}/>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <div style={{marginRight: '5px'}}>Hi!</div>
                        <div style={{marginRight: '5px'}}>Your order id is {orderId}.</div>
                        <div style={{marginRight: '5px'}}>{isSuccess}.</div>
                        <div style={{marginRight: '5px'}}>Now you can</div>
                        <button style={{
                            backgroundColor: '#337ab7',
                            color: '#fff',
                            borderColor: '#2e6da4',
                            border: '1px solid transparent',
                            borderRadius: '4px',
                            padding: '6px 12px',
                            cursor: 'pointer'
                        }}
                            onClick={() => {
                                // this.props.fetchPaymentVoucher(orderId);
                                // openInNewTab(this.props.voucherData.data.voucherUrl);
                                openInNewTab(this.props.paymentInfo[0].data.voucherUrl);
                            }}
                        >Get voucher</button>
                    </div>
                    {/*<div>{this.props.voucherData.data.voucherUrl}</div>*/}
                </div>
            );
            /*if (this.props.voucherData !== null) {
                return (
                    <div>
                        <div>Hi!</div>
                        <div>{orderId}</div>
                        <div>{isSuccess}</div>
                        <button
                            onClick={() => {
                                this.props.fetchPaymentVoucher(orderId);
                                openInNewTab(this.props.voucherData.data.voucherUrl);
                            }}
                        >Get voucher</button>
                        {/!*<div>{this.props.voucherData.data.voucherUrl}</div>*!/}
                    </div>
                );
            } else {
                return (
                    <div>
                        <div>Hi!</div>
                        <div>{orderId}</div>
                        <div>{isSuccess}</div>
                        <button
                            onClick={this.props.fetchPaymentVoucher(orderId)}
                        >Get voucher</button>
                    </div>
                );
            }*/
        }
    }
}

const mapStateToProps = ({payment, voucher}) => {
    console.log("work_with_payment: mapStateToProps ");
    const {paymentInfo, loading} = payment;
    const {voucherData} = voucher;
    if (paymentInfo !== null) {
        console.log("work_with_payment: paymentInfo: ", paymentInfo);
        console.log("work_with_payment: loading", loading);
    }
    if (voucher !== null) {
        console.log("work_with_payment: voucherDoc: ", voucher);
        console.log("work_with_payment: loading", loading);
    }

    return { paymentInfo, voucherData };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    console.log("work_with_payment: mapDispatchToProps ");
    const { paymentService } = ownProps;
    return {
        fetchPaymentInfo: fetchPaymentInfo(paymentService, dispatch),
        // fetchPaymentVoucher: (orderId) => fetchPaymentVoucher(paymentService, dispatch, orderId)
    }
}

export default compose(
    withPaymentService(),
    connect(mapStateToProps, mapDispatchToProps)
)(PaymentResult);
