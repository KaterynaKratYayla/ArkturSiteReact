import React, {useState,useEffect} from 'react'
import { useSelector,useDispatch} from 'react-redux'
import { getHotelRates } from '../../../../../Redux/actions'
import { HotelRateGridTitles } from '../../../../Library/StaticJsonData/HotelRateGridTitles'
import {BookButtonHotel} from '../BookButtonHotel'
import {LargeScreenRatesBlock } from './LargeScreenRatesBlock'
import {SmallScreenRatesBlock } from './SmallScreenRatesBlock'
// import {getRoomsChoice} from '../../../../Redux/actions/hotelroomschoice'
// import {getAvail} from '../../../../../Redux/actions/availabilitychoice'
import { OccupancyTypes } from '../../../../Library/StaticJsonData/OccupancyTypes'
import {Pax} from '../../../../Library/Icons/pax'
import {AvailableOptions} from './AvailableOptions'
import {useWindowWidthAndHeight} from '../../../Helpers/WindowResizeHook'

import './RatesBlockCSS.css'

export const RatesBlock = ({search_data}) =>{
   
    const dispatch = useDispatch();
    const hotelratesRatesBlock = useSelector(state => state.hotelrates.hotelrates)
    // const pickedHotelRooms = useSelector(state=>state.availabilitychoice.avail_rooms)

    // console.log('PICKEDHOTELROOMS',pickedHotelRooms)

    // for (let key in OccupancyTypes){
    //   console.log('KEY_TEST', key)
    // }

    // let empty_array = [];
    const [width, height] = useWindowWidthAndHeight();

  useEffect ( () => {
    dispatch (getHotelRates(search_data));
  }, [search_data])


    return(
        <div> 
          {width > 1000?
          <LargeScreenRatesBlock 
              hotelratesRatesBlock={hotelratesRatesBlock}
              search_data={search_data}
          /> :
          <SmallScreenRatesBlock
              hotelratesRatesBlock={hotelratesRatesBlock}
              search_data={search_data}/>
          }

            </div>
          )
      }
                                         

