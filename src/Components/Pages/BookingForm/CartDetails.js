import React , {useEffect, useState} from 'react'
import axios from "axios"
import {useIntl,FormattedMessage} from 'react-intl'
import {useDispatch, useSelector} from 'react-redux'
import {getContent} from '../../../Redux/actions/content'
import {getHotelContent} from '../../../Redux/actions/hotelcontent'
import {LoadingMessage} from '../../Library/PageDevices/LoadingMessage'
import {useWindowWidthAndHeight} from '../Helpers/WindowResizeHook'
import {CartGalleryShortVersion} from '../../Library/PageDevices/CartGallery/CartGalleryShortVersion'

import ReactHtmlParser from 'react-html-parser'

import './CartDetails.css'

export const CartDetails = ({cart}) =>{

    console.log('CART', cart)
    const dispatch = useDispatch();
    const {locale,messages} = useIntl();

    // const [sendCart, setSendCart] = useState([]);
    // const [tourContent, setTourContent] = useState([]);

    // const dispatch = useDispatch();
    // const cartContent = useSelector(state => state.content.content)
    //     useEffect ( () => {
    //     dispatch (getContent (cart.tour_id));
    //   }, [])
    // console.log('[CARTCONTENT]',cartContent)

    useEffect(()=>{
      dispatch(getHotelContent(cart.hotel_id,locale))
    },[])

    useEffect(()=>{
        dispatch(getContent(cart.contract_id,locale))
      },[])

    const hotelcontents = useSelector(state => state.hotelcontent.hotelcontent)
    const tourcontents = useSelector(state => state.content.content)

    const [width, height] = useWindowWidthAndHeight();

    console.log('CARTSERVICE', cart.service_type_id)
    
    const content = cart.service_type_id === 11? tourcontents : hotelcontents
    console.log('CONTENT',content)

       // useEffect ( () => {
    //     axios.get(`https://hotels-ua.biz/interface/content?id=${cart.contract_id}&language=en`) //former cart.tour_id
    //       .then( res => {
    //         setTourContent(res.data)
    //         })
          
    //     .catch( error => {
    //         setTourContent(undefined)
    //       console.log( '[axios error] : ' , error)
    //        });
    //    }, []);
    //    console.log('[BRIEFCONTENT]',tourContent)
  

    return(
        <div class={`${width>1000?'CartDetails':'CartDetailsSmallScreen'}`}>
            <div style={{display:'flex', flexDirection:'column'}}>
                <h2 style={{color:'#003057',
                        fontSize:'24px',
                        fontWeight:'bold',
                        textAlign:'center',
                        order:'-2'}}>Your Booking Details</h2>
                {
                    content.length >0 ? content.map ((item)=>{
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
                                    <CartGalleryShortVersion photos={item}/>
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
                    <h5>Accommodation at Hotel</h5><div>{cart.htlName.replace('%20',' ')}</div>
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

