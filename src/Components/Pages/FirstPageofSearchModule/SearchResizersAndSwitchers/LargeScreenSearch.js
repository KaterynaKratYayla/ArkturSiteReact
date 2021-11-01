import React, {useState,useEffect} from 'react'
// import { useHistory } from "react-router-dom";
// import {useDispatch, useSelector} from 'react-redux';
import moment from 'moment';
import {useIntl, FormattedMessage} from 'react-intl';

import {ToursAutocomplete} from '../ToursAutocompleteBlock/ToursAutocomplete'
import {HotelsAutocomplete} from '../HotelsAutocompleteBlock/HotelsAutocomplete'
import {GuestItem} from '../../SecondPageofSearchModule/Tours/GuestItem';
import {HotelItems} from '../../SecondPageofSearchModule/Hotels/HotelItems';
import {Switcher, SwitcherItem} from './Switcher'
// import {getGeo, getGeneralGeo} from "../../../Redux/actions/cities"
// import {getTopTours} from "../../../Redux/actions/toptours"
import {useWindowWidthAndHeight} from '../../Helpers/WindowResizeHook'
import {Hotels} from '../../../Library/Icons/hotels'
import {Tours} from '../../../Library/Icons/tours'

import './Search.css';
import './SwitcherFront.css';
import 'antd/dist/antd.css';

moment.locale('uk')

export const LargeScreenSearch = ({wrapper,innerWrapper,formClass,autocompleteClass,datepickerClass,props}) => {

  const {locale,messages} = useIntl();
  // const [list , setList] = useState([]);
  const [generalValue, setGeneralValue] = useState('');
  const [align, setAlign] = useState('HOTELS'); 
  const [generalList, setGeneralList] = useState([])

  const [width, height] = useWindowWidthAndHeight();
  console.log('WIDTH',width)

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
    <div class='largeScreenSearch'>
      <div>
        <Switcher name={'align'} changeHandler={toggler} active={align} switcherWidth={`${width*0.2}px`}>

          <SwitcherItem value='HOTELS'><Hotels/><h4> 
            {
              messages&&messages.map((item)=>{
               if(item.sitepage_region_id === 5&&item.sitepage_type_id === 34){
                  return (
                    <FormattedMessage id={item.title.map((item1)=>item1.text)}/>
                    )
                   }
                })
             }
             </h4>
            </SwitcherItem>
          <SwitcherItem value='TOURS'><Tours/><h4>
            {
              messages&&messages.map((item)=>{
               if(item.sitepage_region_id === 5&&item.sitepage_type_id === 35){
                  return (
                    <FormattedMessage id={item.title.map((item1)=>item1.text)}/>
                    )
                   }
                })
             }
             </h4>
            </SwitcherItem>
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


    