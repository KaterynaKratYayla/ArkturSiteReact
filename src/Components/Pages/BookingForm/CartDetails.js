import React , {useEffect, useState} from 'react'
import axios from "axios"
import {useDispatch, useSelector} from 'react-redux'
import {getContent} from '../../../Redux/actions/content'
import {LoadingMessage} from '../../Library/PageDevices/LoadingMessage'
import ReactHtmlParser from 'react-html-parser'

import './CartDetails.css'

export const CartDetails = ({cart}) =>{

    console.log('CART', cart)

    // const [sendCart, setSendCart] = useState([]);
    const [cartContent, setCartContent] = useState([]);

    // const dispatch = useDispatch();
    // const cartContent = useSelector(state => state.content.content)
    //     useEffect ( () => {
    //     dispatch (getContent (cart.tour_id));
    //   }, [])
    // console.log('[CARTCONTENT]',cartContent)

    useEffect ( () => {
        axios.get(`https://hotels-ua.biz/interface/content?id=${cart.tour_id}&language=en`)
          .then( res => {
            setCartContent(res.data)
            })
          
        .catch( error => {
            setCartContent(undefined)
          console.log( '[axios error] : ' , error)
           });
       }, []);
       console.log('[BRIEFCONTENT]',cartContent)

    // useEffect(() => {
    //     const ActionRQ = {
    //             "username":"Serodynringa",
    //             "password":"%tmMJZbABm6cB@tY",
    //             "user_id" :1426,
    //             "action":"AddToCartRQ",
    //             "data" :
    //                 {
    //                     "bookings":
    //                         [
    //                             {
    //                                 "start" : cart.start,
    //                                 "tour_id" : cart.tour_id,
    //                                 "tour_tariff_id" : cart.tour_tariff_id,
    //                                 "tour_room_id" : cart.tour_room_id,
    //                                 "numberofunits" : 1,
    //                                 "hotel_id" : cart.hotel_id,
    //                                 "hotel_room_id" : cart.hotel_room_id,
    //                                 "hotel_rate_id" : null,
    //                                 "calculation_data" :
    //                                     {
    //                                         "adults":cart.adults,
    //                                         "children":cart.children,
    //                                         "amount" : cart.amount
    //                                     }
    //                             }
    //                         ]
    //                 }
    //         };

    //     axios.post('http://smartbooker.biz/interface/xmlsubj/', JSON.stringify({ActionRQ}))
    //         .then(response => setSendCart(response.data));
    // }, []);

    
    // console.log('SENDCART',sendCart)

    return(
        <div class='CartDetails'>
            <div style={{display:'flex', flexDirection:'column'}}>
                <h2 style={{color:'#003057',
                        fontSize:'24px',
                        fontWeight:'bold',
                        textAlign:'center',
                        order:'-2'}}>Your Booking Details</h2>
                {
                    cartContent.length >0 ? cartContent.map ((item)=>{
                        return( 
                          <>
                             <h3 style={{color:'#003057',
                                         fontSize:'22px',
                                         textAlign:'center',
                                         order:'-1'
                                         }}>
                                {item.content_name === "Title"? item.text:null}
                            </h3>
                            <div style={{order:'0'}}>
                                {item.content_name === "Image"?(
                                    <CartGallery photos={item}/>
                              ):null}
                            </div>
                            <div style={{order:'1',
                                        display: 'flex',
                                        flexDirection: 'column'}}>
                               {item.content_name === "Summary"? 
                               <>
                                   <h4>Tour Summary</h4>
                                   <div style={{textAlign: 'justify',
                                                padding: '0.5vh'
                                                }}>{ReactHtmlParser(item.text)}</div>
                               </>
                               :null}
                            </div>

                            <div style={{order:'2',
                                        display: 'flex',
                                        flexDirection: 'column'}}>
                               {item.content_name === "Inclusion"?
                               <>
                                   <h4>Tour Inclusions</h4>
                                   <div style={{textAlign: 'justify',
                                                padding: '0.5vh'
                                                }}>{ReactHtmlParser(item.text)}</div>
                               </>
                               :null}
                            </div>
                        </>)
                    }):(<LoadingMessage/>)
                }
            </div>
           {/* <div>{cart.start}</div> */}
           <h4>Rate Details</h4>
                <div class='MainRateDetails'>

                    <h5>Tour Start Date</h5><div>{cart.start}</div>
                    <h5>Accommodation at Hotel</h5><div>{cart.htlName}</div>
                    <h5>Booked for</h5><div></div>
                    <h5>Adults</h5><div>{cart.adults}</div>
                    <h5>Children</h5><div>{cart.children}</div>
                    <h5>Infants</h5><div>{cart.infants>0?cart.infants:0}</div>
                    <h5>Total Cost of the Booking</h5><div>{cart.amount}</div>
                    <h5>Additional details</h5><div class='TaxDetails'>VAT is included. Hotel City Tax , if applicable, is NOT included and must be paid at the hotel directly</div>
                </div>
        </div>
    )
}

const CartGallery = ({photos}) => {

    const [picked, setPicked] = useState(`https://${photos.text[0]}`)
    const [activeIndex, setActiveIndex] = useState()

    const pickAction = (index) =>(e)=>{
        setPicked(e.target.getAttribute('src'))
        setActiveIndex(index)
        console.log('[PICKED]:',e.target.getAttribute('src'))
    }

    return(
        <div>
            <div>
                  <img 
                      src={picked}
                      style={{padding:'5px',
                              marginLeft:'auto',
                              marginRight:'auto',
                              width:'27vw',
                              height:'45vh',
                              borderRadius:'0.7vw'
                   }}/>
            </div>
                              
            <div style={{display:'flex',
                         flexDirection:'row',
                         justifyContent:'space-evenly'
                        }}>
                        {
                           photos.text.map((image,index,array)=>{
                             return(
                                  <div> 
                                         {(index > 1 && index <=5)?
                                             <img src={'https://'+image} 
                                                  class={activeIndex === index?'PickedImage':'NotPickedImage'}
                                                  onClick={pickAction(index)}/>:null}
                                   </div>
                                   )
                                })
                            }
                                        
                     </div>
        </div>
    )
}