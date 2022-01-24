import React, {useState, useEffect, useCallback}  from 'react'
// import axios from "axios"
import {useIntl, FormattedMessage} from 'react-intl'
import {useDispatch, useSelector} from 'react-redux'
import {getPax} from "../../../Redux/actions/paxchoice"
import {useWindowWidthAndHeight} from '../../Pages/Helpers/WindowResizeHook'

import {PlusOutlined, MinusOutlined, DownOutlined} from '@ant-design/icons'
import {Pax} from '../Icons/pax.js'
// import {RateChoiceBlock} from './RateChoiceBlock'

import './HotelsPaxChoiceCSS.css'
import 'antd/dist/antd.css';

export const HotelsPaxChoice =({MakeVisible, paxListOpen,rooms,adults,children}) =>{

  const totalPaxRedux = useSelector(state => state.paxchoice.pax_inner_search)
  // console.log('totalPaxRedux',totalPaxRedux)

  const {messages, locale} = useIntl();
//   const [paxAmountNew, setPaxAmountNew] = useState([])
  const [counterAdults, setCounterAdults] = useState(parseInt(adults))
  const [counterChild, setCounterChild] = useState(parseInt(children))
  // const [counterInfant, setCounterInfant] = useState(0)
  const [counterRooms, setCounterRooms] = useState(parseInt(rooms))
//   const [total, setTotal] = useState({counterAdults,counterChild,counterInfant})

 const dispatch = useDispatch();

 const [width, height] = useWindowWidthAndHeight();

 useEffect ( () => {
    dispatch (getPax (counterAdults,counterChild,counterRooms));
  }, [counterAdults,counterChild,counterRooms])

//   useEffect (() =>{
//     axios.get(`${process.env.REACT_APP_SMART_URL}interface/sitechoice3new?tour_id=${tour_id}&date=${selectionDetails}`)
//     .then(res => {
//       let tour_capacity
//       res.data[0].tariff.forEach((item)=>{
//              item.rooms.forEach((item1)=>{
//               tour_capacity = item1.rates.map((item2)=>{
//                     let min = item2.rate_details.sort((a,b)=>(a.min_adult-b.min_adult))[0].min_adult
//                     let max = item2.rate_details[0].max_adult
//                            for(let i=0;i<item2.rate_details.length; i++){
//                             if(item2.rate_details[i].max_adult>max){
//                              max=item2.rate_details[i].max_adult
//                            }
//                          }
//                          return (min+max)
//               }).join('').split('').sort((a,b)=>(a-b))
//              })       
//        })

//          setPaxAmountNew(tour_capacity)              
  
//     })
//     .catch(error =>{
//       setPaxAmountNew(undefined)
//       console.log('[axios error]: ', error)
//     });
//   },[]); 

//   console.log('PAX AMOUNT NEW', paxAmountNew[0], paxAmountNew[paxAmountNew.length-1])

//     if( !paxAmountNew ){
//       return <div> Loading...</div>
//   }

  // console.log('CHECKING' , pax)

  const TotalPax = () =>{
    dispatch (getPax (counterAdults,counterChild,counterRooms))
  }

  const add = () =>{
    setCounterAdults(counterAdults+1)
  }

  const deduct = () =>{
    counterAdults>0?setCounterAdults(counterAdults-1) : setCounterAdults(0) 
  }

  const addChild = () =>{
    // counterChild<2? setCounterChild(counterChild+1) : alert('This tour allows upto 2 Children')
    setCounterChild(counterChild+1) 
  }
  const deductChild = () =>{
    counterChild>0?setCounterChild(counterChild-1) : setCounterChild(0)
  }

  // const addInfant = () =>{
  //   // counterInfant<1? setCounterInfant(counterInfant+1) : alert('This tour allows upto 1 Infant')
  //   setCounterInfant(counterInfant+1)
  // }
  // const deductInfant = () =>{
  //   counterInfant>0?setCounterInfant(counterInfant-1) : setCounterInfant(0)
  // }

  const addRooms = () =>{
    // counterInfant<1? setCounterInfant(counterInfant+1) : alert('This tour allows upto 1 Infant')
    setCounterRooms(counterRooms+1)
  }
  const deductRooms = () =>{
    counterRooms>0?setCounterRooms(counterRooms-1) : setCounterRooms(1)
  }
   
     return(
        // <div style={{marginTop:'0.8vw'}}>
        <div>
            <div class='HotelPaxChoiceWrapper' style={{width:`${width >=1000? null:'100%'}`}} >
                <div class={`${width >= 1000? 'HotelPaxResult' : 'HotelPaxResultSmallScreen'}`} style={{width:`${width >=1000? null: '100%'}`}} onClick={MakeVisible}>
                  <h4 style={{display:'flex',flexDirection:'row',justifyContent:'center'}} onClick={TotalPax}>

                     <Pax />
                      <div style={{paddingLeft:'1vw',fontSize:'14px'}}> {counterAdults} <span style={{marginLeft:'3px'}}></span>
                      {
                          messages&&messages.map((item)=>{
                            if(item.id === 141){
                               return (
                                <FormattedMessage id={item.title.map((item1)=>item1.text)}/>
                                  )
                                }
                            })
                        } 
                      
                      </div>, 
                      <div style={{paddingLeft:'1vw',fontSize:'14px'}}> {counterChild}<span style={{marginLeft:'3px'}}></span> 
                      
                      {
                          messages&&messages.map((item)=>{
                            if(item.id === 142){
                               return (
                                <FormattedMessage id={item.title.map((item1)=>item1.text)}/>
                                  )
                                }
                            })
                        } 

                      </div>,
                      <div style={{paddingLeft:'1vw',fontSize:'14px'}}> {counterRooms} <span style={{marginLeft:'3px'}}></span>
                      
                      {
                          messages&&messages.map((item)=>{
                            if(item.id === 159){
                               return (
                                <FormattedMessage id={item.title.map((item1)=>item1.text)}/>
                                  )
                                }
                            })
                        } 

                      </div>
                      {/* {counterInfant} Infants,  */}
                      <DownOutlined className='DownOutlined'/>

                  </h4>
                </div>
                  <div class={paxListOpen === false? 'PopUpNotActive' : 'PopUpActive'} style={{width:`${width >=1000? '23vw':'45%'}`}}>
                    <div style={{display: 'grid', 
                                 gridTemplateRows: 'repeat(3, 6vh)',
                                 rowGap: '10px'
                                 }}>
                    <div style={{display: 'grid',  
                                 gridTemplateColumns: '25% 17% 16% 17% 25%'}}>
                        <h4 style={{fontSize:'14px',fontFamily:'Arial'}}>
 
                          {
                           messages&&messages.map((item)=>{
                            if(item.id === 141){
                               return (
                                <FormattedMessage id={item.title.map((item1)=>item1.text)}/>
                                  )
                                }
                            })
                          } 

                        </h4>
                        <MinusOutlined className='MinusInner' style={{color:'white'}} onClick={deduct}/>
                        <h4 style={{fontSize:'14px',fontFamily:'Arial'}}>{counterAdults}</h4>  
                        <PlusOutlined className='Plus' style={{color:'white'}} onClick={add}/>
                        <h4 style={{fontSize:'14px',fontFamily:'Arial'}}>12+ y.o.</h4>
                    </div>

                    <div style={{display: 'grid',  
                                 gridTemplateColumns: '25% 17% 16% 17% 25%'}}>
                        <h4 style={{fontSize:'14px',fontFamily:'Arial'}}>
                        {
                          messages&&messages.map((item)=>{
                            if(item.id === 142){
                               return (
                                <FormattedMessage id={item.title.map((item1)=>item1.text)}/>
                                  )
                                }
                            })
                        } 
                        </h4>
                        <MinusOutlined className='MinusInner' style={{color:'white'}} onClick={deductChild}/>
                        <h4 style={{fontSize:'14px',fontFamily:'Arial'}}>{counterChild}</h4>
                        <PlusOutlined className='Plus' style={{color:'white'}} onClick={addChild}/>
                        <h4 style={{fontSize:'14px',fontFamily:'Arial'}}>2-11 y.o.</h4>
                    </div>

                    {/* <div style={{display: 'grid',  
                                 gridTemplateColumns: '5vw 4vw 2vw 4vw 5vw'}}>
                        <h4>Infants</h4>
                        <MinusOutlined className='Minus' onClick={deductInfant}/>
                        <h4>{counterInfant}</h4>
                        <PlusOutlined className='Plus' onClick={addInfant}/>
                        <span>0-2 y.o.</span>
                    </div> */}

                    <div style={{display: 'grid',  
                                 gridTemplateColumns: '25% 17% 16% 17% 25%'}}>
                        <h4 style={{fontSize:'14px',fontFamily:'Arial'}}>

                        {
                          messages&&messages.map((item)=>{
                            if(item.id === 159){
                               return (
                                <FormattedMessage id={item.title.map((item1)=>item1.text)}/>
                                  )
                                }
                            })
                        } 

                        </h4>
                        <MinusOutlined className='MinusInner' style={{color:'white'}} onClick={deductRooms}/>
                        <h4 style={{fontSize:'14px',fontFamily:'Arial'}}>{counterRooms}</h4>
                        <PlusOutlined className='Plus' style={{color:'white'}} onClick={addRooms}/>

                    </div>

                  </div>

                  <div onClick={TotalPax} style={{textAlign:'center', position:'relative',zIndex:'3000'}}>
                  
                    <button class="PopUpButton" onClick={MakeVisible}>
                    {
                          messages&&messages.map((item)=>{
                            if(item.id === 160){
                               return (
                                <FormattedMessage id={item.title.map((item1)=>item1.text)}/>
                                  )
                                }
                            })
                        } 
                    </button>
                  </div>
                        
               </div> 
            </div>
      </div>
    )
} 