import React, {useState, useEffect}  from 'react'
import axios from "axios"
import {useDispatch, useSelector} from 'react-redux'
import {getPax} from "../../../Redux/actions/paxchoice"

import {PlusOutlined, MinusOutlined, DownOutlined} from '@ant-design/icons'
import {Pax} from '../../Library/Icons/pax.js'

import './TourDetailsCSS.css'
import 'antd/dist/antd.css';

export const PaxChoice =({MakeVisible, open, tour_id, selectionDetails}) =>{

  const [paxAmountNew, setPaxAmountNew] = useState([])
  const [counterAdults, setCounterAdults] = useState(2)
  const [counterChild, setCounterChild] = useState(0)
  const [counterInfant, setCounterInfant] = useState(0)
  // const [paxList, setPaxList] = useState({})
  // const [hotelMapped, sethotelMapped] = useState([{}])

const pax = useSelector(state => state.paxchoice.pax)
const dispatch = useDispatch();

useEffect ( () => {
  dispatch (getPax (counterAdults,counterChild,counterInfant));
  },[]);

  useEffect (() =>{
    axios.get(`https://hotels-ua.biz/interface/sitechoice3new?tour_id=${tour_id}&date=${selectionDetails}`)
    .then(res => {
      let tour_capacity
      res.data[0].tariff.forEach((item)=>{
             item.rooms.forEach((item1)=>{
              tour_capacity = item1.rates.map((item2)=>{
                    let min = item2.rate_details.sort((a,b)=>(a.min_adult-b.min_adult))[0].min_adult
                    let max = item2.rate_details[0].max_adult
                           for(let i=0;i<item2.rate_details.length; i++){
                            if(item2.rate_details[i].max_adult>max){
                             max=item2.rate_details[i].max_adult
                           }
                         }
                         return (min+max)
              }).join('').split('').sort((a,b)=>(a-b))
             })       
       })

         setPaxAmountNew(tour_capacity)              
  
    })
    .catch(error =>{
      setPaxAmountNew(undefined)
      console.log('[axios error]: ', error)
    });
  },[]); 

  console.log('PAX AMOUNT NEW', paxAmountNew[0], paxAmountNew[paxAmountNew.length-1])

    if( !pax ){
      return <div> Loading...</div>
  }

  console.log('CHECKING' , pax)

  const add = () =>{
    counterAdults<paxAmountNew[paxAmountNew.length-1]? setCounterAdults(counterAdults+1)
      : alert(`This tour allows upto ${paxAmountNew[paxAmountNew.length-1]} Adults`)

  }
  const deduct = () =>{
    counterAdults>0?setCounterAdults(counterAdults-1) : setCounterAdults(0) 
  }

  const addChild = () =>{
    counterChild<2? setCounterChild(counterChild+1) : alert('This tour allows upto 2 Children')
  }
  const deductChild = () =>{
    counterChild>0?setCounterChild(counterChild-1) : setCounterChild(0)
  }

  const addInfant = () =>{
    counterInfant<1? setCounterInfant(counterInfant+1) : alert('This tour allows upto 1 Infant')
  }
  const deductInfant = () =>{
    counterInfant>0?setCounterInfant(counterInfant-1) : setCounterInfant(0)
  }

   
     return(
        <div class='first'>
                 <div class='PaxChoice'>
                    <Pax />
                    <h4>Amount of People</h4>
                </div>
                <div class='PaxResult' onClick={MakeVisible}>
                  <h4>
                      {counterAdults} Adults, {counterChild} Children, {counterInfant} Infants
                      <DownOutlined className='DownOutlined'/>
                  </h4>
                </div>
                  <div class={open === false? 'PopUpNotActive' : 'PopUpActive'}>
                    <div style={{display: 'grid', 
                                 gridTemplateRows: 'repeat(3, 6vh)',
                                 rowGap: '3vh'}}>
                    <div style={{display: 'grid',  
                                 gridTemplateColumns: '5vw 4vw 2vw 4vw 5vw'}}>
                        <h4>Adults</h4>
                        <MinusOutlined className='Minus' onClick={deduct}/>
                         <>
                            {
                              <h4>{counterAdults}</h4>  
                            }
                         </>
                        <PlusOutlined className='Plus' onClick={add}/>
                        <span>12+ y.o.</span>
                    </div>

                    <div style={{display: 'grid',  
                                 gridTemplateColumns: '5vw 4vw 2vw 4vw 5vw'}}>
                        <h4>Children</h4>
                        <MinusOutlined className='Minus' onClick={deductChild}/>
                        <h4>{counterChild}</h4>
                        <PlusOutlined className='Plus' onClick={addChild}/>
                        <span>2-11 y.o.</span>
                    </div>

                    <div style={{display: 'grid',  
                                 gridTemplateColumns: '5vw 4vw 2vw 4vw 5vw'}}>
                        <h4>Infants</h4>
                        <MinusOutlined className='Minus' onClick={deductInfant}/>
                        <h4>{counterInfant}</h4>
                        <PlusOutlined className='Plus' onClick={addInfant}/>
                        <span>0-2 y.o.</span>
                    </div>
                  </div>

                  <div onClick={() =>dispatch (getPax (counterAdults, counterChild, counterInfant))}>
                    <button class="PopUpButton" onClick={MakeVisible}>
                            Confirm
                    </button>
                  </div>
                        
                 </div> 
               </div>
    )
} 