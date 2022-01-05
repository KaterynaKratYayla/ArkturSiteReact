import React, {useState, useEffect}  from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getPax} from "../../../Redux/actions/paxchoice"
import axios from "axios"
import { Radio } from 'antd';
import { OccupancyTypes} from '../../Library/StaticJsonData/OccupancyTypes';

import {BookButton} from './BookButton'

import './TourDetailsCSS.css'

export const OccupancyRates = ({choiceDetailsNew,hotelChoice,tour_id,selectionDetails,totalPax}) =>{

   const [hotels, setHotels] = useState([{}])

    console.log('OCCUPANCY', choiceDetailsNew, hotelChoice)

    useEffect (() =>{
        axios.get(`${process.env.REACT_APP_SMART_URL}interface/sitechoice3new?tour_id=${tour_id}&date=${selectionDetails}`)
        .then(res => {
    
        const hotelChoice = res.data[0].hotels.map((item)=>{
            return item
        })
          setHotels(hotelChoice)               
      
        })
        .catch(error =>{
            setHotels(undefined)
          console.log('[axios error]: ', error)
        });
      },[]);     
    
      console.log('HOTEL', hotels)


    return(
     <div style={{marginTop:'5vh'}}> 
        {       
            choiceDetailsNew[0].mapping && choiceDetailsNew[0].mapping.length>0? choiceDetailsNew[0].mapping.map((item)=>{
                    for(let key in item){
                        if(key === hotelChoice){
                            for(let i in item[key].room_hotel){
                                
                                if(i ==="id" )
                                 {
                                     return ( 
                                     <div class='RadioWrapper'>
                                      
                                         <div>
                                           <Ticks 
                                              hotelChoice={hotelChoice}
                                              room_id={item[key].room_hotel[i]}
                                              hotels={hotels}
                                              totalPax={totalPax}
                                              date={selectionDetails}
                                              tour_id={tour_id}
                                              mappingItem={item[key]}
                                              tariff={choiceDetailsNew[0].tariff.map((item)=>item.rooms)}
                                            />
                                         </div>
                                       </div>
                                     )
                                    }
                                   
                                  }
                                }
                              }

            // })
            
                         
                        }):(null)
                    } 

              </div>
   
    )
}


const Ticks = ({hotelChoice,room_id,hotels,totalPax,date,tour_id,mappingItem,tariff})=>{

    console.log('KEY', hotels)

    const [value, setValue] = useState(2);
  
    const onChange = e => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
     };
     
    // const OccupancyTypes = ['Single Occupancy', 'Double Occupancy', 'Triple Occupancy','Quadruple Occupancy']

    return(
        <div>
            {
                hotels && hotels.length>0? hotels.map((item1)=>{
                 if(hotelChoice === item1.hotel_name){    
                    return item1.rooms.filter((item2,index,array)=>array.findIndex(t=>t.smart_category_id===item2.smart_category_id)===index).map((item3)=>{
                        if(item3.smart_category_id=== room_id){
                               return(
                                     <>
                                       <h5>
                                                 <span style={{fontSize:'17px',
                                                              color: 'rgb(77, 75, 75)',
                                                              fontStyle:'italic'

                                                            }}>with accommodation at hotel 
                                                  </span> 
                                                  
                                                  {' '+ hotelChoice + ' '} 
                                                  
                                                  <span style={{fontSize:'17px',
                                                              color: 'rgb(77, 75, 75)',
                                                              fontStyle:'italic'

                                                            }}>in a
                                                  </span>
                                                  
                                                  {' '+ item3.room_name.toLowerCase() + ' '} 
                                                  
                                                  <span style={{fontSize:'17px',
                                                              color: 'rgb(16, 45, 105)',
                                                              fontStyle:'italic'

                                                            }}>room. </span>

                                       <h4 style={{marginTop:'2vh', 
                                                   textAlign:'center',
                                                   textDecoration:'underline',
                                                   fontSize:'20px',
                                                   color:'#102D69'}}>Please choose your occupancy : </h4>
                                    </h5>
                                          {     
                                            totalPax.counterChild===0?(               
                                              <Radio.Group onChange={onChange} 
                                                      value={value} 
                                                      className='Radio'>
                                                          {
                                                              OccupancyTypes&&OccupancyTypes.map((item,index,array)=>{
                                                                if(index < item3.max_adults_room){
                                                                  return(
                                                                    <Radio style={{color:'#102D69',fontWeight:'bold'}} 
                                                                           value={index+1}
                                                                           key={index}>{item}</Radio>
                                                                  )
                                                                }

                                                                
                                                              })
                                                            }                                 
                                         </Radio.Group>):
                                         (
                                          <Radio.Group onChange={onChange} 
                                          value={value} 
                                          className='Radio'>
                                              {
                                                  OccupancyTypes&&OccupancyTypes.map((item,index,array)=>{
                                                    if(index < item3.max_adults_room&&index>0){
                                                      return(
                                                        <Radio style={{color:'#102D69',fontWeight:'bold'}} 
                                                               value={index+1}
                                                               key={index}>{item}</Radio>
                                                      )
                                                    }

                                                    
                                                  })
                                                }                                 
                                           </Radio.Group>
                                         )
                                      }
                                        <div>
                                           {
                                                                                       
                                           }
                                        </div>
                                     </>
                                  )
                               }
                            })
                        }
                }):(
                   
                     <label value='Please print your occupancy requirements'>
                        <input/>
                     </label>
                    )
                    
            }
            <BookButton 
               value={value}
               hotel_room_id={room_id}
               totalPax={totalPax}
               date={date}
               tour_id={tour_id}
               hotelChoice={hotelChoice}
               tour_room={mappingItem.room_tour}
               hotel_id={mappingItem.hotel_id}
               tariff={tariff}
            />
        </div>
    )
}
