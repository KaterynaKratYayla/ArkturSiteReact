import React, {useState,useEffect} from 'react'
import { useSelector,useDispatch} from 'react-redux'
import { getHotelRates } from '../../../../../Redux/actions'
import { HotelRateGridTitles } from '../../../../Library/StaticJsonData/HotelRateGridTitles'
import {BookButtonHotel} from '../BookButtonHotel'
// import {getRoomsChoice} from '../../../../Redux/actions/hotelroomschoice'
// import {getAvail} from '../../../../../Redux/actions/availabilitychoice'
import { OccupancyTypes } from '../../../../Library/StaticJsonData/OccupancyTypes'
import {Pax} from '../../../../Library/Icons/pax'
import {AvailableOptions} from './AvailableOptions'

import './RatesBlockCSS.css'

export const SmallScreenRatesBlock = ({hotelratesRatesBlock,search_data}) =>{
   
    const dispatch = useDispatch();
    // const hotelratesRatesBlock = useSelector(state => state.hotelrates.hotelrates)
    const pickedHotelRooms = useSelector(state=>state.availabilitychoice.avail_rooms)

    console.log('PICKEDHOTELROOMS',pickedHotelRooms)

    for (let key in OccupancyTypes){
      console.log('KEY_TEST', key)
    }

    let empty_array = [];

  // useEffect ( () => {
  //   dispatch (getHotelRates(search_data));
  // }, [search_data])

  // console.log('SEARCH_DATA',search_data)
  // console.log('RATESBLOCK',hotelratesRatesBlock)

    return(
        <div> 
          {/* <ul className = 'RatesGridWrapper Header'>
             {
               HotelRateGridTitles&&HotelRateGridTitles.map((title)=>{
                return(
                 <li className = 'RatesGridHeader'>
                   {title}
                 </li>
                )
               })
              }
           </ul> */}
          {/* <div className = 'Details'> */}
            <ul>
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
                                  <li class = 'DetailsSmallScreen'>
                                    <h5 className='RoomTypeColumnSmallScreen'>
                                                {item.room_name === '0'? 'Regular' : item.room_name} {item.room_type_name} 
                                                {/* {item.room_id} */}
                                    </h5>                       
                                    <>
                                      {
                                        item2.tariffs.map((item3)=>{
                                            return(
                                              item3.prices.map((item4,indexPrices)=>{ 
                                              empty_array.length = item4.pax
                                                return( 
                                                <div>
                                                    <h5>
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
                                            

                                                    <h5>
                                                            
                                                                {
                                                                    item.tariffs&&item.tariffs.map((tariff)=>{
                                                                        
                                                                      if(tariff.tariff_id === item3.tariff_id){
                                                                        return(
                                                                         <h5 style={{fontSize: '17px',
                                                                             color:'blue',
                                                                             fontFamily:'Arial',
                                                                             fontWeight:'bold',
                                                                             }}>
                                                                                  {tariff.tariff_type_name}
                                                                         </h5>
                                                                        
                                                                        )
                                                                      }
                                                                    })
                                                                }
                                                                    
                                                    </h5>

                                                    <h5 class='WrapperAvailableOptionsSmallScreen'>
                                                                <AvailableOptions 
                                                                            index={[indexRoomType,indexPrices].join('')}
                                                                            currency={hotelrate.currency} 
                                                                            contract_id={hotelrate.contract_id}
                                                                            rooms={search_data.rooms}
                                                                            room_id={item.room_id}
                                                                            room_name={item.room_name}
                                                                            room_type_id={item.room_type_id}
                                                                            room_type_name={item.room_type_name}
                                                                            // room_subcategory_id={item.room_subcategory_id}
                                                                            // room_subcategory_name={item.room_subcategory_name}
                                                                            occupancy={item4.pax}
                                                                            sum={item4.sum}
                                                                            tariff_id={item3.tariff_id}
                                                                            availability={item3.availability}
                                                                            pickedCurrency={search_data.selected_currency}
                                                                            refpartner={search_data.refpartner?search_data.refpartner:null}

                                                                            />
                                                    </h5>
                                                </div>
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
                                         

