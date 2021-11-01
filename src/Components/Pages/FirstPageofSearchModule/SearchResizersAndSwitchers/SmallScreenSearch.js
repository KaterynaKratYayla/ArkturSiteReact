import React, {useState,useEffect} from 'react'
import {useIntl, FormattedMessage} from 'react-intl';
import {GuestItem} from '../../SecondPageofSearchModule/Tours/GuestItem'
import {HotelItems} from '../../SecondPageofSearchModule/Hotels/HotelItems'
import {Switcher, SwitcherItem} from './Switcher'
import {HotelsAutocompleteSmallScreen} from '../HotelsAutocompleteBlock/HotelsAutocompleteSmallScreen'
import {ToursAutocompleteSmallScreen} from '../ToursAutocompleteBlock/ToursAutocompleteSmallScreen'

import {Hotels} from '../../../Library/Icons/hotels'
import {Tours} from '../../../Library/Icons/tours'

import {useWindowWidthAndHeight} from '../../Helpers/WindowResizeHook'
import './SwitcherFront.css'
import './SmallScreenSearchCSS.css'

export const SmallScreenSearch = ({wrapper,innerWrapper,formClass,autocompleteClass,datepickerClass,props}) => {
   
  const [generalValue, setGeneralValue] = useState('');
  const [align, setAlign] = useState('HOTELS'); 
  const [generalList, setGeneralList] = useState([])
  const {locale,messages} = useIntl();

  const [width, height] = useWindowWidthAndHeight();

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
    <div style={{width:`${width*0.9}px`,marginRight:'auto',marginLeft:'auto'}}>
      <div class='SwitcherSearchPannel'>
        <Switcher name={'align'} changeHandler={toggler} active={align} switcherWidth={`${width*0.9}px`}>
          {/* <SwitcherItem value='HOTELS'><Hotels/> Hotels</SwitcherItem>
          <SwitcherItem value='TOURS'><Tours/> Tours</SwitcherItem> */}
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
           <ToursAutocompleteSmallScreen 
              formClass={formClass}
              onSubmit={onSubmit}
              datepickerClass={datepickerClass}
              wrapper={wrapper}
              innerWrapper={innerWrapper}
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
            <HotelsAutocompleteSmallScreen
              formClass={formClass}
              wrapper={wrapper}
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

      
