import React, {useState,useEffect} from 'react'
// import { useHistory } from "react-router-dom";
// import {useDispatch, useSelector} from 'react-redux';
import moment from 'moment';

import {ToursAutocomplete} from './ToursAutocomplete'
import {HotelsAutocomplete} from './HotelsAutocomplete'
import {GuestItem} from '../SecondPageofSearchModule/Tours/GuestItem';
import {HotelItems} from '../SecondPageofSearchModule/Hotels/HotelItems';
import {Switcher, SwitcherItem} from './Switcher'
// import {getGeo, getGeneralGeo} from "../../../Redux/actions/cities"
// import {getTopTours} from "../../../Redux/actions/toptours"
// import {useWindowWidthAndHeight} from '../Helpers/WindowResizeHook'
import {Hotels} from '../../Library/Icons/hotels'
import {Tours} from '../../Library/Icons/tours'

import './Search.css';
import './SwitcherFront.css';
import 'antd/dist/antd.css';

moment.locale('uk')

export const LargeScreenSearch = ({wrapper,innerWrapper,formClass,autocompleteClass,datepickerClass,props}) => {

  // const [list , setList] = useState([]);
  const [generalValue, setGeneralValue] = useState('');
  const [align, setAlign] = useState('TOURS'); 
  const [generalList, setGeneralList] = useState([])

  // const [width, height] = useWindowWidthAndHeight();

  const GeneralListFunction = (mylist,myvalue) =>{
    setGeneralList(mylist)
    setGeneralValue(myvalue)
  }

  const toggler = ( me ) => _ => {
    setAlign(me);
   }

  const onSubmit = (e) =>{
    e.preventDefault();
}
  return(
    <div>
      <div class='switcher'>
        <Switcher name={'align'} changeHandler={toggler} active={align}>
          <SwitcherItem value='TOURS'><Tours/> Tours</SwitcherItem>
          <SwitcherItem value='HOTELS'><Hotels/> Hotels</SwitcherItem>
        </Switcher>  
      </div>

     <>
       {align === "TOURS"?
         <>
           <ToursAutocomplete 
              formClass={formClass}
              onSubmit={onSubmit}
              datepickerClass={datepickerClass}
              GeneralListFunction={GeneralListFunction}/>
             
            <>  
              {
                generalList.length > 0 && (
                   <GuestItem 
                      title={generalValue}
                      list={generalList}
                   />	
                )
              }
            </>
          </>
              :
              (
          <>
            <HotelsAutocomplete
              formClass={formClass}
              onSubmit={onSubmit}
              datepickerClass={datepickerClass}
              GeneralListFunction={GeneralListFunction}/>
               
            <>       
              {generalList.length > 0 && (
               <HotelItems 
                    title={generalValue}
                    list={generalList}
                  />	
               )
              }
            </>
          </>
              )
        }
      </>
    </div>
  )
}


    