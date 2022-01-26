import React, {useState, useEffect, useRef} from 'react'
import {useLocation} from 'react-router-dom'
import axios from 'axios'
import {ValidateQuery} from '../../Pages/Helpers/helper'

export const RegistrationRotary = () =>{
    let path ;
	const location = useLocation();	
    if(location.search){
        path = ValidateQuery(location)
        }
    console.log('ROTARY_REGISTRATION',location)
    console.log('ROTARY_REGISTRATION: path:',path)
    const user_id = path.user_id
    const [userData , setUserData] = useState([]);

    useEffect(() => {
        const ActionRQ = {
                "username":"Serodynringa",
                "password":"%tmMJZbABm6cB@tY",
                "user_id" : user_id,
                "action":"GetRotaryUserRQ"
        }
        axios.post(`${process.env.REACT_APP_SMART_URL}interface/xmlsubj/`, JSON.stringify({ActionRQ}))
            .then(response => {
                console.log('ROTARY_REGISTRATION: RESPONSE', response)
                // setUserData(response.data.client_data[0]) //data[0].data.client_data
                setUserData(response.data[0].data.client_data[0])
              })
            .catch(error =>{
                console.log('[axios error]: ', error)
              });

    }, []);
    console.log('ROTARY_REGISTRATION: userData:',userData)

    return(
        <>
            <h2>Thank you for your registration</h2>
            <div>Total: {userData.total}</div>
            <div>First name: {userData.firstname}</div>
            <div>Last name: {userData.lastname}</div>
            <div>Nik: {userData.nik}</div>
            <div>Position: {userData.position}</div>
            <div>Rclub: {userData.rclub}</div>
            <div>Rdnumber: {userData.rdnumber}</div>
            <div>City: {userData.city}</div>
            <div>Country: {userData.country}</div>
            <div>Email: {userData.email}</div>
            <div>Mobile: {userData.mobile}</div>
            <div>Loptions: {userData.loptions}</div>
            <div>Foptions: {userData.foptions}</div>
            <div>Aoptions: {userData.aoptions}</div>
            <div>Coptions: {userData.coptions}</div>
            <div>Message: {userData.message}</div>
            <div>Event: {userData.event}</div>
            <div>Event_tr_AH: {userData.event_tr_AH}</div>
            <div>Event_tr_HA: {userData.event_tr_HA}</div>
            <div>Gala_dinner: {userData.gala_dinner}</div>
        </>
    )
}