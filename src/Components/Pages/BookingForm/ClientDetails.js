import React, {useState,useEffect} from 'react'
import axios from 'axios'
// import '../PageComponents/ResponsiveHeader/header.css'
import { Radio } from 'antd';

import {ClientTitles} from '../../Library/StaticJsonData/ClientTitles'
import {ConfirmButton} from './ConfirmButton'
import './BookingForm.css'
// import {SwitcherItem} from './Switcher'
// import {Switcher} from './Switcher'

export const ClientDetails = ({cart}) => {

    const [sendCart, setSendCart] = useState([{}]);

    const [myInput1, setMyInput1] = useState('');
    const [myInput2, setMyInput2] = useState('');
    const [myInput3, setMyInput3] = useState('');
    const [myInput4, setMyInput4] = useState('');
    const [options, setMyOption] = useState('');
    const [align, setAlign] = useState('');

    const [list , setList] = useState([{}]);

    const [clicked,setClicked] = useState(false)

    const [bookerTravels, setbookerTravels] = useState(0);

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
                                    "start" : cart.start,
                                    "tour_id" : cart.tour_id,
                                    "tour_tariff_id" : cart.tour_tariff_id,
                                    "tour_room_id" : cart.tour_room_id,
                                    "numberofunits" : 1,
                                    "hotel_id" : cart.hotel_id,
                                    "hotel_room_id" : cart.hotel_room_id,
                                    "hotel_rate_id" : null,
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
            .then(response => setSendCart(response.data))
            .catch(error =>{
                setSendCart(undefined)
                console.log('[axios error]: ', error)
              });
                     
    }, []);

    if( !sendCart){
        return <div> Loading...</div>
    }
    
    console.log('SENDCART',sendCart)
 
    const bookerTravelsChoice = e => {
        console.log('radio checked', e.target.value);
        setbookerTravels(e.target.value);
     };

    // const changeHandler = ( me ) => _ => {
    //      setAlign(me);
    //     }

    function myInputFunc1 (e) {
        console.log(e.target.value)
        return setMyInput1 (e.target.value)
        }

    function myInputFunc2 (e) {
        console.log(e.target.value)
        return setMyInput2 (e.target.value)
        }

    function myInputFunc3 (e) {
       console.log(e.target.value)
         return setMyInput3 (e.target.value)
       }

    function myInputFunc4 (e) {
        console.log(e.target.value)
          return setMyInput4 (e.target.value)
        }

    function changeOption(e){
      console.log(e.target.value)
      return setMyOption(e.target.value)
    }


//     function setDone (name){
//         return function(){
//              let changedList = list.map(function(listing){
//             if (listing.name === name){
//                 listing.done = !listing.done;
//             }
//              return listing
//         })

    // const addToList = () => {
    //     const newList = {
    //         done: false,
    //         name: myInput1,
    //         surname: myInput2,
    //         phone: myInput3,
    //         email: myInput4,
    //         item3: align,
    //         item4: options
    //     }

    // setList([...list, newList]);
    // setMyInput1('');
    // setMyInput2('');
    //    setList (changedList)
//     }
// }

    const onSubmit = (e) =>{
        e.preventDefault();
        // const newList = {
            // done: false,
            // name: myInput1,
            // surname: myInput2,
            // phone: myInput3,
            // email: myInput4,
            // item3: align,
            // item4: options 
        // }

            // setList([...list,newList]);
    }

    const AddContacts = () =>{
         const newList = {
            name: myInput1,
            surname: myInput2,
            phone: myInput3,
            email: myInput4
        }
            setList([newList]);
            list.length>0?setClicked(true):setClicked(false)
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
                        value={myInput1}
                        onChange={myInputFunc1}
                        placeholder={`Name`}
                        maxLength='50'
                        style={{
                            width:"200px",
                            marginRight:'0.5vw'
                            }}
                        required/>

                    <input
                        type={'text'}
                        value={myInput2}
                        onChange={myInputFunc2}
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
                        value={myInput3}
                        onChange={myInputFunc3}
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
                    value={myInput4}
                    onChange={myInputFunc4}
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
                                value={myInput1}
                                onChange={myInputFunc1}
                                placeholder={`Name`}
                                maxLength='50'
                                style={{
                                        width:"200px",
                                        marginRight:'0.5vw'
                                     }}
                                required/>

                            <input
                                type={'text'}
                                value={myInput2}
                                onChange={myInputFunc2}
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
                clientData = {list}
                AddContacts = {AddContacts}
                booking = {sendCart}
                clicked={clicked}
                />
                 
            {/* <ul>

                {
                    list.map (function(listitem,index){
                        return <li
                                      key={index}
                                      className={listitem.done ? 'list__green' : 'list__red'}
                                      onClick={setDone(listitem.name)}>
                                  {listitem.name} / {listitem.item2} / {listitem.item3} / {listitem.item4}
                               </li>

                    })
                }
                </ul> */}
        </form>
    )
}

