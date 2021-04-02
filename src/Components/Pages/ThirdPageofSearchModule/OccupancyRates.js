import React, {useState, useEffect}  from 'react'
import axios from "axios"
import { Radio } from 'antd';

export const OccupancyRates = ({choiceDetailsNew,hotelChoice,tour_id,selectionDetails}) =>{

    
   const [hotels, setHotels] = useState([{}])

    console.log('OCCUPANCY', choiceDetailsNew, hotelChoice)

    useEffect (() =>{
        axios.get(`https://hotels-ua.biz/interface/sitechoice3new?tour_id=${tour_id}&date=${selectionDetails}`)
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
     <div> 
        {       
            choiceDetailsNew[0].mapping && choiceDetailsNew[0].mapping.length>0? choiceDetailsNew[0].mapping.map((item)=>{
                // hotels && hotels.forEach((item1)=>{
                    for(let key in item){
                        if(key === hotelChoice){
                            for(let i in item[key].room_hotel){
                                
                                if(i ==="id" )
                                 {
                                     return ( 
                                     <div class='RadioWrapper'>
                                         {/* <h5>
                                                <span style={{fontSize:'17px',
                                                              color: 'rgb(16, 45, 105)',
                                                              fontStyle:'italic'


                                                }}>with accommodation at hotel </span>

                                             {key+ ' '}

                                                
                                                <span style={{fontSize:'12px',
                                                              color:'grey',
                                                              }}>
                                                                  {'(room_id:'+item[key].room_hotel[i] + ')'}
                                                </span>

                                     </h5> */}
                                      
                                         <div>
                                           <Ticks 
                                              hotelChoice={hotelChoice}
                                              room_id={item[key].room_hotel[i]}
                                              hotels={hotels}
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


const Ticks = ({hotelChoice,room_id,hotels})=>{

    console.log('KEY', hotelChoice, room_id, hotels)

    const [value, setValue] = useState(1);
  
    const onChange = e => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
     };
     
    // const arr = new Array(2).fill(2);

    // console.log('ARRAY', arr)

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
                                                              color: 'rgb(16, 45, 105)',
                                                              fontStyle:'italic'

                                                            }}>with accommodation at hotel 
                                                  </span> 
                                                  
                                                  {' '+ hotelChoice + ' '} 
                                                  
                                                  <span style={{fontSize:'17px',
                                                              color: 'rgb(16, 45, 105)',
                                                              fontStyle:'italic'

                                                            }}>in a
                                                  </span>
                                                  
                                                  {' '+ item3.room_name.toLowerCase() + ' '} 
                                                  
                                                  <span style={{fontSize:'17px',
                                                              color: 'rgb(16, 45, 105)',
                                                              fontStyle:'italic'

                                                            }}>room. </span>

                                       <h4 style={{marginTop:'1vh'}}>Please choose your occupancy : </h4>
                                    </h5>
                                     
                                         <Radio.Group onChange={onChange} 
                                                      value={value} 
                                                      className='Radio'>
                                             <Radio value={1}>Single Occupancy</Radio>
                                             <Radio value={2}>Double Occupancy</Radio>
                                             <Radio value={3}>Triple Occupancy</Radio>
                                         </Radio.Group>

                                        <div>

                                            {/* {
                                                newArray.map((item)=>{
                                                    return item
                                                })
                                            } */}
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
        </div>
    )
}