import React, {useState,useEffect} from 'react'
import { useHistory } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import moment from 'moment';
import Autocomplete from 'react-autocomplete';
import { DatePicker ,Space } from 'antd';
import {Container, Row, Col} from 'react-bootstrap'
import {useIntl,FormattedMessage} from 'react-intl'

import {GuestItem} from '../../SecondPageofSearchModule/Tours/GuestItem';
import {Switcher, SwitcherItem} from '../SearchResizersAndSwitchers/Switcher'
import {getGeo, getGeneralGeo} from "../../../../Redux/actions/cities"
import {getTopTours} from "../../../../Redux/actions/toptours"
import {useWindowWidthAndHeight} from '../../Helpers/WindowResizeHook'
import {Hotels} from '../../../Library/Icons/hotels'
import {Tours} from '../../../Library/Icons/tours'
import {PlaceHolderStrings} from '../../../Library/Localization/placeholders'

import '../SearchResizersAndSwitchers/Search.css';
import '../SearchResizersAndSwitchers/SwitcherFront.css';
import 'antd/dist/antd.css';

moment.locale('uk')

export const ToursAutocomplete = ({formClass,datepickerClass,onSubmit,props,GeneralListFunction}) => {
      // console.log('[PROPS] : ', props)
      const {locale,messages} = useIntl();

//   const [date, setDate] = useState('');
  const [testDate, setTestDate] = useState('');
  const [list , setList] = useState([]);
  const [value, setValue] = useState('');
  const [open, setOpen] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);
//   const [align, setAlign] = useState('TOURS');  
//   const [myID, setmyID] = useState('');
//   const [loading,setLoading]=useState(false)
const [pickedToursValue, setPickedToursValue] = useState(false);

const pickedcurrency = useSelector(state=>state.currency.pickedcurrency)
 
  const history = useHistory();

  const dispatch = useDispatch();
  const geo = useSelector(state => state.cities.locs)
  const geoGeneral = useSelector(state => state.cities.gen_locs)
//   const topTours = useSelector(state => state.toptours.toptours)

//   const [width, height] = useWindowWidthAndHeight();

  // const dateFormat = 'DD-MM-YYYY'
  const placeholder = PlaceHolderStrings();

  useEffect ( () => {
     dispatch (getGeo ());
  }, []);
      console.log('[GEO] : ' , geo)

  useEffect ( () => {
     dispatch (getGeneralGeo ());
  }, []);
     console.log('[general_GEO] : ' , geoGeneral)

//   useEffect ( () => {
//     dispatch (getTopTours ());
//   }, []);
//     console.log('[GetTopTours] : ' , topTours)

//   const toggler = ( me ) => _ => {
//     setAlign(me);
//    }

//   function dateFunc (e) {      
//       return setDate (e.target.value)
//       }

  function onChange(date, dateString) {
    setTestDate(dateString)
    console.log('[TEST_DATE] : ' , dateString)
    console.log('[DATE_PICKER] : ' , date, dateString);
      }

  const optionChecker = (e) => {
     console.log('[VALUE] : ', e.target.value)
    //  console.log('[ETARGET]',e.target)

    setValue (e.target.value)
      if(value.length >= 0){
        setOpen(true)
      }
      // else if (value === ''){
        // setOpen(false) 
      // }
    }

  const addToList = () => {
    if (pickedToursValue === false){
      alert ("Please choose your destination")
    }
   else {

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
//   setDate('');
  setValue('');

  let route_query = `?selected_currency=${pickedcurrency},title=${value},date=${testDate},id=${filtered[0].id},city_id=${filtered_city_id[0].city_id}`

  console.log('[NewList] : ' , newList)

  history.push(`/${locale}/search_results_tours/${route_query}` , [...list, newList])
  console.log('[HISTORY : ] ', history)

  GeneralListFunction(list,value)
 }
}

///not to pick up old date. This dunction is for DatePicker

const disabledDate = (current) =>{
  // Can not select days before today 
  return current && current < moment().endOf('day');
}

//   const onSubmit = (e) =>{
    // console.log('[event]:', e, '[e.target]:', e.target, '[e.target.value] :', e.target.value) 
    // e.preventDefault();
// }
   
  return(
        <div>
            <form className={formClass} onSubmit={onSubmit}> 
                <div>
                 
                   <Autocomplete
                     {...props}
                     
                       value={value} 

                       inputProps={{
                         style: 
                        { width: '30vw',
                          height: '45px', 
                          fontFamily: 'Tahoma', 
                          fontSize: '16px',
                          borderTop: 'none',
                          borderBottom: 'none',
                          borderLeft: 'none',
                          marginTop: '0.2vw',
                          marginLeft: '2vw',
                          
                        }, 
                          
                      placeholder: placeholder.placeHolderTour,
                    
                      }}
                       menuStyle={{
                                fontFamily: 'Arial Narrow',
                                fontWeight:'bold',
                                fontSize: '18px',
                                color: 'darkslategrey',
                                borderRadius: '3px',
                                boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
                                background: 'rgba(255, 255, 255)',
                                padding: '3px',
                                position: 'fixed',
                                overflow: 'auto',
                                maxHeight: '30%',
                                zIndex:'1000',
                                border:'2px solid grey'
                               }
                              }
                      
                    items={geo}
                    
                    getItemValue={item => item.name}
                    
                    onChange={optionChecker}
                    
                    onSelect={value => setValue(value) 
                      + setOpen(false) + setPickedToursValue(true)
                    }

                    renderItem={(item, highlighted) =>
                      <div
                          key={item.id}
                          style={{ backgroundColor: highlighted ? 'lightblue' : 'transparent'}}
                           >
                          {item.name}
                      </div>
                        }


                    shouldItemRender={(item, value) => 
                      value!== ""? item.name.toLowerCase().includes(value.toLowerCase()): null}

                    open={open}
                    onMenuVisibilityChange={isOpen =>setOpen(false)}
                    
                    />
        </div>  
                 {/* </Col>             */}
              
              {/* <Col md={1}> */}
        <div class='MonthPicker'>

             {/* <DatePicker /> */}
             
             <Space direction="vertical">
                 <DatePicker size='small' 
                             onChange={onChange} 
                             picker="month" 
                            //  format={dateFormat} 
                             placeholder={placeholder.placeHolderMonth}
                             bordered={false}
                             className={datepickerClass}
                             disabledDate={disabledDate}
                               />
               </Space>
          
        </div> 
            <div class='borderInnerWrapper2'>
                <button type='submit' onClick={addToList}>
                {
                        messages&&messages.map((item)=>{
                          if(item.sitepage_region_id === 7&&item.sitepage_type_id === 13){
                            return (
                               <FormattedMessage id={item.title.map((item1)=>item1.text)}/>
                            )
                          }
                        })
                      }
                </button>
            </div>

          </form> 
       </div>
      )
    }


    