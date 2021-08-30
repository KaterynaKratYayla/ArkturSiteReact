import React, {useState,useEffect} from 'react'
import axios from 'axios'
// import '../PageComponents/ResponsiveHeader/header.css'
import { useHistory} from "react-router-dom";
import { Radio } from 'antd';

import {ClientTitles} from '../../Library/StaticJsonData/ClientTitles'
import {ConfirmButton} from './ConfirmButton'
import './BookingForm.css'
// import {SwitcherItem} from './Switcher'
// import {Switcher} from './Switcher'

export const ClientDetails = ({cart}) => {

    const history = useHistory();

    const [sendCart, setSendCart] = useState([{}]);

    const [nameInput, setNameInput]= useState('');
    const [surnameInput, setSurnameInput] = useState('');
    const [phoneInput, setPhoneInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [bookingId, setBookingId] = useState('');
    // const [options, setMyOption] = useState('');
    const [align, setAlign] = useState('');

    const [list , setList] = useState({});

    const [clicked,setClicked] = useState(false)

    const [bookerTravels, setbookerTravels] = useState(0);

    // const [testHook, setTestHook] = useState([{}])

    // const [ModifyClientsRQ_Add, setModifyClientsRQ_Add] = useState([{}]);

    // console.log('KATE',cart.service_type_id, cart.start,cart.end,cart.contract_id,cart.tariff_id,cart.room_id,cart.service_type_id,cart.hotel_id,cart.adults,cart.children,cart.amount)
    
    useEffect(() => {
        const ActionRQ = {
                "username":"Serodynringa",
                "password":"%tmMJZbABm6cB@tY",
                "user_id" :1426,
                "action":"AddToCartRQ",
                "data" :
                    {
                        "bookings":
                            [
                                {
                                    "service_type_id": cart.service_type_id,
                                    "start" : cart.start,
                                    "end": cart.end? cart.end: null,
                                    "contract_id" : cart.contract_id,  //former tour_id
                                    "tariff_id" : cart.tariff_id, //former tour_tariff_id
                                    "room_id" : cart.room_id, //former tour_room_id
                                    "numberofunits" : cart.service_type_id === parseInt(1)? cart.numberofunits: parseInt(11),
                                    "hotel_id" : cart.hotel_id,
                                    "hotel_room_id" : cart.service_type_id === 11? cart.hotel_room_id : null, //only for package tour
                                    "hotel_rate_id" : cart.service_type_id === 11? cart.hotel_rate_id : null, // only for package tours
                                    "calculation_data" :
                                        {
                                            "adults":cart.adults,
                                            "children":cart.children,
                                            "amount" : cart.amount
                                        }
                                }
                            ]
                    }
            };

        axios.post('http://smartbooker.biz/interface/xmlsubj/', JSON.stringify({ActionRQ}))
            .then(response => {
                // console.log('RESPONSE', response)
                setSendCart(response.data[0])
              })
            .catch(error =>{
                setSendCart(undefined)
                console.log('[axios error]: ', error)
              });

<<<<<<< HEAD
        /*axios.post('http://smartbooker/interface/xmlsubj/', JSON.stringify({ActionRQ}))
            .then(response => setSendCart(response.data[0]))
            .catch(error =>{
                setSendCart(undefined)
                console.log('[axios error]: ', error)
              });*/

    }, []);

    useEffect(() => {
        const ActionRQ = {
            "username":"Serodynringa",
            "password":"%tmMJZbABm6cB@tY",
            "user_id" :1426,
            "action":"GetPriceHotelRQ",
            "data" :
                {
                    "start" : "2021-09-21", // date of arrival
                    "end" : "2021-09-24", // date of departure
                    "city_id" : 36, 		// Id of city - can`t be equel to zero
                    "hotel_id" : 0, //692, 		// Id of hotel: if hotel_id = 0, must be return all hotels of the pointed city in response
                    "numberofunits" : 2,	// Quantity of rooms, 1 by default, NOT OBLIGATORY
                    "calculation_data" :
                        {
                            "adults" : 2,
                            "children" : 1,
                            "lower_cost_limit" : 50.00, // lower cost limit of room in USD, NOT OBLIGATORY
                            "upper_cost_limit" : 200.00 // upper cost limit of room in USD, NOT OBLIGATORY
                        }
                }
        };

        axios.post('http://smartbooker.biz/interface/xmlsubj/', JSON.stringify({ActionRQ}))
            .then(response => console.log("GetPriceHotelRQ: ", response))
            .catch(error =>{
                console.log('[axios error]: ', error)
              });

        /*axios.post('http://smartbooker/interface/xmlsubj/', JSON.stringify({ActionRQ}))
            .then(response => console.log("GetPriceHotelRQ: ", response))
            .catch(error =>{
                console.log('[axios error]: ', error)
              });*/

=======
>>>>>>> 6f3bbda1a5e64431d24c0748fb98ca2f1df87b8b
    }, []);

    
    let app_service_id = new Object();
    for(let key in sendCart.data){
        app_service_id = sendCart.data[key]
    }

    if( !sendCart){
        return <div> Loading...</div>
    }


    console.log('SENDCART',sendCart)

    // console.log('NEWARRAY', app_service_id.service_id)


    const bookerTravelsChoice = e => {
        console.log('radio checked', e.target.value);
        setbookerTravels(e.target.value);
     };

    // const changeHandler = ( me ) => _ => {
    //      setAlign(me);
    //     }

    function NameInputFunc (e) {
        console.log(e.target.value)
        return setNameInput (e.target.value)
        }

    function SurnameInputFunc (e) {
        console.log(e.target.value)
        return setSurnameInput (e.target.value)
        }

    function PhoneInputFunc (e) {
       console.log(e.target.value)
         return setPhoneInput (e.target.value)
       }

    function EmailInputFunc (e) {
        console.log(e.target.value)
          return setEmailInput (e.target.value)
        }

    // function changeOption(e){
    //   console.log(e.target.value)
    //   return setMyOption(e.target.value)
    // }

    const onSubmit = (e) =>{
        list? setClicked(true):setClicked(false)
        e.preventDefault();
    }

    const AddContacts = ()=>{

         const newList = {
            ready: true,
            name: nameInput,
            surname: surnameInput,
            phone: phoneInput,
            email: emailInput
        }
            setList(newList);

            // if(!ModifyClientsRQ_Add){
            //     history.push('\offlineSummary')
            // }
    }

    return(
        <form className='myForm' onSubmit={onSubmit}>

          <div class='InputBlock'>
            <label class='FormLabel'>{'Lead Client Details'}</label>
              <div style={{display:'flex', flexDirection:'row', justifyContent:'space-evenly',width:'80%'}}>

                    <select style={{marginRight:'0.5vw'}}>
                        {
                        ClientTitles&&ClientTitles.map((item)=>{
                            return(
                                <option>{item}</option>
                            )
                            })

                        }
                    </select>


                   <input
                        type={'text'}
                        value={nameInput}
                        onChange={NameInputFunc}
                        placeholder={`Name`}
                        maxLength='50'
                        style={{
                            width:"200px",
                            marginRight:'0.5vw'
                            }}
                        required/>

                    <input
                        type={'text'}
                        value={surnameInput}
                        onChange={SurnameInputFunc}
                        placeholder={`Surname`}
                        maxLength='50'
                        style={{width:"500px"}}
                        required/>

                </div>

            </div>

            <div class='InputBlock'>
                <label class='FormLabel'
                       for="phone">
                            {'Telephone Number:'}</label>

                    <input
                        type='tel'
                        value={phoneInput}
                        onChange={PhoneInputFunc}
                        placeholder={`+380444907137`}
                        required
                        pattern="^(\+[0-9]{10}|\+[0-9]{12})$"
                    />
            </div>

            <div class='InputBlock'>
                <label class='FormLabel'>
                    {'E-mail Address:'}
                </label>

                <input
                    type={'email'}
                    value={emailInput}
                    onChange={EmailInputFunc}
                    placeholder={`Enter your ${'Email Address'}`}
                    required/>
            </div>

            <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-start',marginTop:'3vh',width:'80%'}}>
              <label class='FormLabel'>Do you book for somebody else?</label>
              <div>
                <Radio.Group onChange={bookerTravelsChoice}
                             value={bookerTravels}
                             className='RadioForm'>

                                <Radio style={{color:'#102D69',fontWeight:'bold'}}
                                       value={1}
                                       key={1}>Yes
                                </Radio>
                                <Radio style={{color:'#102D69',fontWeight:'bold'}}
                                       value={0}
                                       key={0}>No
                                </Radio>
                </Radio.Group>
                </div>

            </div>
            <>
            {
                    bookerTravels===1?(
                      <div class='InputBlock'>
                        <label class='FormLabel'>{'Traveller Name Details'}</label>
                          <div style={{display:'flex', flexDirection:'row', justifyContent:'space-evenly',width:'80%'}}>

                            <select style={{marginRight:'0.5vw'}}>
                                {
                                    ClientTitles&&ClientTitles.map((item)=>{
                                        return(
                                            <option>{item}</option>
                                                )
                                            })

                                }
                            </select>

                            <input
                                type={'text'}
                                value={nameInput}
                                onChange={NameInputFunc}
                                placeholder={`Name`}
                                maxLength='50'
                                style={{
                                        width:"200px",
                                        marginRight:'0.5vw'
                                     }}
                                required/>

                            <input
                                type={'text'}
                                value={surnameInput}
                                onChange={SurnameInputFunc}
                                placeholder={`Surname`}
                                maxLength='50'
                                style={{width:"500px"}}
                                required/>

                        </div>
                   </div>
                    ):null
                }
            </>

           <ConfirmButton
                name={nameInput}
                surname={surnameInput}
                phone={phoneInput}
                email={emailInput}
                AddContacts = {AddContacts}
                app_service_id = {app_service_id.service_id} 
                smart_order_id ={app_service_id.booking_id}
                customer_reference = {app_service_id.customer_reference}
                clicked={clicked}
                />

        </form>
    )
}

