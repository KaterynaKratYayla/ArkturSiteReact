import React, {useState,useEffect, useRef} from 'react'
import axios from 'axios'
// import '../PageComponents/ResponsiveHeader/header.css'
import { useLocation, useHistory} from "react-router-dom";
import { Radio ,Checkbox} from 'antd';
import {useSelector} from "react-redux";
import {useIntl,FormattedMessage} from 'react-intl'

import {ClientTitles} from '../../Library/StaticJsonData/ClientTitles'
import {ConfirmButton} from './ConfirmButton'
import {useWindowWidthAndHeight} from '../Helpers/WindowResizeHook'
import {TermsConditions} from './TermsConditions'
import {PlaceHolderStrings} from '../../Library/Localization/placeholders'

import './BookingForm.css'
import './ClientDetailsCSS.css'

// import {SwitcherItem} from './Switcher'
// import {Switcher} from './Switcher'

export const ClientDetails = ({cart}) => {

    const { user: currentUser } = useSelector((state) => state.auth);
    // console.log('currentUser: ClientDetails.js', currentUser);
    const {promocode} = useSelector((state) => state.promocode);
    // console.log('promocode:', promocode);

    const {locale,messages} = useIntl();

    const [sendCart, setSendCart] = useState([{}]);
    // const [userData, setUserData] = useState(null);

    const placeholder = PlaceHolderStrings();

    const [nameInput, setNameInput]= useState('');
    const [surnameInput, setSurnameInput] = useState('');
    const [phoneInput, setPhoneInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [pattern, setPattern] = useState(false)
    const [bookingId, setBookingId] = useState('');
    // const [options, setMyOption] = useState('');
    const [align, setAlign] = useState('');
    const [termsTicked, setTermsTicked] = useState(false)
    const [readTerms, setReadTerms] = useState(false)

    const [list , setList] = useState({});

    const [clicked,setClicked] = useState(false)

    const [bookerTravels, setbookerTravels] = useState(0);

    const responseErrorIndex = useRef(0);

    const [responseError, setResponseError] = useState(responseErrorIndex);

    // const [testHook, setTestHook] = useState([{}])

    // const [ModifyClientsRQ_Add, setModifyClientsRQ_Add] = useState([{}]);

    // console.log('KATE',cart.service_type_id, cart.start,cart.end,cart.contract_id,cart.tariff_id,cart.room_id,cart.service_type_id,cart.hotel_id,cart.adults,cart.children,cart.amount)
    const [width, height] = useWindowWidthAndHeight();

    useEffect(() => {
        const ActionRQ = {
                "username":"Serodynringa",
                "password":"%tmMJZbABm6cB@tY",
                // "user_id" : currentUser ? currentUser.user_id : 1426,
                // "user_id" : 1426,
                "user_id" : currentUser.user_id,
                "refpartner":cart.refpartner?cart.refpartner:null,
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
                                    // "tariff_id" : cart.refpartner&&cart.refpartner==='1497'&&cart.hotel_id==='686'? 252 : cart.refpartner&&cart.refpartner==='1497'&&cart.hotel_id==='889'? 325 : cart.tariff_id, 
                                    "room_id" : cart.room_id, //former tour_room_id
                                    "numberofunits" : cart.service_type_id === parseInt(1)? cart.numberofunits: parseInt(1),
                                    "hotel_id" : cart.hotel_id,
                                    "hotel_room_id" : cart.service_type_id === parseInt(1)? cart.hotel_room_id : null, //only for package tour
                                    "hotel_rate_id" : cart.service_type_id === parseInt(1)? cart.hotel_rate_id : null, // only for package tours
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

        axios.post(`${process.env.REACT_APP_SMART_URL}interface/xmlsubj/`, JSON.stringify({ActionRQ}))
            .then(response => {
                console.log('RESPONSE ClientDetails.js', response)
                if (response.data[0].errors[0] === 'Duplicate entry') {
                    responseErrorIndex.current += 1;
                    setResponseError(responseErrorIndex.current);
                    console.log('RESPONSE responseErrorIndex', responseError);
                }
                setSendCart(response.data[0])
              })
            .catch(error =>{
                setSendCart(undefined)
                console.log('[axios error]: ', error)
              });

    }, [responseError]); // (Долбим) Посылаем запросы, пока Твид не выдаст twid_reference

    const AgreedFunc = () =>{
        setTermsTicked(!termsTicked)
    }

    const ReadTermsFunc = () =>{
        setReadTerms(!readTerms)
    }

    
    const closeTermsConditions = () =>{
        setReadTerms(false)   
    }

    let app_service_id = new Object();

    if(sendCart){
        for(let key in sendCart.data){
            app_service_id = sendCart.data[key]
        }
    }

    /* useEffect(() => {
        const ActionRQ = {
            "username":"Serodynringa",
            "password":"%tmMJZbABm6cB@tY",
            "user_id" : currentUser.user_id,
            "refpartner": promocode !== "" ? promocode : 0,
            "action":"GetUserInfoRQ"
        };
        if (currentUser.user_id !== 1426){
            axios.post(`${process.env.REACT_APP_SMART_URL}interface/xmlsubj/`, JSON.stringify({ActionRQ}))
                .then(response => {
                    console.log('RESPONSE', response)
                    setUserData(response.data[0].data)
                    setNameInput(response.data[0].data['name'])
                    setSurnameInput(response.data[0].data['surname'])
                    setEmailInput(response.data[0].data['email'])
                })
                .catch(error =>{
                    setUserData(undefined)
                    console.log('[axios error]: ', error)
                });
        }
    }, []);

    console.log('userData', userData); */

    // TODO: Пока нету поля currentUser.phone
    useEffect(() => {
        if (currentUser.user_id !== 1426){
            setNameInput(currentUser.name)
            setSurnameInput(currentUser.surname)
            setEmailInput(currentUser.email)
        }
    }, []);

    // if( !sendCart){
    //     return <div> Loading...</div>
    // }

   console.log('CART',cart)
    console.log('SENDCART',sendCart)
    console.log('app_service_id',app_service_id)

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

    // const phonepattern="^(\+[0-9]{10}|\+[0-9]{12})$"

    const phonepattern = /[0-9]/g

    const PhoneInputFunc = (e) => {
    //    if(e.target.value.match(phonepattern)){
         setPhoneInput (e.target.value)
        //  setPattern(true)
        // }
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
        if(termsTicked === false){
            alert('Please agree to Terms and Conditions')
            setClicked(false)
        }
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
    
    // else alert('Please update phone number. Digits only')

            // if(!ModifyClientsRQ_Add){
            //     history.push('\offlineSummary')
            // }
    }

    return(
        <form className={`${width>1000?'myForm':'myFormSmallScreen'}`} onSubmit={onSubmit}>

          <div class='InputBlock'>
            <label class='FormLabel'>
               {
                        messages.map((item)=>{
                         if(item.id === 147){
                            return (
                                <FormattedMessage id={item.title.map((item1)=>item1.text)}/>
                                )
                      }
                   })
                }
            </label>
              <div style={{display:'flex', flexDirection:'row', justifyContent:'space-evenly',width:'100%'}}>

                    <select style={{marginRight:'0.5vw',width:'10%'}}>
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
                        placeholder={placeholder.placeHolderName}
                        maxLength='50'
                        style={{
                            width:'45%',
                            marginRight:'0.5vw'
                            }}
                        required/>

                    <input
                        type={'text'}
                        value={surnameInput}
                        onChange={SurnameInputFunc}
                        placeholder={placeholder.placeHolderSurname}
                        maxLength='50'
                        style={{width:'45%'}}
                        required/>

                </div>

            </div>

            <div class='InputBlock'>
                <label class='FormLabel'
                       for="phone">
                          {
                            messages.map((item)=>{
                               if(item.id === 148){
                                  return (
                                      <FormattedMessage id={item.title.map((item1)=>item1.text)}/>
                                     )
                                  }
                              })
                           }            
                </label>

                    <input
                        type='tel'
                        value={phoneInput}
                        onChange={PhoneInputFunc}
                        placeholder={placeholder.placeHolderPhone}
                        required
                        // pattern="^(\+[0-9]{10}|\+[0-9]{12})$"
                        // pattern="(/[0-9]/g)"
                    />
            </div>

            <div class='InputBlock'>
                <label class='FormLabel'>
                   {
                        messages.map((item)=>{
                         if(item.id === 150){
                            return (
                                <FormattedMessage id={item.title.map((item1)=>item1.text)}/>
                                )
                         }
                      })
                   }
                </label>

                <input
                    type={'email'}
                    value={emailInput}
                    onChange={EmailInputFunc}
                    placeholder={placeholder.placeHolderEmail}
                    required/>
            </div>

            <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-start',marginTop:'3vh',width:'80%'}}>
              <label class='FormLabel'>
                  {
                        messages.map((item)=>{
                         if(item.id === 151){
                            return (
                                <FormattedMessage id={item.title.map((item1)=>item1.text)}/>
                                )
                        }
                      })
                   }
              </label>
              <div>
                <Radio.Group onChange={bookerTravelsChoice}
                             value={bookerTravels}
                             className='RadioForm'>

                                <Radio style={{color:'#102D69',fontWeight:'bold'}}
                                       value={1}
                                       key={1}>
                                                {
                                                    messages.map((item)=>{
                                                        if(item.id === 153){
                                                            return (
                                                                <FormattedMessage id={item.title.map((item1)=>item1.text)}/>
                                                          )
                                                      }
                                                    })
                                                }
                                </Radio>
                                <Radio style={{color:'#102D69',fontWeight:'bold'}}
                                       value={0}
                                       key={0}>
                                                  {
                                                     messages.map((item)=>{
                                                        if(item.id === 154){
                                                            return (
                                                                <FormattedMessage id={item.title.map((item1)=>item1.text)}/>
                                                             )
                                                          }
                                                        })
                                                    }
                                </Radio>
                </Radio.Group>
                </div>

            </div>
            <>
            {
                    bookerTravels===1?(
                      <div class='InputBlock'>
                        <label class='FormLabel'>{'Traveller Name Details'}</label>
                          <div style={{display:'flex', flexDirection:'row', justifyContent:'space-evenly',width:'100%'}}>

                            <select style={{marginRight:'0.5vw',width:'10%'}}>
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
                                        width:"45%",
                                        marginRight:'0.5vw'
                                     }}
                                required/>

                            <input
                                type={'text'}
                                value={surnameInput}
                                onChange={SurnameInputFunc}
                                placeholder={`Surname`}
                                maxLength='50'
                                style={{width:"45%"}}
                                required/>

                        </div>
                   </div>
                    ):null
                }
            </>
         
          <div class='WrapperTermsConditions'>
             <Checkbox onChange={AgreedFunc}
                       defaultChecked={false}
                       disabled={clicked === false? false: true}/>
              <div class='TermsConditions'
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
             <TermsConditions readTerms={readTerms}
                              closeTermsConditions={closeTermsConditions}/>:
             null
          }

           <ConfirmButton
                name={nameInput}
                surname={surnameInput}
                phone={phoneInput}
                email={emailInput}
                AddContacts = {AddContacts}
                app_service_id = {app_service_id.service_id}
                // smart_order_id ={app_service_id.booking_id}
                smart_order_id ={app_service_id.smart_reference}
                customer_reference = {app_service_id.customer_reference}
                clicked={clicked}
                cart={cart}
                service_number={app_service_id.service_number}
                termsTicked={termsTicked}
                />

        </form>
    )
}

