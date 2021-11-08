import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import axios from "axios"

import {getContent} from '../../../Redux/actions/content'
import {getHotelContent} from '../../../Redux/actions/hotelcontent'
import {LoadingMessage} from '../../Library/PageDevices/LoadingMessage'
import {useWindowWidthAndHeight} from '../Helpers/WindowResizeHook'
import ReactHtmlParser from 'react-html-parser'

import './CartDetailsSummary.css'

export const CartDetailsSummary = ({cart}) => {

    console.log('CART', cart)

    const dispatch = useDispatch();
    const [width, height] = useWindowWidthAndHeight();

     useEffect(()=>{
      dispatch(getHotelContent(cart.hotel_id))
    },[])

    useEffect(()=>{
        dispatch(getContent(cart.contract_id))
      },[])

    const hotelcontents = useSelector(state => state.hotelcontent.hotelcontent)
    const tourcontents = useSelector(state => state.content.content)

    return (
        <div class={`${width>1000?'CartDetailsSummary':'CartDetailsSmallScreenSummary'}`}>
          {/* <div style={{marginLeft:'auto',marginRight:'auto'}}> */}
            <div style={{display: 'grid'}}>
                <div>
                    <h2 style={{
                    color: '#003057',
                    fontSize: '24px',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    order: '-2'
                    }}>Here's Your Booking Details</h2>
                </div>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        {
                            hotelcontents.length > 0 ? hotelcontents.map((item) => {
                                return (
                                    <>
                                        <h3 style={{
                                            color: '#003057',
                                            fontSize: '22px',
                                            textAlign: 'center',
                                            order: '-1'
                                        }}>
                                            {item.content_name === "Title" ? item.text : null}
                                        </h3>
                                        <div style={{
                                            order: '1',
                                            display: 'flex',
                                            flexDirection: 'column'
                                        }}>
                                            {item.content_name === "Summary" ?
                                                <>
                                                    <h4>Tour Summary</h4>
                                                    <div style={{
                                                        textAlign: 'justify',
                                                        padding: '0.5vh'
                                                    }}>{ReactHtmlParser(item.text)}</div>
                                                </>
                                                : null}
                                        </div>

                                        <div style={{
                                            order: '2',
                                            display: 'flex',
                                            flexDirection: 'column'
                                        }}>
                                            {item.content_name === "Inclusion" ?
                                                <>
                                                    <h4>Tour Inclusions</h4>
                                                    <div style={{
                                                        textAlign: 'justify',
                                                        padding: '0.5vh'
                                                    }}>{ReactHtmlParser(item.text)}</div>
                                                </>
                                                : null}
                                        </div>
                                    </>)
                            }) : (<div
                                style={{
                                  position:'absolute', 
                                        left: '40%',
                                        transform: 'translate(0%, -50%)',
                                        margin:'0'
                                       }}
                                   ><LoadingMessage noTextMessage={true}
                                   loadingMessageClass={'contentLoadingWheel'}/></div>)
                        }
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        {
                            hotelcontents.length > 0 ? hotelcontents.map((item) => {
                                return (
                                    <>
                                        <div style={{order: '0'}}>
                                            {item.content_name === "Image" ? (
                                                <CartGallery photos={item}/>
                                            ) : <div><LoadingMessage noTextMessage={true}
                                                         loadingMessageClass={'contentLoadingWheel'}/>
                                                </div>}
                                        </div>
                                    </>)
                            }) : (null)
                        }
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <h4>Rate Details</h4>
                        <div className='MainRateDetails'>
                            <h5>Tour Start Date</h5>
                            <div>{cart.start}</div>
                            <h5>Accommodation at Hotel</h5>
                            <div>{cart.htlName}</div>
                            <h5>Booked for</h5>
                            <div></div>
                            <h5>Adults</h5>
                            <div>{cart.adults}</div>
                            <h5>Children</h5>
                            <div>{cart.children}</div>
                            <h5>Infants</h5>
                            <div>{cart.infants > 0 ? cart.infants : 0}</div>
                            <h5>Total Cost of the Booking</h5>
                            <div>{cart.amount}</div>
                            <h5>Additional details</h5>
                            <div className='TaxDetails'>VAT is included. Hotel City Tax , if applicable, is NOT included and must be
                                paid at the hotel directly
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const CartGallery = ({photos}) => {

    const [picked, setPicked] = useState(`https://${photos.text[0]}`)
    const [activeIndex, setActiveIndex] = useState()

    const pickAction = (index) => (e) => {
        setPicked(e.target.getAttribute('src'))
        setActiveIndex(index)
        console.log('[PICKED]:', e.target.getAttribute('src'))
    }

    return (
        <div>
            <div>
                <img
                    src={picked}
                    style={{
                        padding: '5px',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        width: '27vw',
                        height: '45vh',
                        borderRadius: '0.7vw'
                    }}/>
            </div>

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly'
            }}>
                {
                    photos.text.map((image, index, array) => {
                        return (
                            <div>
                                {(index > 1 && index <= 5) ?
                                    <img src={'https://' + image}
                                         class={activeIndex === index ? 'PickedImage' : 'NotPickedImage'}
                                         onClick={pickAction(index)}/> : null}
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}
