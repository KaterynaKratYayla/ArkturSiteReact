// import { Divider } from 'antd'
import React from 'react'
import {useHistory , useLocation} from "react-router-dom"

import {ValidateQuery} from '../Helpers/helper'
import {ClientDetails} from './ClientDetails'
import {CartDetails} from './CartDetails'

import './BookingForm.css'

export const BookingForm = (props) =>{
    const location = useLocation()
    const history = useHistory();

    // console.log('HISTORY',history)
    // console.log('LOCATION', location.state)

    let search_data = ValidateQuery(location)
    console.log('GUEST ITEM LOCATION', search_data)

    return(
      <div class='FormWrapper'>
        <h2 style={{padding: '1vw',
                    border:'2px solid rgb(206, 207, 209)',
                    borderRadius:'0.5vw',
                    fontFamily:'Arial',
                    color:'blue',
                    fontSize:'22px',
                    fontWeight:'bold',
                    backgroundColor: '#d7ebfc',
                    lineHeight:'6vh'
                    }}>
                        Secure booking — only takes 2 minutes!
        </h2>
        <h3 style={{ padding: '1vw',
                    border:'2px solid rgb(206, 207, 209)',
                    borderRadius:'0.5vw',
                    fontFamily:'Arial',
                    color:'#102D69',
                    fontSize:'17px',
                    fontWeight:'bold',
                    backgroundColor: '#ecf3fa'
                    }}>
            <span>Free cancellation before Sat, Apr 24, 5:59pm (E. Europe Standard Time)</span>
            <span>You can change or cancel this stay for a full refund if plans change. Because flexibility matters.</span>
        </h3>
          <div class='RegWrapper'>
            <ClientDetails />
            <CartDetails cart={search_data}/>
          </div>
      </div>
    )
}