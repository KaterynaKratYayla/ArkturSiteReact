import React, {useState,useEffect} from 'react'
import { useHistory } from "react-router-dom";
import {useDispatch, useSelector,useStore} from 'react-redux';
import moment from 'moment';
import Autocomplete from 'react-autocomplete';
import { DatePicker ,Space } from 'antd';
import {HotelsPaxChoice} from './HotelsPaxChoice'
import {useWindowWidthAndHeight} from '../../Helpers/WindowResizeHook'
import {useIntl,FormattedMessage} from 'react-intl';
import {LocalizationRoute} from '../../../Library/Localization/LocalizationRoute'
import {LocalizationSwitch} from '../../../Library/Localization/LocalizationSwitch'
import {LocalizationNavLink} from '../../../Library/Localization/LocalizationNavLink'
import {getPages} from '../../../../Redux/actions/pages'
import {changeLang} from '../../../../Redux/actions/locale'
import {PromoCode} from './PromoCode'
import createHistory from 'history/createBrowserHistory';

import {getHotels, getGeneralHotels} from "../../../../Redux/actions/hotels"
import {getPax} from "../../../../Redux/actions/paxchoice"
import {PlaceHolderStrings} from '../../../Library/Localization/placeholders'
import {getCurrency,getPickedCurrencyResponse} from '../../../../Redux/actions/currency'
import {lettersOnlyString} from '../../Helpers/regex'
import {ClearInput} from '../../../Library/PageDevices/ClearInput'

import '../SearchResizersAndSwitchers/Search.css';
import '../SearchResizersAndSwitchers/SwitcherFront.css';

import 'antd/dist/antd.css';
import { ContentPages } from '../../PageComponents/ContentPages';

moment.locale('uk')


export const HotelsAutocomplete = ({formClass,datepickerClass,onSubmit,props,GeneralListFunction,searchProps}) =>{
     
  const {locale,messages} = useIntl();

  // console.log('REGEX',lettersOnlyString(searchProps.title))

      const [stayDates, setStayDates] = useState(searchProps?[searchProps.start,searchProps.end]:[]);
      const [pickedStartDate, setPickedStartDate] = useState(searchProps?true:false)
      const [pickedEndDate, setPickedEndDate] = useState(searchProps?true:false)
      const [list , setList] = useState([]);
      const [hotelsvalue, setHotelsValue] = useState(searchProps?searchProps.title:'');
      const [open, setOpen] = useState(false);
      const [paxListOpen, setPaxListOpen] = useState(false);
      const [promoCodeOpen, setPromoCodeOpen] = useState(false);
      const [crossVisible, setCrossVisible] = useState(false);
      const [totalPax, setTotalPax] = useState();
      const [pickedHotelValue, setPickedHotelValue] = useState(searchProps?true:false);
      const [loaded,setLoaded]=useState(false);
      const [pagesFromLC, setPagesFromLC] = useState(localStorage.getItem('page_titles') ? JSON.parse(localStorage.getItem('pages_titles')) : []);    
      
      const history = useHistory();

      const pickedcurrency = useSelector(state=>state.currency.pickedcurrency)

      // console.log('AAA',history)
      const [width, height] = useWindowWidthAndHeight();
    
      const dispatch = useDispatch();
      // const store = useStore();
      const smart_hotels = useSelector(state => state.hotels.hotels)
      const general_smart_hotels = useSelector(state => state.hotels.general_hotels)
      const totalPaxRedux = useSelector(state => state.paxchoice.pax)
      const lang = useSelector(state=>state.locale.locale)
      const pages = useSelector(state => state.pages.pages)
      const promoCode = useSelector(state => state.promocode.promocode)

      // console.log('PLACEHOLDER', placeHolderString)
      console.log('TOTALPAXREDUX',totalPaxRedux)

      const browserhistory = createHistory();

      useEffect ( () => {
        dispatch (changeLang ());
        }, [])
    
      // const pages = ContentPages(lang);
      useEffect ( () => {
       dispatch (getPages (lang));
     },[lang]);  

      let filledArray = new Array(10).fill(null).map(()=> ({'hello':'goodbye'}))
      console.log(filledArray)

      const placeholder = PlaceHolderStrings();

      // console.log('PLACEHOLDER',placeholder)

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
        // setPickedStayDates(true)
        console.log('[DATES :]', 'From: ', dates[0], ', to: ', dates[1]);
        console.log('[STAYDATES :]','From: ', dateStrings[0], ', to: ', dateStrings[1]);
        setPickedStartDate(true)
        setPickedEndDate(true)
          }
    
      const optionChecker = (e) => {
         console.log('[VALUE] : ', e.target.value)
    
        setHotelsValue (e.target.value)
          if(hotelsvalue.length >= 0){
            setOpen(true)
          }
        }

        const dateFormat = 'YYYY-MM-DD';
    
        ////FOR DATEPICKER (RANGEDATEPICKER) TO DISABLE CHOICE OF DATES THAT ARE BEFORE TODAY
        
      const disabledDate = (current) =>{
          // Can not select days before today 
          // return current < moment().endOf('day');
          // console.log('CURRENT',current)
          return current < moment().subtract(1,'days')
        }

        // const CryptoJS = require("crypto-js"); 
        // const key = 'kate'

        // // console.log('AES',process.env.REACT_APP_PRIVATE_KEY)

        // if (promoCode){
        //   const encodedRef = CryptoJS.AES.encrypt(('refpartner='+promoCode+','), key /*process.env.REACT_APP_PRIVATE_KEY*/); 
        //   localStorage.setItem('encodedRef', encodedRef); 
        //   console.log('encodedRef',encodedRef) 
        // }

      const addToList = () => {

      // if(searchProps){
      //   history.go(0)
      // }

      if (pickedHotelValue === false || hotelsvalue === ''){
          alert ("Please choose your hotel")
        }
      else if (pickedStartDate === false && pickedEndDate === false){
        alert("Please pick up your dates of stay")
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
      // setStayDates('');
      // setHotelsValue('');
    
      console.log('[hotelNewList] : ' , list, hotelsvalue)

      GeneralListFunction(list,hotelsvalue)

      // console.log('PROMOCODE_LC',window.localStorage.getItem('promocode'))

      //  let route_query = `?${localStorage.getItem('promocode')?'refpartner='+localStorage.getItem('promocode')+',':''}selected_currency=${pickedcurrency},title=${hotelsvalue},start=${stayDates[0]},end=${stayDates[1]},id=${filteredHotels[0].id},city_id=${filtered_hotelcity_id[0].city_id},adults=${totalPaxRedux.adults},children=${totalPaxRedux.children},rooms=${totalPaxRedux.rooms}`
       let route_query = `?${promoCode?'refpartner='+promoCode+',':''}selected_currency=${pickedcurrency},title=${hotelsvalue},start=${stayDates[0]},end=${stayDates[1]},id=${filteredHotels[0].id},city_id=${filtered_hotelcity_id[0].city_id},adults=${totalPaxRedux.adults},children=${totalPaxRedux.children},rooms=${totalPaxRedux.rooms}`
        
       history.push(`/${locale}/search_results_hotels/${route_query}`,[...list, hotelNewList])
        console.log('[HISTORY : ] ', history)

        browserhistory.go(0)
       
      // }     
     }
    }
        
    const MakeVisible = () =>{
      setPaxListOpen(!paxListOpen)
    }

    const MakeCodeVisible = () =>{
      setPromoCodeOpen(!promoCodeOpen)
    }

    const VisibleCross = () =>{
      if(hotelsvalue !== ''){
        setCrossVisible(true)
      }
    }

    const NotVisibleCross = () =>{
        setCrossVisible(false)
      }

      const clearInput = () =>{
          setHotelsValue('')
        }

      return(
            <div>
              <form className={formClass} onSubmit={onSubmit}> 
                    {/* <div style={{width:`${width*0.8/4}px`}}> */}
                     <div style={{gridColumn:'1', 
                                  display:'flex',
                                  flexDirection:'row-reverse',
                                  justifyContent:'space-around'
                                  }}
                            onMouseEnter={VisibleCross}
                            onMouseLeave={NotVisibleCross}
                          >
                           <ClearInput makevisible={crossVisible}
                                       clearInput={clearInput}/>
                      
                       <Autocomplete
                         {...props}
                         
                           value={hotelsvalue} 
    
                           inputProps={{
                             style: 
                            { 
                              // width: `${width*0.8/4}px`,
                              height: '45px', 
                              fontFamily: 'Tahoma', 
                              fontSize: '16px',
                              border:'none',
                              marginTop: '0.2vw',
                              textAlign:"center",
                              position:"relative"          
                            }, 
                              
                          placeholder: placeholder.placeHolderString ,
                        
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
              </div>  

               <div style={{gridColumn:'2',
                            borderLeft:'0.5px solid grey',
                            display:'flex',
                            alignItems:'center'}}>
               {
                searchProps?
                 <Space direction="vertical">
                    <RangePicker
                        size={'middle'}
                        disabledDate={disabledDate}
                        allowClear={false}
                        onChange={onChange}
                        defaultValue={[moment(searchProps.start, dateFormat),moment(searchProps.end, dateFormat)]} format={dateFormat}
                        bordered={false}
                        className={datepickerClass}
                        placeholder={[placeholder.placeHolderStartDate,placeholder.placeHolderEndDate]}
                        allowEmpty={[false,false]}
                    />
                </Space>
                   :
                <Space direction="vertical">
                     <RangePicker
                        size={'middle'}
                        disabledDate={disabledDate}
                        allowClear={false}
                        onChange={onChange}
                        bordered={false}
                        className={datepickerClass}
                        placeholder={[placeholder.placeHolderStartDate,placeholder.placeHolderEndDate]}
                      />
                </Space>
              }
            </div> 

            <div style={{gridColumn:'3',
                         borderLeft:'0.5px solid grey',
                         display:'flex',
                         alignItems:'center',
                         overflow:'hidden'}}>

                  <HotelsPaxChoice 
                     MakeVisible={MakeVisible}
                     paxListOpen={paxListOpen}
                     searchProps={searchProps}
                  />
             </div>
            
            <div style={{gridColumn:'4',
                         borderLeft:'0.5px solid grey',
                         cursor:'pointer',
                         display:'flex',
                         alignItems:'center',
                         justifyContent:'center'
                         }}>
            <PromoCode
                   MakeCodeVisible={MakeCodeVisible}
                   promoCodeOpen={promoCodeOpen}
                   refpartner={searchProps?searchProps.refpartner:''}
             />
             </div>
       
                {/* <div class='borderInnerWrapper2' style={{width:`${width*0.8/4}px`}}> */}
            <button style={{gridColumn:'5'}} type='submit' onClick={addToList}>
                      {
                        messages&&messages.map((item)=>{
                          // if(item.id===76){
                            if (item.sitepage_region_id ===7&&item.sitepage_type_id === 13){
                              console.log('BUTTON',item)
                            return (
                               <FormattedMessage id={item.title.map((item1)=>item1.text)}/>
                            )
                          }
                        })
                      }
             </button>
                                   
                {/* </div> */}
                
    
            </form> 
           </div>
          )
        }
