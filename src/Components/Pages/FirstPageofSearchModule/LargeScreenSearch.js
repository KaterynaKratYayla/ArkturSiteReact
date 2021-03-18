import React, {useState,useEffect} from 'react'
import { useHistory } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import moment from 'moment';
import Autocomplete from 'react-autocomplete';
import { DatePicker ,Space } from 'antd';
import {Container, Row, Col} from 'react-bootstrap'

import {GuestItem} from '../SecondPageofSearchModule/GuestItem';
import {Switcher, SwitcherItem} from './Switcher'
import {getGeo, getGeneralGeo} from "../../../Redux/actions/cities"
import {getTopTours} from "../../../Redux/actions/toptours"
import {useWindowWidthAndHeight} from '../Helpers/WindowResizeHook'
import {Hotels} from '../../Library/Icons/hotels'
import {Tours} from '../../Library/Icons/tours'

import './Search.css';
import './SwitcherFront.css';
import 'antd/dist/antd.css';

moment.locale('uk')

export const LargeScreenSearch = ({wrapper,innerWrapper,formClass,autocompleteClass,datepickerClass,props}) => {
      // console.log('[PROPS] : ', props)


  const [date, setDate] = useState('');
  const [testDate, setTestDate] = useState('');
  const [list , setList] = useState([]);
  const [value, setValue] = useState('');
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [align, setAlign] = useState('');  
  const [myID, setmyID] = useState('');
  const [loading,setLoading]=useState(false)
 
  const history = useHistory();

  const dispatch = useDispatch();
  const geo = useSelector(state => state.cities.locs)
  const geoGeneral = useSelector(state => state.cities.gen_locs)
  const topTours = useSelector(state => state.toptours.toptours)

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

  useEffect ( () => {
    dispatch (getTopTours ());
  }, []);
    console.log('[GetTopTours] : ' , topTours)

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
    //  console.log('[ETARGET]',e.target)

    setValue (e.target.value)
      if(value.length >= 0){
        setOpen(true)
      }
      // else if (value === ''){
        // setOpen(false) 
      // }
    }

    
    // function renderItems(items) {
    //   return items.map((item, index) => {
    //     const text = item.props.children
    //     if (index === 0 || items[index - 1].props.children.charAt(0) !== text.charAt(0)) {
    //       return [<div className="item item-header">{text.charAt(0)}</div>, item]
    //     }
    //     else {
    //       return item
    //     }
    //   })
    // }

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
    // console.log('[event]:', e, '[e.target]:', e.target, '[e.target.value] :', e.target.value) 
    e.preventDefault();
}
   
  return(
        <div>
        <div class='switcher'>
             <Switcher name={'align'} changeHandler={toggler} active={align}>
                  <SwitcherItem value='HOTELS'><Hotels/> Hotels</SwitcherItem>
                  <SwitcherItem value='TOURS'><Tours/> Tours</SwitcherItem>
              </Switcher>  
         </div>
         {/* <Container> */}
         {/* <div class={wrapper}> */}
           {/* <div class={innerWrapper}> */}
            <form className={formClass} onSubmit={onSubmit}> 
           
              {/* <Row lg={3}> */}
                {/* <Col md={1}> */}
                 {/* <div class={autocompleteClass}> */}
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
                          
                      placeholder: 
                          'Please input country, city or tour name' ,
                    
                      }}
                      // wrapperStyle={{
                      //    position:'relative',
                      //    display:'inline-block'}}
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
                      + setOpen(false)
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
        <div>

             {/* <DatePicker /> */}
             
             <Space direction="vertical">
                 <DatePicker size={'large'} 
                             onChange={onChange} 
                             picker="month" 
                            //  format={dateFormat} 
                             placeholder='Choose month'
                             bordered={false}
                             className={datepickerClass}
                            //  dropdownClassName='dropdownDatePicker'
                            //  style={{
                            //    fontFamily:'Tahoma', 
                            //    paddingTop: '0.8vw'}}
                               />
               </Space>
          
        </div> 
             {/* </Col>      */}
             {/* <Col md={1}>     */}
        <div class='borderInnerWrapper2'>
             <button type='submit' onClick={addToList}>SEARCH</button>
        </div>
          {/* </Col> */}
        {/* </Row> */}
       </form> 
      {/* </div> */}
     {/* </div> */}
    {/* // </Container> */}
      
        
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


    