import React, {useState, useEffect}  from 'react'
import axios from "axios"
import {useDispatch, useSelector} from 'react-redux'
import {getPax} from "../../../../Redux/actions/paxchoice"

import {PlusOutlined, MinusOutlined, DownOutlined} from '@ant-design/icons'
import {Pax} from '../../../Library/Icons/pax.js'
import {RateChoiceBlock} from './RateChoiceBlock'

import './TourDetailsCSS.css'
import 'antd/dist/antd.css';

export const PaxChoice =({MakeVisible, open, tour_id, selectionDetails,choiceDetailsNew}) =>{

  const dispatch = useDispatch();

  const [paxAmountNew, setPaxAmountNew] = useState([])
  const [counterAdults, setCounterAdults] = useState(1)
  const [counterChild, setCounterChild] = useState(0)
  const [counterInfant, setCounterInfant] = useState(0)
  const [total, setTotal] = useState({counterAdults,counterChild,counterInfant})

  useEffect (() =>{
    axios.get(`${process.env.REACT_APP_SMART_URL}interface/sitechoice3new?tour_id=${tour_id}&date=${selectionDetails}`)
    .then(res => {

      // let tour_capacity
      let minmax_array = [];

      console.log('TESTPAXCHOICE',res.data)

      res.data[0].tariff.forEach((item)=>{
             item.rooms.forEach((item1)=>{
              item1.rates.forEach((item2)=>{
                    let min = item2.rate_details.sort((a,b)=>(a.min_adult-b.min_adult))[0].min_adult
                    let max = item2.rate_details[0].max_adult
                           for(let i=0;i<item2.rate_details.length; i++){
                            if(item2.rate_details[i].max_adult>max){
                             max=item2.rate_details[i].max_adult
                            
                           }
                         }
                    minmax_array = [parseInt(min),parseInt(max)]
                   
              })
              // .join('').split('').sort((a,b)=>(a-b))
             })       
       })

         setPaxAmountNew(minmax_array)              
  
    })
    .catch(error =>{
      setPaxAmountNew(undefined)
      console.log('[axios error]: ', error)
    });
  },[]); 

  console.log('MINMAX',paxAmountNew)
  //  paxAmountNew[0], paxAmountNew[paxAmountNew.length-1])

    if( !paxAmountNew ){
      return <div> Loading...</div>
  }

  // console.log('CHECKING' , pax)

  const TotalPax = () =>{
    const totalpax = {
      counterAdults: counterAdults,
      counterChild: counterChild,
      counterInfant: counterInfant
    }

    dispatch(getPax(counterAdults,counterChild))
    setTotal(totalpax)
  }

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
        
            <div class='TourPaxChoiceWrapper'>
                 <div class='PaxChoice'>
                    <Pax />
                    <h4>Amount of People</h4>
                </div>
                <div class='PaxResult' onClick={MakeVisible}>
                  <h4 onClick={TotalPax}>
                      {counterAdults} Adults, {counterChild} Children, {counterInfant} Infants
                      <DownOutlined className='DownOutlined'/>
                  </h4>
                </div>
                  <div class={open === false? 'TourPopUpNotActive' : 'TourPopUpActive'}>
                    <div style={{display: 'grid', 
                                 gridTemplateRows: 'repeat(3, 6vh)',
                                 rowGap: '10px'}}>
                    <div style={{display: 'grid',  
                                 gridTemplateColumns: '25% 20% 10% 20% 25%'}}>
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
                                 gridTemplateColumns: '25% 20% 10% 20% 25%'}}>
                        <h4>Children</h4>
                        <MinusOutlined className='Minus' onClick={deductChild}/>
                        <h4>{counterChild}</h4>
                        <PlusOutlined className='Plus' onClick={addChild}/>
                        <span>2-11 y.o.</span>
                    </div>

                    <div style={{display: 'grid',  
                                 gridTemplateColumns: '25% 20% 10% 20% 25%'}}>
                        <h4>Infants</h4>
                        <MinusOutlined className='Minus' onClick={deductInfant}/>
                        <h4>{counterInfant}</h4>
                        <PlusOutlined className='Plus' onClick={addInfant}/>
                        <span>0-2 y.o.</span>
                    </div>
                  </div>

                  <div onClick={TotalPax}>
                  
                    <button class="TourPopUpButton" onClick={MakeVisible}>
                            Confirm
                    </button>
                  </div>
                        
               </div> 
            </div>
    
    )
} 