import React from 'react'
import {useLocation} from 'react-router-dom'

export const RegistrationRotary = () =>{

    const location = useLocation();
    console.log('ROTARY_REGISTRATION',location)

    return(
        <h2>Thank you for your registration</h2>
    )
}