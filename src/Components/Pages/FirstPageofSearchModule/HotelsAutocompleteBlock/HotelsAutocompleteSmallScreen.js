import React, {useState,useEffect} from 'react'
import { useHistory } from "react-router-dom";
import {useDispatch, useSelector,useStore} from 'react-redux';
import moment from 'moment';
import Autocomplete from 'react-autocomplete';
import { DatePicker ,Space } from 'antd';
import {HotelsPaxChoice} from './HotelsPaxChoice'
import {useWindowWidthAndHeight} from '../../Helpers/WindowResizeHook'
import {useIntl,FormattedMessage} from 'react-intl'
import {PlaceHolderStrings} from '../../../Library/Localization/placeholders'

import {getHotels, getGeneralHotels} from "../../../../Redux/actions/hotels"
import {getPax} from "../../../../Redux/actions/paxchoice"

import '../SearchResizersAndSwitchers/Search.css';
import '../SearchResizersAndSwitchers/SwitcherFront.css';
import 'antd/dist/antd.css';

moment.locale('uk')

export const HotelsAutocompleteSmallScreen = ({wrapper,formClass,datepickerClass,onSubmit,props,GeneralListFunction}) =>{
     
  const {locale,messages} = useIntl();
  
      const [stayDates, setStayDates] = useState([]);
      const [list , setList] = useState([]);
      const [hotelsvalue, setHotelsValue] = useState('');
      const [open, setOpen] = useState(false);
      const [paxListOpen, setPaxListOpen] = useState(false);
      const [totalPax, setTotalPax] = useState();
      const [pickedHotelValue, setPickedHotelValue] = useState(false);
      const [loaded,setLoaded]=useState(false);
     
      const history = useHistory();

      const [width, height] = useWindowWidthAndHeight();

      const dispatch = useDispatch();
      // const store = useStore();
      const smart_hotels = useSelector(state => state.hotels.hotels)
      const general_smart_hotels = useSelector(state => state.hotels.general_hotels)
      const totalPaxRedux = useSelector(state => state.paxchoice.pax)   

      let filledArray = new Array(10).fill(null).map(()=> ({'hello':'goodbye'}))
      console.log(filledArray)

      const placeholder = PlaceHolderStrings();
      console.log('TOTALPAX', totalPaxRedux)

      const {RangePicker} = DatePicker; 
    
      useEffect ( () => {
         dispatch (getHotels ());
      }, []);
          console.log('[SMART_HOTELS] : ' , smart_hotels)
    
      useEffect ( () => {
         dispatch (getGeneralHotels ());
      }, []);
         console.log('[SMART_GENERAL_HOTELS] : ' , general_smart_hotels)
    
     
      function onChange(dates, dateStrings) {
        setStayDates(dateStrings)
        console.log('From: ', dates[0], ', to: ', dates[1]);
        console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
          }
    
      const optionChecker = (e) => {
         console.log('[VALUE] : ', e.target.value)
    
        setHotelsValue (e.target.value)
          if(hotelsvalue.length >= 0){
            setOpen(true)
          }
        }
    
        const disabledDate = (current) =>{
          // Can not select days before today 
          return current < moment().subtract(1,'days').endOf('day');
          // return current < moment().endOf('day');
        }

      const addToList = () => {

       if (pickedHotelValue === false){
          alert ("Please choose your hotel")
        }
       else {
    
        const filteredHotels = smart_hotels.filter(function(item){
            return item.name === hotelsvalue
        })
    
        const filtered_hotelcity_id = general_smart_hotels.filter(function(item){
          if(item.hotel_id === filteredHotels[0].id){
            return item.city_id
          }
          else return item.city_id === filteredHotels[0].id
        })
        
        console.log('FILTERED_HOTEL_ID', filtered_hotelcity_id )
    
        const hotelNewList = {
          id: filteredHotels[0].id,
          title: hotelsvalue,
          date: stayDates
      };
    
      setList([...list, hotelNewList]);
      setStayDates('');
      setHotelsValue('');
    
      let route_query = `?title=${hotelsvalue},start=${stayDates[0]},end=${stayDates[1]},id=${filteredHotels[0].id},city_id=${filtered_hotelcity_id[0].city_id},adults=${totalPaxRedux.adults},children=${totalPaxRedux.children},rooms=${totalPaxRedux.rooms}`
    
      console.log('[hotelNewList] : ' , list, hotelsvalue)
    
      history.push(`/${locale}/search_results_hotels/${route_query}` , [...list, hotelNewList])
      console.log('[HISTORY : ] ', history)
    
      GeneralListFunction(list,hotelsvalue)
     }
    }
        
    const MakeVisible = () =>{
      setPaxListOpen(!paxListOpen)
    }

      return(
            <div class={wrapper}>
              <form className={formClass} onSubmit={onSubmit}> 
                    {/* <div style={{width:'25%'}}> */}
                     
                       <Autocomplete
                         {...props}
                         
                           value={hotelsvalue} 
    
                           inputProps={{
                             style: 
                            { width: `${width*0.8}px`,
                              marginRight:'auto',
                              marginLeft:'auto',
                              height: '45px', 
                              fontFamily: 'Tahoma', 
                              fontSize: '16px',
                              borderTop: 'none',
                              borderBottom: '0.5px solid grey',
                              borderLeft: 'none',
                              borderRight:'none',
                              marginTop: '0.2vw',
                              textAlign:'center',
                              position:'relative'                                                          
                                                          
                            }, 
                              
                            placeholder: placeholder.placeHolderString ,
                        
                          }}
                           menuStyle={{
                                  width: `${width*0.8}px`,
                                  marginRight:'auto',
                                  marginLeft:'auto',
                                    fontFamily: 'Arial Narrow',
                                    fontWeight:'bold',
                                    fontSize: '18px',
                                    color: 'darkslategrey',
                                    borderRadius: '3px',
                                    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
                                    background: 'rgba(255, 255, 255)',
                                    padding: '3px',
                                    position:'absolute',
                                    overflow:'scroll',
                                    maxHeight: '30vh',
                                    zIndex:'2000',
                                    border:'2px solid grey',
                                    left:'10',
                                    top:'5'
                                   }
                                  }
                          
                        items={smart_hotels}
                       
                        getItemValue={item => item.name}
                        
                        onChange={optionChecker}
                        
                        onSelect={value => setHotelsValue(value) 
                          + setOpen(false) + setPickedHotelValue(true)
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
              {/* </div>   */}
               
            {/* <div style={{width:'25%'}}> */}
                 
                 <Space direction="vertical">
                    <RangePicker
                        size={'middle'}
                        disabledDate={disabledDate}
                        ranges={{
                        Today: [moment(), moment()],
                            'This Month': [moment().startOf('month'), moment().endOf('month')],
                                }}
                        onChange={onChange}
                        bordered={false}
                        className={datepickerClass}
                        placeholder={[placeholder.placeHolderStartDate,placeholder.placeHolderEndDate]}
                    />
                </Space>
              
            {/* </div>  */}

               {/* <div style={{width:'25%'}}> */}
               <div style={{borderTop: '0.5px solid grey',borderBottom:'0.5px solid grey'}}>
                  <HotelsPaxChoice 
                     MakeVisible={MakeVisible}
                     paxListOpen={paxListOpen}
                  />
                </div>
                {/* </div> */}
                <div class='borderInnerWrapper2' style={{
                                                          marginTop:'2vh'}}>
                
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
