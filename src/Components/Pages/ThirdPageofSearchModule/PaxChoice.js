import React, {useState, useEffect}  from 'react'
import axios from "axios"

import {PlusOutlined, MinusOutlined} from '@ant-design/icons'
import {Pax} from '../../Library/Icons/pax.js'

import './TourDetailsCSS.css'
import 'antd/dist/antd.css'

export const PaxChoice =({MakeVisible, open, tour_id, selectionDetails}) =>{

  const [paxAmount, setPaxAmount] = useState([])

  useEffect (() =>{
    axios.get(`https://hotels-ua.biz/interface/sitechoice3?tour_id=${tour_id}&date=${selectionDetails}`)
    .then(res => {

      const tour_capacity = res.data.filter((item)=> {
        if(item.tariff){
              return item
        } 
       }
      )
      .map((item1)=>item1.tariff)[0]
      .map((item2)=>item2[0].rate_details)
      .map((item3)=>item3[0])
      .map((item4)=>{
        let min=item4.sort((a,b)=>(a.min_adult-b.min_adult))[0].min_adult
        let max = item4[0].max_adult
            for(let i=0;i<item4.length; i++){
               if(item4[i].max_adult>max){
                max=item4[i].max_adult
              }
           }
        console.log('MAX' , max)
        return (min+max)
      })
      .join('').split('')
      .sort((a,b)=>(a-b))
 
        setPaxAmount(tour_capacity)
    })
    .catch(error =>{
      setPaxAmount(undefined)
      console.log('[axios error]: ', error)
    });
  },[]);  

  console.log('PAX AMOUNT', paxAmount)
      return(
        <div class='first'>
                 <div class='PaxChoice'>
                    <Pax />
                    <h4 onClick={MakeVisible}>Amount of People</h4>
                </div>
                  <div class={open === false? 'PopUpNotActive' : 'PopUpActive'}>
                    <div style={{display: 'grid', 
                                 gridTemplateRows: 'repeat(3, 6vh)',
                                 rowGap: '3vh'}}>
                    <div style={{display: 'grid',  
                                 gridTemplateColumns: '5vw 4vw 2vw 4vw 5vw'}}>
                        <h4>Adults</h4>
                        <MinusOutlined className='Minus'/>
                         <>
                            {
                              paxAmount? <h4>{paxAmount[0]}</h4>
                               :
                              (<h4>0</h4>)
                            }
                         </>
                        <PlusOutlined className='Plus'/>
                        <span>12+ y.o.</span>
                    </div>

                    <div style={{display: 'grid',  
                                 gridTemplateColumns: '5vw 4vw 2vw 4vw 5vw'}}>
                        <h4>Children</h4>
                        <MinusOutlined className='Minus'/>
                        <h4>0</h4>
                        <PlusOutlined className='Plus'/>
                        <span>2-11 y.o.</span>
                    </div>

                    <div style={{display: 'grid',  
                                 gridTemplateColumns: '5vw 4vw 2vw 4vw 5vw'}}>
                        <h4>Infants</h4>
                        <MinusOutlined className='Minus'/>
                        <h4>0</h4>
                        <PlusOutlined className='Plus'/>
                        <span>0-2 y.o.</span>
                    </div>
                  </div>

                  <div>
                    <button class="PopUpButton">
                            Confirm
                    </button>
                  </div>
                        
                 </div> 
               </div>
    )
} 