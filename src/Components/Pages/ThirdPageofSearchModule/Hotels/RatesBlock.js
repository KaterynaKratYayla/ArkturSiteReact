import React, {useState,useEffect} from 'react'
import { useSelector,useDispatch} from 'react-redux'
import { getHotelRates } from '../../../../Redux/actions'
import { HotelRateGridTitles } from '../../../Library/StaticJsonData/HotelRateGridTitles'
import {BookButtonHotel} from './BookButtonHotel'
import {getRoomsChoice} from '../../../../Redux/actions/hotelroomschoice'

import { Select } from 'antd';

import './RatesBlockCSS.css'

export const RatesBlock = ({search_data}) =>{

const [visible, setVisible] = useState(true)

    const dispatch = useDispatch();
    const hotelratesRatesBlock = useSelector(state => state.hotelrates.hotelrates)

  useEffect ( () => {
    dispatch (getHotelRates(search_data));
  }, [search_data])

  console.log('SEARCH_DATA',search_data)
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
                     hotelrate.room_rates.map((item)=>{
                      return(
                       hotelrate.dates.map((item1)=>{
                         if(item1.date === search_data.start){
                           return(
                              item1.rooms.map((item2)=>{
                                if(item2.room_id === item.room_id){
                                  return(
                                  <>
                                    <h5 className='RoomTypeColumn'>
                                                {item.room_name === '0'? 'Regular' : item.room_name} {item.room_type_name} {item.room_id}
                                    </h5>                       
                                    <>
                                      {
                                        item2.tariffs.map((item3)=>{
                                            return(
                                              item3.prices.map((item4)=>{
                                                return(
                                                <>
                                                    <h5 style={{
                                                            gridColumn:'2',
                                                              borderBottom: '2px solid rgb(109, 109, 196)',
                                                              borderRight: '2px solid rgb(109, 109, 196)',
                                                              fontSize: '18px',
                                                              color: '#102D69',
                                                              fontFamily:'Arial',
                                                              fontWeight:'bold'}}>
                                                                    {item4.pax} 
                                            
                                                    </h5>
                                            
                                                    <h5 style={{
                                                            gridColumn:'3',
                                                             borderBottom: '2px solid rgb(109, 109, 196)',
                                                            borderRight: '2px solid rgb(109, 109, 196)',
                                                            fontSize: '18px',
                                                            color: '#102D69',
                                                            fontFamily:'Arial',
                                                            fontWeight:'bold'}}>
                                                                    {hotelrate.currency}  {item4.sum}
                                                    </h5>

                                                    <h5 style={{
                                                            gridColumn:'4',
                                                            borderBottom: '2px solid rgb(109, 109, 196)',
                                                            borderRight: '2px solid rgb(109, 109, 196)',
                                                            }}>
                                                              
                                                                {
                                                                    item.tariffs&&item.tariffs.map((tariff)=>{
                                                                        
                                                                      if(tariff.tariff_id === item3.tariff_id){
                                                                        return(
                                                                         <h5 style={{fontSize: '18px',
                                                                             color:'blue',
                                                                             fontFamily:'Arial',
                                                                             fontWeight:'bold',
                                                                             textAlign:'center'}}>
                                                                                  {tariff.tariff_type_name}
                                                                         </h5>
                                                                        
                                                                        )
                                                                      }
                                                                    })
                                                                }
                                                                    
                                                    </h5>

                                                    {/* <h5 style={{
                                                            gridColumn:'5',
                                                            borderBottom: '2px solid rgb(109, 109, 196)',
                                                            borderRight: '2px solid rgb(109, 109, 196)',
                                                            fontSize: '18px',
                                                            color:'blue',
                                                            fontFamily:'Arial',
                                                            fontWeight:'bold',
                                                            textAlign:'center'}}>

                                                                    {item3.availability}
                                                    </h5>
                                                    <h5 style={{
                                                            gridColumn:'6',
                                                            borderBottom: '2px solid rgb(109, 109, 196)',
                                                            borderRight: '2px solid rgb(109, 109, 196)',
                                                            fontSize: '18px',
                                                            color:'blue',
                                                            fontFamily:'Arial',
                                                            fontWeight:'bold',
                                                            textAlign:'center'}}>

                                                                    Book
                                                    </h5> */}
                                                    <h5 style={{
                                                            display:'grid',
                                                            gridColumn:'2/-1',
                                                            gridTemplateColumns:'50% 50%',
                                                            marginBottom:'0',
                                                            paddingBottom:'0.5vw',
                                                            paddingTop: '0.5vw',
                                                            textAlign:'center'}}>
                                                                <AvailableOptions 
                                                                            // item={item}
                                                                            rooms={search_data.rooms}
                                                                            room_id={item.room_id}
                                                                            room_name={item.room_name}
                                                                            room_type_id={item.room_type_id}
                                                                            room_type_name={item.room_type_name}
                                                                            room_subcategory_id={item.room_subcategory_id}
                                                                            room_subcategory_name={item.room_subcategory_name}
                                                                            sum={item4.sum}
                                                                            tariff_id={item3.tariff_id}
                                                                            availability={item3.availability}

                                                                            />
                                                    </h5>
                                                </>
                                                )
                                              })
                                            )
                                        })
                                      }
                                    </>
                                    
                                 </>
                                )
                              }
                            })
                           )
                          }
                       })
                      )
                    })
                   )
                  }):null 
                } 
              </div> 
            </div>
          )
      }
                                         

                        // <h5 style={{gridColumn:'5/-1',
                        //             color: '#102D69',
                        //             borderBottom: '2px solid rgb(109, 109, 196)',
                        //             borderRight: '2px solid rgb(109, 109, 196)',
                        //             display:'flex',
                        //             flexDirection:'column'
                        //             }}>
                        //      {
                                // rate.tariffs.map((tariff)=>{
                                    // console.log('ARRAY', ratesarray)
                                    // return(
                                    //     <>
                                    //         {
                                    //          tariff.prices.map((item,index,tariffarray)=>{
                                    //             console.log('TARIFF', tariffarray)
                                    //             return(
                                    //                 <h5 style={{
                                    //                         display:'grid',
                                    //                         gridTemplateColumns:'50% 50%',
                                    //                         marginBottom:'0',
                                    //                         paddingBottom:'0.5vw',
                                    //                         paddingTop: '0.5vw',
                                    //                         textAlign:'center'}}>
                                    //                             <AvailableOptions 
                                    //                                         item={item}
                                    //                                         rooms={search_data.rooms}
                                    //                                         // tariffarray={tariff}
                                    //                                         room_id={rate.room_id}
                                    //                                         room_name={rate.room_name}
                                    //                                         room_type_id={rate.room_type_id}
                                    //                                         room_type_name={rate.room_type_name}
                                    //                                         room_subcategory_id={rate.room_subcategory_id}
                                    //                                         room_subcategory_name={rate.room_subcategory_name}
                                    //                                         sum={tariff.sum}
                                    //                                         tariff_id={tariff.tariff_id}
                                    //                                         tariff_name={tariff.tariff_name}
                                    //                                         tariff_type_id={tariff.tariff_type_id}
                                    //                                         tariff_type_name={tariff.tariff_type_name}

                                    //                                         />
                                    //                 </h5>
                                    //             )
                                    //        })
                                    //     }
                                    //     </>
                                    // )
                                // })
                        //     }
                        // </h5>
                        
//                       </>
//                     )
//                     })
//                     )
//                 }):null 
//                } 
//             </div> 
//         </div>
//     )
// }

const AvailableOptions = (props) =>{

    const {item,rooms,room_id,room_name,room_type_id,room_type_name,room_subcategory_id,room_subcategory_name,sum,tariff_id,availability} = props;
    
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
    
    for(let i=0; empty_array.length<=availability; i++){
        empty_array.push(i)
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
                        />
        {/* </h5>  */}
        </>
    )
}
