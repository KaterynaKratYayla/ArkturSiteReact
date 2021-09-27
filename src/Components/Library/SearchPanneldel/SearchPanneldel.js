import React, {useState,useEffect} from 'react'
// import './SearchPannelCSS.css';
import {GuestItem} from '../../Pages/SecondPageofSearchModule/Tours/GuestItem';
import {Switcher, SwitcherItem} from '../../Pages/FirstPageofSearchModule/SearchResizersAndSwitchers/Switcher'
import '../../Pages/FirstPageofSearchModule/SearchResizersAndSwitchers/SwitcherFront.css';
import moment from 'moment';
import Autocomplete from 'react-autocomplete'
import { useHistory } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import {getGeo, getGeneralGeo} from "../../../Redux/actions/cities"
import { DatePicker ,Space } from 'antd'

import {Hotels} from '../Icons/hotels'
import {Tours} from '../Icons/tours'

import {useWindowWidthAndHeight} from '../../Pages/Helpers/WindowResizeHook'
import '../../Pages/FirstPageofSearchModule/SearchResizersAndSwitchers/SwitcherFront.css'
// import './SearchPannelCSS.css'

export const SearchInner = ({wrapper,innerWrapper,formClass,autocompleteClass,datepickerClass,props}) => {
   
const [date, setDate] = useState('');
const [testDate, setTestDate] = useState('');
const [list , setList] = useState([]);
const [value, setValue] = useState('');
const [open, setOpen] = useState(false);
const [isOpen, setIsOpen] = useState(false);
const [align, setAlign] = useState('');  

const history = useHistory();

const dispatch = useDispatch();
const geo = useSelector(state => state.cities.locs)
const geoGeneral = useSelector(state => state.cities.gen_locs)

const [width, height] = useWindowWidthAndHeight();

// const dateFormat = 'DD-MM-YYYY'

useEffect ( () => {
   dispatch (getGeo ());
}, []);
    console.log('[GEO] : ' , geo)

    useEffect ( () => {
      dispatch (getGeneralGeo ());
   }, []);
       console.log('[general_GEO] : ' , geoGeneral)

const toggler = ( me ) => _ => {
  setAlign(me);
 }

function dateFunc (e) {      
    return setDate (e.target.value)
    }

function onChange(date, dateString) {
  setTestDate(dateString)
  console.log('[TEST_DATE] : ' , dateString)
  console.log('[DATE_PICKER] : ' , date, dateString);
    }

const optionChecker = (e) => {
   console.log('[VALUE] : ', e.target.value)
   setValue (e.target.value)
   if(value.length >= 0){
     setOpen(true)
   }
  }

  // console.log('[TODAY DATE]' , moment().format('YYYY-MM') , '[TEST_DATE] : ' , testDate)

  const addToList = () => {

 
    const filtered = geo.filter(function(item){
        return item.name === value
    })

    const filtered_city_id = geoGeneral.filter(function(item){
      if(item.tour_id === filtered[0].id){
        return item.city_id
      }
      else return item.city_id === filtered[0].id
    })
    
    console.log('FILTERED_CITY_ID', filtered_city_id )

    const newList = {
      id: filtered[0].id,
      title: value,
      date: testDate
  };

  setList([...list, newList]);
  setDate('');
  setValue('');

  let route_query = `?title=${value},date=${testDate},id=${filtered[0].id},city_id=${filtered_city_id[0].city_id}`

  console.log('[NewList] : ' , newList)

  history.push(`/search_results/${route_query}` , [...list, newList])
  console.log('[HISTORY : ] ', history)
}

const onSubmit = (e) =>{
  e.preventDefault();
}
 
return(
      <div style={{width: `${width*0,7}`,
                  marginLeft:'auto',
                  marginRight:'auto',
                  textAlign:'center',
                  }}>

                  <Switcher className='SwitcherSearchPannel' name={'align'} changeHandler={toggler} active={align}>.
                      <SwitcherItem value='HOTELS'><Hotels/> Hotels</SwitcherItem>
                      <SwitcherItem value='TOURS'><Tours/> Tours</SwitcherItem>
                 </Switcher> 
          <div class={wrapper}>
           <div class={innerWrapper}>
             <form className={formClass} onSubmit={onSubmit}>
                 {/* <input class='textInput_inner' type='text' value={inputSelect} onChange={changeHandler} placeholder={'Country or City'}/> */}
                            
              
               <div>
                     <Autocomplete
                 {...props}
                 menuStyle={{
                              fontFamily: 'Tahoma',
                               fontSize: '16px',
                               background: '#d9e6f1',
                               borderRadius: '5px',
                               border: '2px solid #BCD7EE',
                               color: 'darkslategrey',
                              //  marginTop: '0.2vw',
                               marginLeft: '-0.5vw',
                               position: 'fixed', ///
                               display: 'block',
                               zIndex: '100',
                               overflow: 'auto' ///
                             }
                            }
                  inputProps={{style: 
                                  { width: `${width*0.8}px`,
                                    height: '37px', 
                                    fontFamily: 'Tahoma', 
                                    fontSize: '16px',
                                    border: '1px solid lightgrey',
                                    marginTop: '1vh',
                                    marginLeft: '4.4vw',
                                    marginBottom: '1vh'
                                  }, 
                                    
                                placeholder: 
                                    'Country, city or tour name' }}
                  items={geo}
                  shouldItemRender={(item, value) => 
                    value!== ""? item.name.toLowerCase().includes(value.toLowerCase()): null}
                    
                  getItemValue={item => item.name}
                  open={open}
                  onMenuVisibilityChange={isOpen =>setOpen(false)}
                  renderItem={(item, highlighted) =>
                    <div
                        key={item.id}
                        style={{ backgroundColor: highlighted ? 'lightblue' : 'transparent'}}
                         >
                        {item.name}
                    </div>
                      }
                  value={value}
                  onChange={optionChecker}
                  onSelect={value => setValue(value) + setOpen(false)}
                  />
               </div>              

           <div>

           {/* <DatePicker /> */}

           <Space direction="vertical">
               <DatePicker size={'large'} 
                           onChange={onChange} 
                           picker="month" 
                          //  format={dateFormat} 
                           placeholder='Choose month'
                           bordered={true}
                           className={datepickerClass}
                           style={{width:`${width*0.8}px`}}
                          //  dropdownClassName='dropdownDatePicker'
                          // style={{fontFamily:'Tahoma', 
                          //           paddingTop: '0.8vw',
                          //           marginLeft: '0.5vw',
                          //            width: 
                          //            }}
                                    />
          </Space>
        </div>

          <div  class='borderInnerWrapper2_inner'>
            <button type='submit' onClick={addToList}>SEARCH</button>
          </div>
     </form> 
 
    </div>
    </div>
      
      
      <>       
      {list.length > 0 && (
       <GuestItem 
            title={value}
            list={list}
          />	
     )
   }
</>
        
       </div>
      )
    }

      
