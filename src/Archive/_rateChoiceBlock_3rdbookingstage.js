import React, {useState, useEffect} from 'react'
import axios from "axios"
import 'antd/dist/antd.css'
// import PropTypes from 'prop-types';

// import DropdownButton from 'react-bootstrap/DropdownButton'
// import Dropdown from 'react-bootstrap/Dropdown'

import { Select } from 'antd';

// import {CalendarOutlined} from '@ant-design/icons'

import {PaxChoice} from './PaxChoice'
import {Coach} from '../../Library/Icons/coach.js'
import {Guide} from '../../Library/Icons/guide.js'
import {Hotels} from '../../Library/Icons/hotels.js'

import './TourDetailsCSS.css'

export const RateChoiceBlock =({selectionDetails,tour_id}) =>{

      const [choiceDetails, setchoiceDetails] = useState([{}]);
      const [hotelChoice, sethotelChoice] = useState('Hotels Available')
      const [open, setOpen] = useState(false)
      // const [paxAmount, setPaxAmount] = useState([])
      const [choiceDetailsNew, setChoiceDetailsNew] = useState([{}]);
       
      const { Option } = Select;

      console.log('tour_id', tour_id)
 
      function handleChange(value) {
        // console.log(`selected ${value}`);
        sethotelChoice(value)
     
        // console.log('[hotelChoice]', hotelChoice)
      }

      const handleSelected = (value) =>{
        alert(value)
      }

      useEffect (() =>{
        axios.get(`https://hotels-ua.biz/interface/sitechoice3?tour_id=${tour_id}&date=${selectionDetails}`)
        .then(res => {
          setchoiceDetails(res.data)               
      
        })
        .catch(error =>{
          setchoiceDetails(undefined)
          console.log('[axios error]: ', error)
        });
      },[]);    

      useEffect (() =>{
        axios.get(`https://hotels-ua.biz/interface/sitechoice3new?tour_id=${tour_id}&date=${selectionDetails}`)
        .then(res => {
          setChoiceDetailsNew(res.data)               
      
        })
        .catch(error =>{
          setChoiceDetailsNew(undefined)
          console.log('[axios error]: ', error)
        });
      },[]);  
           
     console.log('CHOICE_DETAILS_NEW', choiceDetailsNew, 'CHOICE_DETAILS_OLD', choiceDetails)
      // useEffect (() =>{
      //   axios.get(`https://hotels-ua.biz/interface/sitechoice3?tour_id=${tour_id}&date=${selectionDetails}`)
      //   .then(res => {
    
      //     const tour_capacity = res.data.filter((item)=> {
      //       if(item.tariff){
      //             return item
      //       } 
      //      }
      //     )
      //     .map((item1)=>item1.tariff)[0]
      //     .map((item2)=>item2[0].rate_details)
      //     .map((item3)=>item3[0])
      //     .map((item4)=>{
      //       let min=item4.sort((a,b)=>(a.min_adult-b.min_adult))[0].min_adult
      //       let max = item4[0].max_adult
      //           for(let i=0;i<item4.length; i++){
      //              if(item4[i].max_adult>max){
      //               max=item4[i].max_adult
      //             }
      //          }
      //       console.log('MAX' , max)
      //       return (min+max)
      //     })
      //     .join('').split('')
      //     .sort((a,b)=>(a-b))
     
      //       setPaxAmount(tour_capacity[0])
      //   })
      //   .catch(error =>{
      //     setPaxAmount(undefined)
      //     console.log('[axios error]: ', error)
      //   });
      // },[]); 

      // console.log('PAX_AMOUNT', paxAmount)
   
      const MakeVisible = () =>{
        setOpen(!open)
      }

      console.log('[SASHAS_OBJECT]' , choiceDetails)

      return(
        <div>
            
          <div class='RateChoiceBlock'>
               <PaxChoice 
                    MakeVisible = {MakeVisible}
                    open={open}
                    tour_id={tour_id}
                    selectionDetails={selectionDetails}
                    // paxAmount={paxAmount}
                    />

            {
              choiceDetails && choiceDetails.typeof!=='string'? (choiceDetails.map((item)=> {
               
                if(item.hotels&&item.hotels[0]!=='no attached hotels'){
                  return(
                  <div style={{display:'flex',
                               flexDirection:'column'}}
                       class='second'>
                     <div style={{display:'flex', 
                             flexDirection:'row',
                            //  justifyContent:'space-around',
                             maxWidth:'15vw',
                             marginBottom: '0.5vh'}}>
                        <Hotels />
                        <h4 style={{marginLeft:'0.5vw'}}>Accommodation</h4>
                     </div>

                     <Select 
                          defaultValue={hotelChoice}
                          style={{ maxWidth: '15vw',
                                   color:'#102D69',
                                   fontWeight:'bold',
                                   }} 
                          size='medium'
                          onChange={handleChange}
                          onSelect={handleSelected}
                          bordered={true}>
                               { 
                                item.hotels && item.hotels.map((hotel)=>{
                                  return(
                                    <>
                                      <Option 
                                            value={hotel[0].hotel_name}>
                                                  {hotel[0].hotel_name} {hotel[0].hotel_rating} 
                                      </Option>
                                    </>
                                  )
                        })        
                      }
                    </Select>
                    
                   </div>
                  )
                }

                

                // else if(item.inclusions){
                //   return(
                  
                //      <>
                //         {
                //           item.inclusions? item.inclusions.map((item1)=>{
                //             if(item1.Transfer){ 
                //               return(

                //                 <div style={{display:'flex', 
                //                          flexDirection:'column',
                //                         //  marginBottom:'0.5vh'
                                      
                //                          }}
                //                          class='third'>
                //                   <Coach />
                //                   <h4 style={{marginTop:'1vh'}}>Transfer Included</h4>
                //                 </div>
                //                )
                //               }
                //             else if(item1.Excursion||item1.Guide){
                //                return (
                //                 <div style={{marginBottom: '4vh',
                //                           marginTop:'0.5vh',
                //                           display:'flex', 
                //                           flexDirection:'column'
                //                           }}
                //                           class='forth'>
                //                   <Guide />
                //                   <h4 style={{marginTop:'1vh'}}>Guide Included</h4>
                //                 </div>
                //               )
                //              }
                                          
                //          })
                //         :(null)
                //       }
                //     </>
                  
                //  )
                // }
                 
              })) : (<div>Please click here to send your request</div>)
              }
              <>
                    
                        {
                          choiceDetailsNew.inclusions&&choiceDetailsNew.inclusions.length>0? choiceDetailsNew.inclusions.map((item1)=>{
                            if(item1.Transfer){ 
                              return(

                                <div style={{display:'flex', 
                                         flexDirection:'column',
                                        //  marginBottom:'0.5vh'
                                      
                                         }}
                                         class='third'>
                                  <Coach />
                                  <h4 style={{marginTop:'1vh'}}>Transfer Included</h4>
                                </div>
                               )
                              }
                            else if(item1.Excursion||item1.Guide){
                               return (
                                <div style={{marginBottom: '4vh',
                                          marginTop:'0.5vh',
                                          display:'flex', 
                                          flexDirection:'column'
                                          }}
                                          class='forth'>
                                  <Guide />
                                  <h4 style={{marginTop:'1vh'}}>Guide Included</h4>
                                </div>
                              )
                             }
                                          
                         })
                        :(null)
                      }
                    </>
              
        </div>
      </div>
      )
    }