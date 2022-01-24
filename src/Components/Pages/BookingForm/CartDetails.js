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

export const CartDetails = ({cart,cartClass}) =>{

    console.log('CART', cart)
    const dispatch = useDispatch();
    const {locale,messages} = useIntl();

    const currencies = useSelector(state=>state.currency.currencies)

    let exchangeRate;

    currencies.forEach((curr)=>{
      if(curr.name === cart.selected_currency)
        exchangeRate = parseInt(curr.value)
    })

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
    //     axios.get(`${process.env.REACT_APP_SMART_URL}interface/content?id=${cart.contract_id}&language=en`) //former cart.tour_id
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
        <div class={`${cartClass?cartClass:(width>1000?'CartDetails':'CartDetailsSmallScreen')}`}>
            <div style={{display:'flex', flexDirection:'column'}}>
                <h2 style={{color:'#003057',
                        fontSize:'24px',
                        fontWeight:'bold',
                        textAlign:'center',
                        order:'-2'}}>
                          {
                             messages.map((item)=>{
                                if(item.id === 85){
                                   return (
                                     <FormattedMessage id={item.title.map((item1)=>item1.text)}/>
                                     )
                                   }
                                  })
                           }

                </h2>
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
                                   <h4>
                                      {
                                        messages.map((item)=>{
                                            if(item.id === 86){
                                                return (
                                                    <FormattedMessage id={item.title.map((item1)=>item1.text)}/>
                                                 )
                                                }
                                            })
                                        }

                                   </h4>
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
                    }):(<div
                        style={{
                          position:'absolute', 
                                left: '40%',
                                transform: 'translate(0%, -50%)',
                                margin:'0'
                               }}
                           ><LoadingMessage loadingMessageClass='RateLoading'/></div>)
                }
            </div>
           {/* <div>{cart.start}</div> */}
           <h4>
              {
                 messages.map((item)=>{
                   if(item.id === 136){
                      return (
                        <FormattedMessage id={item.title.map((item1)=>item1.text)}/>
                          )
                        }
                      })
              }
           </h4>
                <div class='MainRateDetails'>

                    <h5>
                      {
                        messages.map((item)=>{
                         if(item.id === 137){
                            return (
                                <FormattedMessage id={item.title.map((item1)=>item1.text)}/>
                                )
                            }
                          })
                        }
                    </h5><div>{cart.start}</div>

                    <h5>
                      {
                        messages.map((item)=>{
                         if(item.id === 138){
                            return (
                                <FormattedMessage id={item.title.map((item1)=>item1.text)}/>
                                )
                            }
                          })
                        }
                    </h5><div>{cart.end}</div>

                    <h5>
                    {
                        messages.map((item)=>{
                         if(item.id === 139){
                            return (
                                <FormattedMessage id={item.title.map((item1)=>item1.text)}/>
                                )
                            }
                          })
                        }
                    {/* </h5><div>{cart.htlName.replace('%20',' ')}</div> */}
                    </h5>
                    <div>
                            {
                              content.length >0 ? content.map ((item)=>{
                                    return( 
                                            <>
                                                 {item.content_name === "Title"? item.text:null}
                                            </>        
                                    )     
                                }) : null
                            }
                    </div>
                    
                    <h5>
                    {
                        messages.map((item)=>{
                         if(item.id === 140){
                            return (
                                <FormattedMessage id={item.title.map((item1)=>item1.text)}/>
                                )
                            }
                          })
                        }
                    </h5><div></div>

                    <h5>
                    {
                        messages.map((item)=>{
                         if(item.id === 141){
                            return (
                                <FormattedMessage id={item.title.map((item1)=>item1.text)}/>
                                )
                            }
                          })
                        }
                    </h5><div>{cart.adults}</div>

                    <h5>
                    {
                        messages.map((item)=>{
                         if(item.id === 142){
                            return (
                                <FormattedMessage id={item.title.map((item1)=>item1.text)}/>
                                )
                            }
                          })
                        }
                    </h5><div>{cart.children}</div>
                    
                    <h5>
                    {
                        messages.map((item)=>{
                         if(item.id === 143){
                            return (
                                <FormattedMessage id={item.title.map((item1)=>item1.text)}/>
                                )
                            }
                          })
                        }
                    </h5><div>{cart.infants>0?cart.infants:0}</div>

                    <h5>
                    {
                        messages.map((item)=>{
                         if(item.id === 144){
                            return (
                                <FormattedMessage id={item.title.map((item1)=>item1.text)}/>
                                )
                            }
                          })
                        }
                    </h5><div>{cart.selected_currency} {Math.round(cart.amount/exchangeRate)}</div>
                    
                    <h5>
                    {
                        messages.map((item)=>{
                         if(item.id === 145){
                            return (
                                <FormattedMessage id={item.title.map((item1)=>item1.text)}/>
                                )
                            }
                          })
                        }
                    </h5><div class='TaxDetails'>
                    {
                        messages.map((item)=>{
                         if(item.id === 146){
                            return (
                                <FormattedMessage id={item.title.map((item1)=>item1.text)}/>
                                )
                            }
                          })
                        }
                    </div>
                </div>
        </div>
    )
}

