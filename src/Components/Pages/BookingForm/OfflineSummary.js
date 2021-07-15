import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'

import './OfflineSummary.css'

export const OfflineSummary = ({wait}) =>{

    const [hidden, setHidden] = useState("Hidden")

    useEffect(() => {
        setTimeout(Show,wait)
        },[]);

    const Show = () =>{
        setHidden("")
    }

    return(
        <h2 className={hidden}>Thank you for your request. Our team will get back to you as soon as possible with the confirmation and further details</h2>
    )
}