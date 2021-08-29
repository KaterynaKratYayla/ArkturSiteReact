import React, {useState,useEffect} from 'react'
import { useSelector,useDispatch} from 'react-redux'
import { getHotelRates } from '../../../../Redux/actions'
import { HotelRateGridTitles } from '../../../Library/StaticJsonData/HotelRateGridTitles'
import {BookButtonHotel} from './BookButtonHotel'
// import {getRoomsChoice} from '../../../../Redux/actions/hotelroomschoice'
import {getAvail} from '../../../../Redux/actions/availabilitychoice'
import { OccupancyTypes } from '../../../Library/StaticJsonData/OccupancyTypes'
import {Pax} from '../../../Library/Icons/pax'

import { Select } from 'antd';

import './RatesBlockCSS.css'

export const RatesBlock = ({search_data}) =>{

    // const [picked, setPicked] = useState(false)
   
    const dispatch = useDispatch();
    const hotelratesRatesBlock = useSelector(state => state.hotelrates.hotelrates)
    const pickedHotelRooms = useSelector(state=>state.availabilitychoice.avail_rooms)

    console.log('PICKEDHOTELROOMS',pickedHotelRooms)

    for (let key in OccupancyTypes){
      console.log('KEY_TEST', key)
    }

    let empty_array = [];

  useEffect ( () => {
    dispatch (getHotelRates(search_data));
  }, [search_data])

  // const SelectedAvail = (sum,indexRoom,indexPrice) =>{
  //   let total;
  //  if([indexRoom,indexPrice].join('') === pickedHotelRooms.activeIndex){
  //     total = sum*pickedHotelRooms.availability
  //     // setPicked(true)
  //   }
  //   else total = sum*search_data.rooms
  //   return total 
  // }

  console.log('SEARCH_DATA',search_data)
  console.log('RATESBLOCK',hotelratesRatesBlock)

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
          {/* <div className = 'Details'> */}
            <ul className='GridUlDetails'>
             {
                hotelratesRatesBlock? hotelratesRatesBlock.map((hotelrate)=>{ 
                    return(
                     hotelrate.room_rates.map((item)=>{
                      return(
                       hotelrate.dates.map((item1,indexRoomType)=>{
                         if(item1.date === search_data.start){
                           return(
                              item1.rooms.map((item2)=>{
                                if(item2.room_id === item.room_id){
                                  return(
                                  <li className = 'Details'>
                                    <h5 className='RoomTypeColumn'>
                                                {item.room_name === '0'? 'Regular' : item.room_name} {item.room_type_name} {item.room_id}
                                    </h5>                       
                                    <>
                                      {
                                        item2.tariffs.map((item3)=>{
                                            return(
                                              item3.prices.map((item4,indexPrices)=>{ 
                                              empty_array.length = item4.pax
                                                return( 
                                                <>
                                                    <h5 style={{
                                                       gridColumn:'2',
                                                        borderBottom: '2px solid rgb(109, 109, 196)',
                                                        borderRight: '2px solid rgb(109, 109, 196)',
                                                        borderLeft: '2px solid rgb(109, 109, 196)',
                                                        fontSize: '17px',
                                                        color: '#102D69',
                                                        fontFamily:'Arial',
                                                        fontWeight:'bold'}}>
                                                          {
                                                             empty_array.fill(null).map((pax,index,array)=>{
                                                              index++
                                                                return(
                                                                  <Pax/>                                             
                                                                )
                                                          }
                                                            )
                                                        }
                                                    </h5>
                                            

                                                    <h5 style={{
                                                            gridColumn:'3',
                                                            borderBottom: '2px solid rgb(109, 109, 196)',
                                                            borderRight: '2px solid rgb(109, 109, 196)',
                                                            }}>
                                                              
                                                                {
                                                                    item.tariffs&&item.tariffs.map((tariff)=>{
                                                                        
                                                                      if(tariff.tariff_id === item3.tariff_id){
                                                                        return(
                                                                         <h5 style={{fontSize: '17px',
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

                                                    <h5 style={{
                                                            display:'grid',
                                                            gridColumn:'4/-1',
                                                            gridTemplateColumns:'33% 33% 33%',
                                                            marginBottom:'0',
                                                            paddingBottom:'0.5vw',
                                                            paddingTop: '0.5vw',
                                                            textAlign:'center',
                                                            borderBottom: '2px solid rgb(109, 109, 196)'}}>
                                                                <AvailableOptions 
                                                                            index={[indexRoomType,indexPrices].join('')}
                                                                            currency={hotelrate.currency} 
                                                                            contract_id={hotelrate.contract_id}
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
                                    
                                 </li>
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
              </ul> 
            </div>
          )
      }
                                         

const AvailableOptions = (props) =>{

    const {currency,index,rooms,room_id,room_name,room_type_id,room_type_name,room_subcategory_id,room_subcategory_name,sum,tariff_id,availability,contract_id} = props;
    
    console.log('PROPS', props)

    const [selectedAvailability, setSelectedAvailability] = useState(parseInt(rooms,10))

    const { Option } = Select;

    const dispatch = useDispatch();

    const SelectRooms = (value) => {
        setSelectedAvailability(value)
        // setPicked(true)
        dispatch(getAvail(value,index))
    }

    let empty_array = [];

    for (let i=1; empty_array.length<availability;i++){
      empty_array.push(i)
    }

    console.log('AVAILABILITY', selectedAvailability, empty_array)
   

    return(
    <>

      <h5 style={{
               fontSize: '17px',
               color: '#102D69',
               fontFamily:'Arial',
               fontWeight:'bold',
               display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'}}>
                  {currency} {sum*selectedAvailability}
      </h5> 

      <h5 style={{display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'}}>
       <Select 
           defaultValue={selectedAvailability}
           onChange={SelectRooms}
           bordered={true}
           size='large'> 
             <>
               {
                empty_array&&empty_array.map((item)=>{
                  return (
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
     </h5>
    
    <div style={{display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'center'}}>
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
        contract_id={contract_id}
      />
      </div>
  </>
 )
}