import React , {useState, useEffect} from 'react'
import axios from 'axios'
import {useLocation} from 'react-router-dom'
import {Select,Input, AutoComplete} from 'antd'
import {useIntl,FormattedMessage} from 'react-intl'
import { PayRotaryRegistration } from '../../Library/LiqPay/PayRotaryRegistration'
import {TermsConditions} from '../BookingForm/TermsConditions'
import {Checkbox} from 'antd';

import { ValidateQuery} from '../Helpers/helper'

import './RegistrationRotaryCSS.css'
import '../BookingForm/ClientDetailsCSS.css'

export const RegistrationRotary = () =>{

    const location = useLocation();
    console.log('ROTARY_REGISTRATION',location)

    const {messages} = useIntl();

    const [termsTicked, setTermsTicked] = useState(false)
    const [readTerms, setReadTerms] = useState(false)
    const [clicked,setClicked] = useState(false)

    let array = [];

     let path ;
    if(location.search){
        path = ValidateQuery(location)
        }
    // console.log('ROTARY_REGISTRATION',location)
    // console.log('ROTARY_REGISTRATION: path:',path)
    const user_id = path.user_id
    const [userData , setUserData] = useState([]);

    const AgreedFunc = () =>{
        setTermsTicked(!termsTicked)
    }

    const ReadTermsFunc = () =>{
        setReadTerms(!readTerms)
    }
    
    const closeTermsConditions = () =>{
        setReadTerms(false)  
    }

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
                for (let key in response.data[0].data.client_data[0]){
                    let obj = {
                        form_key:key,
                        form_value:response.data[0].data.client_data[0][key]
                    }
                  array.push(obj) 
                }
                // setUserData(response.data[0].data.client_data[0])
                setUserData(array)
              })
            .catch(error =>{
                console.log('[axios error]: ', error)
              });

    }, []);
    console.log('ROTARY_REGISTRATION: userData:',userData)

   return(
        <div style={{marginTop:'3vh',
                     marginBottom:'4vh'}}>
            <h2 style={{color:'darkblue',
                        fontStyle:'Arial Narrow',
                        fontSize:'35px',
                        textAlign:'center',
                        fontWeight:'bold',
                        marginBottom:'4vh'
                        }}>
                             {
                             messages.map((item)=>{
                               if(item.id === 166){
                                 return (
                                   <FormattedMessage id={item.title.map((item1)=>item1.text)}/>
                                  )
                                }
                            })
                          }
            </h2>
            
                {
                    userData.map((item)=>{
                        return(
                            <div class='RegistrationForm'>
                                <div class='Form_Key'>{item.form_key.toUpperCase()}</div>
                                <div class='Form_Value'>{item.form_value}</div>
                            </div>
                        )
                    })

                }
            
            <div class='WrapperTermsConditions Rotary'>
             <Checkbox onChange={AgreedFunc}
                       defaultChecked={false}
                       disabled={clicked === false? false: true}
                       style={{textAlign:'center',
                                marginRight:'2vw',
                                marginTop:'auto',
                                marginBottom:'auto',
                                border:'2px solid blue',
                                borderRadius:'60px',
                                background:'lightblue',
                                padding:'10px'
                                }}/>
              <div class='TermsConditions Registration'
                  onClick={ReadTermsFunc}>
                             {
                               messages.map((item)=>{
                                    if(item.id === 152){
                                        return (
                                            <FormattedMessage id={item.title.map((item1)=>item1.text)}/>
                                        )
                                    }
                                })
                            }
              </div>
         </div>
          {
            readTerms === true?
            <div style={{marginLeft:'6vw'}}>
             <TermsConditions readTerms={readTerms}
                              closeTermsConditions={closeTermsConditions}/>
            </div>:
             null
          }
          {termsTicked === true?

            <PayRotaryRegistration 
                 userData={userData}
            />:null
          }
        </div>
    )
}