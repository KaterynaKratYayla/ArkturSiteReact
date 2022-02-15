import React, {useState, useEffect} from 'react'
import axios from "axios"
import ReactHtmlParser from 'react-html-parser'
import {useDispatch, useSelector} from 'react-redux'
import { useHistory , useLocation} from "react-router-dom";
import {useIntl} from 'react-intl'
import moment from 'moment';
import { Select } from 'antd';
// import {getPax} from '../../../../Redux/actions/paxchoice'
import { OccupancyRates } from './OccupancyRates';
import {getTourContents} from '../../../../Redux/actions/tourcontents'
import {ValidateQuery} from '../../Helpers/helper'
import 'antd/dist/antd.css';
import {RateChoiceBlock} from './RateChoiceBlock'
// import {Gallery} from '../../Library/PhotoGallery/PhotoGallery'
import {CartGallery} from '../../../Library/PageDevices/CartGallery/CartGallery'
import {Moon} from '../../../Library/Icons/moon.js'
import {Sun} from '../../../Library/Icons/sun'
import {CalendarOutlined} from '@ant-design/icons'
import {PaxChoice} from './PaxChoice'
import {useWindowWidthAndHeight} from '../../Helpers/WindowResizeHook'

import './TourDetailsCSS.css'

  export const TourDetails = (props) =>{

    const {locale} = useIntl();
    let location = useLocation();
    let history = useHistory();
    const dispatch = useDispatch();

    const choiceDetailsNew = useSelector(state => state.tourcontents.tourcontents)

    useEffect(() =>{
      dispatch(getTourContents(search_data.tour_id, search_data.selection))
    },[])

    console.log('choiceDetailsNew',choiceDetailsNew)

    let mappingExists;
    let hotelsExist;
    
    for (let key in choiceDetailsNew[0]){
      if(key.includes('mapping')){
        if(choiceDetailsNew[0][key].join('').includes('no mapping hotels')){
         mappingExists = 'false'
        }
        else mappingExists = 'true'
      }
    }
    for (let key in choiceDetailsNew[0]){
      if(key.includes('hotels')){
        if(choiceDetailsNew[0][key].join('').includes('no attached hotels')){
          hotelsExist = 'false'
         }
         else hotelsExist = 'true'
      }
    }
    console.log('TEST',mappingExists,hotelsExist)

    // console.log('PROPS', props)
    let search_data = ValidateQuery(location)
    // console.log('Tour Details Location', search_data.selection)

    // const totalPax = useSelector(state=>state.pax)

    const [details, setDetails] = useState([{}]);
    const [rateDetails, setrateDetails] = useState([{}]);
    const [selectionDetails, setSelection] = useState(search_data.selection)
    const [filteredDetails, setfilteredDetails] = useState([{}])
    const [open, setOpen] = useState(false)

    const { Option } = Select;

    const [width, height] = useWindowWidthAndHeight()

 
    useEffect ( () => {
      axios.get(`${process.env.REACT_APP_SMART_URL}interface/content?id=${search_data.tour_id}&language=${locale}`)
        .then( res => {
          setDetails(res.data)
          })

      .catch( error => {
        setDetails(undefined)
        console.log( '[axios error] : ' , error)
         });
     }, []);

    console.log('[DETAILED CONTENT]', details)
    const { user: currentUser } = useSelector((state) => state.auth);

      useEffect(() => {
          const ActionRQ = {
              "username":"Serodynringa",
              "password":"%tmMJZbABm6cB@tY",
              // "user_id" :1426,
              "user_id" :currentUser.user_id,
              "action":"GetPriceTourRQ",
              "data" :
                  {
                      city_id: search_data.city_id,
                      // date: currentMonth === search_data.date ? today : (search_data.date + '-01'),
                      date : search_data.selection,
                      window: 30,
                      tour_id: search_data.tour_id
                  }
          };

          // axios.post('https://hotels-ua.biz/interface/xmlsubj/', JSON.stringify({ActionRQ}))
          axios.post(`${process.env.REACT_APP_SMART_URL}interface/xmlsubj/`, JSON.stringify({ActionRQ}))
              // axios.post('http://smartbooker/interface/xmlsubj/', JSON.stringify({ActionRQ}))
              .then( res => {
                  setrateDetails(res.data)
                  // console.log('setrateDetails]' , res.data)
              })
              .catch( error => {
                  setrateDetails(undefined)
                  console.log( '[axios error] : ' , error)
              });

      }, []);


     console.log('[setrateDetails] : ' , rateDetails)

      useEffect(() => {
          const ActionRQ = {
              "username":"Serodynringa",
              "password":"%tmMJZbABm6cB@tY",
              // "user_id" :1426,
              "user_id" :currentUser.user_id,
              "action":"GetPriceTourRQ",
              "data" :
                  {
                      city_id: search_data.city_id,
                      // date: currentMonth === search_data.date ? today : (search_data.date + '-01'),
                      date : search_data.selection,
                      window: 30,
                      tour_id: search_data.tour_id
                  }
          };

          // axios.post('https://hotels-ua.biz/interface/xmlsubj/', JSON.stringify({ActionRQ}))
          axios.post(`${process.env.REACT_APP_SMART_URL}interface/xmlsubj/`, JSON.stringify({ActionRQ}))
              // axios.post('http://smartbooker/interface/xmlsubj/', JSON.stringify({ActionRQ}))
              .then( res => {
                  const filtered = res.data[0].rate.filter((item1,index,array) =>
                      array.findIndex(t => t.date === item1.date)===index)

                  setfilteredDetails(filtered)
                  console.log('[setfilteredDetails]' , filtered)
              })
              .catch( error => {
                  setfilteredDetails(undefined)
                  console.log( '[axios error] : ' , error)
              });

      }, []);

        

     function selectedPeriod (value) {

        console.log('SELECTED : ' , value)
        setSelection(value)
}

const MakeVisible = () =>{
  setOpen(!open)
}

      return (
          <div class='TourDetailsWrapper'>
            <h2 style={{marginTop: '4vh'}}>{search_data.tour_name.replace(/%20/g , ' ')}</h2>
            <div class='Icons'>

                <Sun />

                <div style={{marginLeft: '0.4vw'}}>{rateDetails[0].duration} days</div>

                <div style={{marginLeft: '0.4vw', marginRight: '0.4vw'}}> - </div>

                <Moon />

                <div style={{marginLeft: '0.4vw'}}> {rateDetails[0].duration - 1} nights </div>

            </div>

            <div class={`${width>1000?'TourDetailsInner':'TourDetailsInnerSmallScreen'}`}
                  // style={{width:`${width}`}}
                  >
              {/* <div style={{width:`${width>1000?'40%':'100%'}`}}> */}
                {
                   details && details.map((item) =>{
                    if(item.content_name === "Image"){
                      console.log('CARTGALLERY',item)
                      return (
                          <div class='GalleryTourDetails'
                               style={{height:`${height/2}px`}}
                               >
                             <CartGallery photos={item}/>
                          </div>
                        )
                      }
                    }
                  )
                }
              {/* </div> */}
              <div class='TourBookingDetails'
                   style={{width:`${width>1000?'60%':'100%'}`}}>

                <h3>Tour Booking Details {rateDetails[0].duration}</h3>
                
                <div class='ChosenCalendar'>
                     
                  <div style={{textAlign:'right'}}>
                    <CalendarOutlined style={{fontSize: '2vw',
                                        border: '2px solid white',
                                        color: '#102D69'}}/>
                  </div>
                  
                    <h4 style={{
                                color: 'rgb(77, 75, 75)',
                                fontSize:'17px',
                                fontFamily:'Arial Narrow',
                                fontWeight:'bold',
                                display:'flex',
                                alignItems:'center'}}>
                                      Chosen date of travel : 
                    </h4>         

                    <h4 class='DateSelection'>{selectionDetails}</h4>
                
                </div>

                <RateChoiceBlock 
                  //  totalPax={total}
                   tour_id={search_data.tour_id}
                   selectionDetails={selectionDetails}
                   choiceDetailsNew={choiceDetailsNew}/>

              <h3 class='TourUpdateBlock'>Update your tour booking details</h3>
              
              <div class='TourBookingChoice'>
                  
                 <div style={{gridColumn:'1',
                              display:'flex',
                              justifyContent:'center',
                              width:'100%'}}>

                      <PaxChoice
                         selectionDetails={selectionDetails}
                         tour_id={search_data.tour_id}
                         MakeVisible = {MakeVisible}
                         open={open}
                         choiceDetailsNew={choiceDetailsNew}
                      />
                  </div>

                 <div style={{gridColumn:'2'}}>
                       <h4>Available dates :</h4>
                       <Select
                          defaultValue={selectionDetails}
                          onChange={selectedPeriod}
                          bordered={true}
                          size='medium'>
                            <>
                              {
                                filteredDetails && filteredDetails.map((filter,index)=>{
                                  return (
                                    <Option
                                        value={filter.date}
                                        key={rateDetails[0].tour_id, '-' , index}>
                                          {filter.date} -- {moment(filter.date).add(rateDetails[0].duration, 'days').format('YYYY-MM-DD')} ({rateDetails[0].duration} days)
                                  </Option>
                                  )
                                })
                              }
                            </>
                     </Select>
                     </div>
               </div>

              </div> 


              </div>
            <div class='CostBreakdown'>
                  <h3>Cost breakdown</h3>
                  <OccupancyRates
                                // choiceDetailsNew={choiceDetailsNew}
                                // hotelChoice={hotelChoice}
                                selectionDetails={selectionDetails}
                                tour_id={search_data.tour_id}
                                // totalPax={AmountPax}
                                choiceDetailsNew={choiceDetailsNew}
                                mappingExists={mappingExists}
                                hotelsExist={hotelsExist}
                                pickedCurrency={search_data.selected_currency}
                                />
            </div>

            <div>
              
              {
                details && details.map((item) =>{
                  if(item.content_name === 'Body'){
                    return (  
                        <div class='DescriptionTourDetails'>
                            <h3>Tour Itinerary</h3>
                            {ReactHtmlParser(item.text)}
                        </div>
                      
                      )
                    }
                })
              }
            </div>
         
        </div>
        
      )
    }
