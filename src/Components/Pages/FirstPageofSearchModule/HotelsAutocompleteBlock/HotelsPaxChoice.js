import React, {useState, useEffect, useCallback}  from 'react'
// import axios from "axios"
import {useDispatch, useSelector} from 'react-redux'
import {getPax} from "../../../../Redux/actions/paxchoice"
import {useWindowWidthAndHeight} from '../../Helpers/WindowResizeHook'

import {PlusOutlined, MinusOutlined, DownOutlined} from '@ant-design/icons'
import {Pax} from '../../../Library/Icons/pax.js'
// import {RateChoiceBlock} from './RateChoiceBlock'

import './HotelsAutocompleteCSS.css'
import 'antd/dist/antd.css';

export const HotelsPaxChoice =({MakeVisible, paxListOpen}) =>{

//   const [paxAmountNew, setPaxAmountNew] = useState([])
  const [counterAdults, setCounterAdults] = useState(2)
  const [counterChild, setCounterChild] = useState(0)
  const [counterInfant, setCounterInfant] = useState(0)
  const [counterRooms, setCounterRooms] = useState(1)
//   const [total, setTotal] = useState({counterAdults,counterChild,counterInfant})

 const dispatch = useDispatch();

 const [width, height] = useWindowWidthAndHeight();

 useEffect ( () => {
    dispatch (getPax (counterAdults,counterChild,counterRooms));
  }, [counterAdults,counterChild,counterRooms])

//   useEffect (() =>{
//     axios.get(`https://hotels-ua.biz/interface/sitechoice3new?tour_id=${tour_id}&date=${selectionDetails}`)
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
    // const totalpax = {
    //   counterAdults: counterAdults,
    //   counterChild: counterChild,
    //   counterInfant: counterInfant,
    //   counterRooms: counterRooms
    // }

    // setTotal(totalpax)

    dispatch (getPax (counterAdults,counterChild,counterInfant,counterRooms))
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

  const addInfant = () =>{
    // counterInfant<1? setCounterInfant(counterInfant+1) : alert('This tour allows upto 1 Infant')
    setCounterInfant(counterInfant+1)
  }
  const deductInfant = () =>{
    counterInfant>0?setCounterInfant(counterInfant-1) : setCounterInfant(0)
  }

  const addRooms = () =>{
    // counterInfant<1? setCounterInfant(counterInfant+1) : alert('This tour allows upto 1 Infant')
    setCounterRooms(counterRooms+1)
  }
  const deductRooms = () =>{
    counterRooms>0?setCounterRooms(counterRooms-1) : setCounterRooms(1)
  }
   
     return(
        <div style={{marginTop:'0.8vw'}}>
            <div class='HotelPaxChoiceWrapper' style={{width:`${width >=1000? null: width*0.8}px`}} >
                <div class={`${width >= 1000? 'HotelPaxResult' : 'HotelPaxResultSmallScreen'}`} style={{width:`${width >=1000? null: width*0.8}px`}} onClick={MakeVisible}>
                  <h4 style={{display:'flex',flexDirection:'row',justifyContent:'center'}} onClick={TotalPax}>

                     <Pax />
                      <div style={{paddingLeft:'1vw'}}> {counterAdults} Adults</div>, 
                      <div style={{paddingLeft:'1vw'}}> {counterChild} Children</div>,
                      <div style={{paddingLeft:'1vw'}}> {counterRooms} Rooms </div>
                      {/* {counterInfant} Infants,  */}
                      <DownOutlined className='DownOutlined'/>

                  </h4>
                </div>
                  <div class={paxListOpen === false? 'PopUpNotActive' : 'PopUpActive'} style={{width:`${width >=1000? null: width*0.8}px`}}>
                    <div style={{display: 'grid', 
                                 gridTemplateRows: 'repeat(3, 6vh)',
                                 rowGap: '10px'
                                 }}>
                    <div style={{display: 'grid',  
                                 gridTemplateColumns: '25% 17% 16% 17% 25%'}}>
                        <h4>Adults</h4>
                        <h4><MinusOutlined className='Minus' onClick={deduct}/></h4>
                        <h4>{counterAdults}</h4>  
                        <h4><PlusOutlined className='Plus' onClick={add}/></h4>
                        <h4>12+ y.o.</h4>
                    </div>

                    <div style={{display: 'grid',  
                                 gridTemplateColumns: '25% 17% 16% 17% 25%'}}>
                        <h4>Children</h4>
                        <h4><MinusOutlined className='Minus' onClick={deductChild}/></h4>
                        <h4>{counterChild}</h4>
                        <h4><PlusOutlined className='Plus' onClick={addChild}/></h4>
                        <h4>2-11 y.o.</h4>
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
                        <h4>Rooms</h4>
                        <h4><MinusOutlined className='Minus' onClick={deductRooms}/></h4>
                        <h4>{counterRooms}</h4>
                        <h4><PlusOutlined className='Plus' onClick={addRooms}/></h4>

                    </div>

                  </div>

                  <div onClick={TotalPax} style={{textAlign:'center'}}>
                  
                    <button class="PopUpButton" onClick={MakeVisible}>
                            Confirm
                    </button>
                  </div>
                        
               </div> 
            </div>
      </div>
    )
} 