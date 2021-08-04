import React, {useState,useEffect} from 'react'
import { useSelector,useDispatch} from 'react-redux'
import { getHotelRates } from '../../../../Redux/actions'
import { HotelRateGridTitles } from '../../../Library/StaticJsonData/HotelRateGridTitles'
import {BookButtonHotel} from './BookButtonHotel'
import {getRoomsChoice} from '../../../../Redux/actions/hotelroomschoice'

import { Select } from 'antd';

import './RatesBlockCSS.css'

export const RatesBlock = ({search_data}) =>{

    const [test,setTest] = useState()
    const dispatch = useDispatch();
    const hotelratesRatesBlock = useSelector(state => state.hotelrates.hotelrates)

  useEffect ( () => {
    dispatch (getHotelRates(search_data));
  }, [search_data])

//   const Test = (a) =>{
//     setTest(a)
//   }

  console.log('RATESBLOCK',hotelratesRatesBlock)
//   console.log('TEST',test)

    return(
        <div> 
          <ul className = 'RatesGridWrapper Header'>
             {
               HotelRateGridTitles&&HotelRateGridTitles.map((title)=>{
                return(
                 <li className = 'RatesGridHeader'>
                   {title}
                 </li>
                )
               })
              }
           </ul>
          <div className = 'Details'>
             {
                hotelratesRatesBlock? hotelratesRatesBlock.map((hotelrate)=>{
                    return(
                     hotelrate.rooms.map((rate)=>{
                        console.log('checking',rate)
                    return(
                      <> 
                        <h5 style={{gridColumn:'1',
                                    color: '#102D69',
                                    fontSize: '18px',
                                    fontFamily:'Arial',
                                    fontWeight:'bold',
                                    borderBottom: '2px solid rgb(109, 109, 196)',
                                    borderRight: '2px solid rgb(109, 109, 196)'
                                    }}>
                            {rate.room_name === '0'? null:rate.room_name} {rate.room_type_name} {rate.room_subcategory_name === null? null:rate.room_subcategory_name}
                        </h5>
                        <h5 style={{gridColumn:'2',      
                                    borderBottom: '2px solid rgb(109, 109, 196)',
                                    borderRight: '2px solid rgb(109, 109, 196)'}}>
                            {
                                rate.tariffs.map((tariff,tariffindex,ratesarray)=>{
                                    console.log('checking tariff',tariff)
                                    return(
                                        <h5 style={{fontSize: '18px',
                                                    color: '#102D69',
                                                    fontFamily:'Arial',
                                                    fontWeight:'bold'}}>
                                                                {tariff.pax}
                                        </h5>
                                    )
                                })
                            }
                        </h5>
                        <h5 style={{gridColumn:'3',
                              borderBottom: '2px solid rgb(109, 109, 196)',
                              borderRight: '2px solid rgb(109, 109, 196)'}}>
                            {
                                rate.tariffs.map((tariff)=>{
                                    return(
                                        <h5 style={{fontSize: '18px',
                                                    color:'blue',
                                                    fontFamily:'Arial',
                                                    fontWeight:'bold',
                                                    textAlign:'center'}}>
                                                                  {hotelrate.currency} {tariff.sum}
                                        </h5>
                                    )
                                })
                            }
                        </h5>
                        <h5 style={{gridColumn:'4',      
                                    borderBottom: '2px solid rgb(109, 109, 196)',
                                    borderRight: '2px solid rgb(109, 109, 196)'}}>
                            {
                                rate.tariffs.map((tariff)=>{
                                    return(
                                        <h5 style={{fontSize: '18px',
                                                     color:'#102D69',
                                                    fontFamily:'Arial',
                                                    fontWeight:'bold',
                                                    textAlign:'center'}}>
                                                        {tariff.tariff_type_name}
                                            </h5>
                                    )
                                })
                            }
                        </h5>
                        <h5 style={{gridColumn:'5/-1',
                                    color: '#102D69',
                                    borderBottom: '2px solid rgb(109, 109, 196)',
                                    borderRight: '2px solid rgb(109, 109, 196)',
                                    display:'flex',
                                    flexDirection:'column'
                                    }}>
                            {
                                rate.tariffs.map((tariff)=>{
                                    // console.log('ARRAY', ratesarray)
                                    return(
                                        <>
                                            {
                                             tariff.prices.map((item,index,tariffarray)=>{
                                                console.log('TARIFF', tariffarray)
                                                return(
                                                    <h5 style={{
                                                            display:'grid',
                                                            gridTemplateColumns:'50% 50%',
                                                            marginBottom:'0',
                                                            paddingBottom:'0.5vw',
                                                            paddingTop: '0.5vw',
                                                            textAlign:'center'}}>
                                                                <AvailableOptions 
                                                                            item={item}
                                                                            rooms={search_data.rooms}
                                                                            // tariffarray={tariff}
                                                                            room_id={rate.room_id}
                                                                            room_name={rate.room_name}
                                                                            room_type_id={rate.room_type_id}
                                                                            room_type_name={rate.room_type_name}
                                                                            room_subcategory_id={rate.room_subcategory_id}
                                                                            room_subcategory_name={rate.room_subcategory_name}
                                                                            sum={tariff.sum}
                                                                            tariff_id={tariff.tariff_id}
                                                                            tariff_name={tariff.tariff_name}
                                                                            tariff_type_id={tariff.tariff_type_id}
                                                                            tariff_type_name={tariff.tariff_type_name}

                                                                            />
                                                    </h5>
                                                )
                                           })
                                        }
                                        </>
                                    )
                                })
                            }
                        </h5>
                        
                       
                       {/* <h5 style={{gridColumn:'6',      
                                    borderBottom: '2px solid rgb(109, 109, 196)',
                                    textAlign:'center'}}>
                           <BookButtonHotel />
                       </h5>  */}
                      </>
                    )
                    })
                    )
                }):null
              }
            </div>
        </div>
    )
}

const AvailableOptions = (props) =>{

    const {item,rooms,tariffarray,room_id,room_name,room_type_id,room_type_name,room_subcategory_id,room_subcategory_name,sum,tariff_id,tariff_name,tariff_type_id,tariff_type_name} = props;
    
    console.log('PROPS', props)

    const [selectedAvailability, setSelectedAvailability] = useState(parseInt(rooms,10))
    // const [ActiveIndex,setActiveIndex] = useState([roomindex,tariffindex])
    // const [activeSelect,setActiveSelect] = useState(false)
    const { Option } = Select;

    // const dispatch = useDispatch();

    const SelectRooms = (value) =>{
        setSelectedAvailability(value)
        // dispatch (getRoomsChoice(value))
    }

    let empty_array = [];
    
    for(let i=0; empty_array.length<=item.availability; i++){
        // empty_array.push(i)
    }

    console.log('AVAILABILITY', selectedAvailability)
   

    return(
        <>
        {/* <h5> */}
        <Select 
             defaultValue={selectedAvailability}
             onChange={SelectRooms}
             bordered={true}
             size='large'> 
              <>
                {
                  empty_array&&empty_array.map((item)=>{
                     return (
                        //  <option 
                        //     className='AvailableOptions' 
                        //     value={item}>
                        //                 {item}
                        //  </option>
                         <Option  
                              className='AvailableOptions' 
                              value={item}
                              key={item}> 
                                       {item} 
                           </Option>  
                          )    
                       })
                   }
               </>
          </Select>
          {/* </h5> */}
          {/* /* </select> */ }
          {/* <h5 style={{     
            //   borderBottom: '2px solid rgb(109, 109, 196)',
                margin:'0',
                textAlign:'center'}}> */}
                    <BookButtonHotel 
                        selectedAvailability={selectedAvailability}
                        room_id={room_id}
                        room_name={room_name}
                        room_type_id={room_type_id}
                        room_type_name={room_type_name}
                        room_subcategory_id={room_subcategory_id}
                        room_subcategory_name={room_subcategory_name}
                        sum={sum}
                        tariff_id={tariff_id}
                        tariff_name={tariff_name}
                        tariff_type_id={tariff_type_id}
                        tariff_type_name={tariff_type_name}/>
        {/* </h5>  */}
        </>
    )
}
