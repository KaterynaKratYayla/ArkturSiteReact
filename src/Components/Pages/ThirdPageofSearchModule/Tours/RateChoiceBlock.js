import React, {useState, useEffect} from 'react'
import axios from "axios"
import 'antd/dist/antd.css';
import {useDispatch, useSelector} from 'react-redux'
import {getPax} from "../../../../Redux/actions/paxchoice"
import {LoadingMessage} from '../../../Library/PageDevices/LoadingMessage'

import { Select } from 'antd';

import {OccupancyRates} from './OccupancyRates'
import {PaxChoice} from './PaxChoice'
import {Coach} from '../../../Library/Icons/coach.js'
import {Guide} from '../../../Library/Icons/guide.js'
import {Hotels} from '../../../Library/Icons/hotels.js'
import {ExcursionMap} from '../../../Library/Icons/excursionmap'
import { getHotelChoiceTours} from '../../../../Redux/actions';
import {getTourContents} from '../../../../Redux/actions/tourcontents'

import './TourDetailsCSS.css'

export const RateChoiceBlock =({selectionDetails,tour_id,totalPax,choiceDetailsNew}) =>{

      // const [choiceDetails, setchoiceDetails] = useState([{}]);
      const [hotelChoice, sethotelChoice] = useState('Hotels Available')
      // const [open, setOpen] = useState(false)
      const [occupancy, setOccupancy] = useState(false)
      // const [choiceDetailsNew, setChoiceDetailsNew] = useState([{}]);
      const dispatch = useDispatch();

      // const choiceDetailsNew = useSelector(state => state.tourcontents.tourcontents)

      // useEffect(() =>{
      //   dispatch(getTourContents(tour_id, selectionDetails))
      // },[])

      // console.log('choiceDetailsNew',choiceDetailsNew)

      const AmountPax = useSelector(state => state.paxchoice.pax)
       
      const { Option } = Select;

      console.log('tour_id', tour_id)
 
      // useEffect ( () => {
      //   dispatch (getPax ());
      //   },[]);

      function handleChange(value) {
        sethotelChoice(value)
        dispatch(getHotelChoiceTours(value))
      }

      // const handleSelected = (value) =>{
      //   setOccupancy(!occupancy)
      // }
 
      // useEffect (() =>{
      //   axios.get(`${process.env.REACT_APP_SMART_URL}interface/sitechoice3new?tour_id=${tour_id}&date=${selectionDetails}`)
      //   .then(res => {
      //     setChoiceDetailsNew(res)               
      
      //   })
      //   .catch(error =>{
      //     setChoiceDetailsNew(undefined)
      //     console.log('[axios error]: ', error)
      //   });
      // },[]);  

      console.log('choiceDetailsNew',choiceDetailsNew)

      return(

        <div class='TourChoiceBlockWrapper'>

        <div class='TourInclusionsBlock'>
             
                <h4 style={{gridColumn:'1',
                            display:'flex',
                            justifyContent:'center',
                            alignItems:'center'}}>Tour Includes : </h4>

                <div class='InclusionIcons'>
                    
                {
                  choiceDetailsNew.inclusions&&choiceDetailsNew.inclusions.length>0? choiceDetailsNew.inclusions.map((item1)=>{
                    if(item1.Transfer){ 
                       return(

                            <div style={{display:'flex', 
                                      flexDirection:'column',
                                      justifyContent:'center'
                                        }}
                                        //  class='third'
                                         >
                                  <Coach />
                                  <h4 style={{marginTop:'1vh'}}>Transfer</h4>
                            </div>
                           )
                          }
                    else if(item1.Excursion){
                        return (
                            <div style={{
                                          // marginTop:'4vh',
                                          display:'flex', 
                                          flexDirection:'column',
                                          justifyContent:'center'
                                          }}
                                          class='forth'>
                                  <ExcursionMap />
                                  <h4 style={{marginTop:'1vh'}}>Excursion</h4>
                             </div>
                           )
                          }
                          else if(item1.Guide){
                            return (
                                <div style={{
                                  // marginBottom: '4vh',
                                              // marginTop:'4vh',
                                              display:'flex', 
                                              flexDirection:'column',
                                              justifyContent:'center'
                                              }}
                                              class='forth'>
                                      <Guide />
                                      <h4 style={{marginTop:'1vh'}}>Guide Services</h4>
                                 </div>
                               )
                              }
                                          
                      })
                       :(null)
                    }
            
            </div>
              
          </div>
        
          <div class='TourChoiceBlock'>

            
               {/* <PaxChoice 
                    MakeVisible = {MakeVisible}
                    open={open}
                    tour_id={tour_id}
                    selectionDetails={selectionDetails}
                    /> */}
                <>
                  {
                      (choiceDetailsNew[0].hotels && choiceDetailsNew[0].hotels.length>0 && choiceDetailsNew[0].hotels.join('')!=='no attached hotels') ? (
                           <div style={{display:'flex',
                                 flexDirection:'column',
                                 marginTop:'4vh'}}
                                >
                                <div style={{display:'flex', 
                                              flexDirection:'row',
                                              marginBottom: '0.5vh'}}>
                                                          
                                                    <Hotels />
                                                    <h4 style={{marginLeft:'0.5vw'}}>Accommodation</h4>
                                </div>

                                <Select 
                                      defaultValue={hotelChoice}
                                      style={{ width: '90%',
                                              color:'#102D69',
                                              fontWeight:'bold',
                                              }} 
                                      size='medium'
                                      onChange={handleChange}
                                      // onSelect={()=>dispatch (getPax ())}
                                      bordered={true}>
                                          { 
                                            choiceDetailsNew[0].hotels && choiceDetailsNew[0].hotels.map((hotel,index)=>{
                                              return(
                                                <>
                                                  <Option 
                                                        value={hotel.hotel_name}
                                                        key={index}>
                                                              {hotel.hotel_name} {hotel.hotel_rating} 
                                                  </Option>
                                                </>
                                          )
                                    })        
                                  }
                                </Select>
{/* 
                              <OccupancyRates
                                choiceDetailsNew={choiceDetailsNew}
                                hotelChoice={hotelChoice}
                                selectionDetails={selectionDetails}
                                tour_id={tour_id}
                                totalPax={AmountPax}
                              />  */}
                             
                            
                   </div>
                  
                

                         
                   ) : 
                   (choiceDetailsNew[0].hotels && choiceDetailsNew[0].hotels.length>0 && choiceDetailsNew[0].hotels.join('')==='no attached hotels')?
                   
                            //  <OccupancyRates
                            //     selectionDetails={selectionDetails}
                            //     tour_id={tour_id}
                            //     totalPax={AmountPax}
                            //     nohotel={'true'}
                            //   /> 
                            null
                   : (<LoadingMessage loadingMessageClass='TourRateLoading'/>)
                  }
                </>
          </div>

        </div>
      )
    }