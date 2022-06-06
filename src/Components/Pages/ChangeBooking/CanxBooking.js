import React,{useEffect, useState} from 'react';
import axios from 'axios';
import { DatePicker ,Space , Select , InputNumber, Input , Radio} from 'antd';
import { CanxBookingButton } from './CanxBookingButton';
import {BookingRQ} from './BookingRQ.js'

import './CanxBookingCSS.css'

export const CanxBooking = () =>{

    const [bookingNumber, setBookingNumber] = useState('');
    const [email,setEmail] = useState('');
    const [clicked, setClicked] = useState(false)

    const InputBookingNumber = (e) =>{
        setBookingNumber(e.target.value)
    }

    const InputEmail = (e) =>{
        setEmail(e.target.value)
    }

    const CanxBooking = (e) =>{
       setClicked(true)
    //    e.target.setAttribute('disabled','disabled')

    }

    return(
      <div class="CanxForm">
        
        <h2 style={{alignSelf: 'center',
                     color: 'darkblue',
                     marginBottom:'4vh'
                     }}>Cancel Booking</h2>
        
        <div style={{display:'flex',
                     flexDirection:'row',
                     justifyContent:'space-around',
                     marginBottom:'1vh'}}>
            <label>Your booking number</label>
            <Input style={{width:'80%',background:'white'}} 
                   onChange={InputBookingNumber}
                   value={bookingNumber}/>
        </div>
        <div style={{display:'flex',
                     flexDirection:'row',
                     justifyContent:'space-around'}}>
            <label>Your email address</label>
            <Input style={{width:'80%',background:'white'}} 
                   onChange={InputEmail}
                   value={email}/>
        </div>

        <button
          type='submit'
            // class={clicked === false? 'SubmitButton':'NonActiveSubmit'}
            class='CanxBookingButton'
            onClick={CanxBooking}
             >
                {/* {
                    messages&&messages.map((item)=>{
                     if(item.sitepage_region_id === 7&&item.sitepage_type_id === 17){
                      return (
                       <FormattedMessage id={item.title.map((item1)=>item1.text)}/>
                        
                    )
                  }
                })
              } */}
             Submit
        </button>
        {
            clicked === true?(
              <>
                <CanxBookingButton email={email}
                   bookingNumber={bookingNumber}/>
               
              </>
            ):null
        }

       <BookingRQ/>
      
       </div>
    )
}
