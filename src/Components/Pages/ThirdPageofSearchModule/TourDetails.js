import React, {useState, useEffect} from 'react'
import axios from "axios"
import ReactHtmlParser from 'react-html-parser'
import {useDispatch, useSelector} from 'react-redux'
import { useHistory , useLocation} from "react-router-dom";
import moment from 'moment';
import { Select } from 'antd';
import {getContent} from '../../../Redux/actions/content'
import {ValidateQuery} from '../Helpers/helper'
import 'antd/dist/antd.css'
import {PlusOutlined, MinusOutlined, CalendarOutlined} from '@ant-design/icons'
import {RateChoiceBlock} from './RateChoiceBlock'

import {Gallery} from '../../Library/PhotoGallery/PhotoGallery'
import {Moon} from '../../Library/Icons/moon.js'
import {Sun} from '../../Library/Icons/sun.js'

import './TourDetailsCSS.css'
import 'antd/dist/antd.css'

  export const TourDetails = (props) =>{
    let location = useLocation();
    let history = useHistory();
    
    console.log('PROPS', props)
    let search_data = ValidateQuery(location)
    console.log('Tour Details Location', search_data.selection)
  
    const [details, setDetails] = useState([{}]);
    const [rateDetails, setrateDetails] = useState([{}]);
    const [selectionDetails, setSelection] = useState(search_data.selection)
    const [filteredDetails, setfilteredDetails] = useState([{}])
    const { Option } = Select;

    useEffect ( () => {
      axios.get(`http://smartbooker.biz/interface/content?id=${search_data.tour_id}&language=en`)
        .then( res => {
          setDetails(res.data)
          })
        
      .catch( error => {
        setDetails(undefined)
        console.log( '[axios error] : ' , error)
         });
     }, []);

    console.log('[DETAILED CONTENT]', details)


    useEffect ( () => {
      axios.get('http://smartbooker.biz/interface/price'
      , {
      params:{ 
        city_id: search_data.city_id,
        // date: currentMonth === search_data.date ? today : (search_data.date + '-01'),
        date : search_data.selection,
        window: 30,
        tour_id: search_data.tour_id
          } 
        }
      )
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
    
     
        useEffect ( () => {         
            axios.get('http://smartbooker.biz/interface/price'
            , {
          
            params:{ 
              city_id: search_data.city_id,
              // date: currentMonth === search_data.date ? today : (search_data.date + '-01'),
              date : search_data.selection,
              window: 30,
              tour_id: search_data.tour_id
                } 
              }
            )
              .then( res => {
                const filtered = res.data[0].rate.filter((item1,index,array) =>
                array.findIndex(t => t.date === item1.date)===index)

                setfilteredDetails(filtered)
                console.log('setfilteredDetails]' , filtered)
            })
            .catch( error => {
              setfilteredDetails(undefined)
              console.log( '[axios error] : ' , error)
               });
           }, []);

    //  const ChoosePax =(e)=>{
    //     setPax(e.target.value)
    //     console.log('SET PAX', pax)
    //  }

     function selectedPeriod (value) {

        console.log('SELECTED : ' , value)
        setSelection(value)
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
            
            <div class='TourDetailsInner'>
              <div>
                {
                   details && details.map((item) =>{
                    if(item.content_name === "Image"){
                      return (
                          <div class='GalleryTourDetails'>
                             <Gallery galleryImages={item.text}/>
                          </div>
                        )
                      }  
                    }
                  )
                }
              </div>
              <div class='BookingDetails'>
                <h3>Tour Booking Details {rateDetails[0].duration}</h3>
                 <div class='BookingChoice'>
                   
                     <div class='BookingChoiceInner'>
                            <div style={{
                                        display: 'flex', 
                                        flexDirection: 'row'
                                        }}>
                               <CalendarOutlined 
                                  style={{fontSize: '2vw',
                                          border: '2px solid white',
                                          color: '#102D69'}}
                                  />
                               <h4>Chosen date of travel : </h4> 
                            </div>
                         <div class='DateSelection'>{selectionDetails}</div>
                     </div>

                     <div class='BookingChoiceInner'>
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
                  <RateChoiceBlock
                      selectionDetails={selectionDetails}
                      tour_id={search_data.tour_id}/>
               </div>
              </div>
            <div>
              {
                details && details.map((item) =>{
                  if(item.content_name === 'Body'){
                    return (
                        <div class='DescriptionTourDetails'>
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