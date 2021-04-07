import React, {useState, useEffect} from 'react'
import axios from "axios"
import 'antd/dist/antd.css';
import {useDispatch, useSelector} from 'react-redux'
import {getPax} from "../../../Redux/actions/paxchoice"
// import PropTypes from 'prop-types';

// import DropdownButton from 'react-bootstrap/DropdownButton'
// import Dropdown from 'react-bootstrap/Dropdown'

import { Select } from 'antd';

// import {CalendarOutlined} from '@ant-design/icons'

import {OccupancyRates} from './OccupancyRates'
import {PaxChoice} from './PaxChoice'
import {Coach} from '../../Library/Icons/coach.js'
import {Guide} from '../../Library/Icons/guide.js'
import {Hotels} from '../../Library/Icons/hotels.js'

import './TourDetailsCSS.css'

export const RateChoiceBlock =({selectionDetails,tour_id}) =>{

      // const [choiceDetails, setchoiceDetails] = useState([{}]);
      const [hotelChoice, sethotelChoice] = useState('Hotels Available')
      const [open, setOpen] = useState(false)
      const [occupancy, setOccupancy] = useState(false)
      const [choiceDetailsNew, setChoiceDetailsNew] = useState([{}]);

      const AmountPax = useSelector(state => state.paxchoice.pax)
      const dispatch = useDispatch();
       
      const { Option } = Select;

      console.log('tour_id', tour_id)
 
      // useEffect ( () => {
      //   dispatch (getPax ());
      //   },[]);

      function handleChange(value) {
        sethotelChoice(value)
      }

      // const handleSelected = (value) =>{
      //   setOccupancy(!occupancy)
      // }
 

      useEffect (() =>{
        axios.get(`https://hotels-ua.biz/interface/sitechoice3new?tour_id=${tour_id}&date=${selectionDetails}`)
        .then(res => {
          setChoiceDetailsNew(res.data)               
      
        })
        .catch(error =>{
          setChoiceDetailsNew(undefined)
          console.log('[axios error]: ', error)
        });
      },[]);  

           
     console.log('CHOICE_DETAILS_NEW', choiceDetailsNew)

   
      const MakeVisible = () =>{
        setOpen(!open)
      }

      // console.log('[SASHAS_OBJECT]' , choiceDetails)

      return(
        <div class='ChoiceBlockWrapper'>
            
          {/* <div class='RateChoiceBlock'> */}
          <div class='ChoiceBlock'>
            
               <PaxChoice 
                    MakeVisible = {MakeVisible}
                    open={open}
                    tour_id={tour_id}
                    selectionDetails={selectionDetails}
                    />
                <>
                  {
                      (choiceDetailsNew[0].hotels && choiceDetailsNew[0].hotels.length>0 && choiceDetailsNew[0].hotels!=='no attached hotels') ? (
                           <div style={{display:'flex',
                                 flexDirection:'column',
                                 marginTop:'4vh'}}
                                >
                                <div style={{display:'flex', 
                                              flexDirection:'row',
                                              maxWidth:'15vw',
                                              marginBottom: '0.5vh'}}>
                                                          
                                                    <Hotels />
                                                    <h4 style={{marginLeft:'0.5vw'}}>Accommodation</h4>
                                </div>

                                <Select 
                                      defaultValue={hotelChoice}
                                      style={{ maxWidth: '15vw',
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

                              <OccupancyRates
                                choiceDetailsNew={choiceDetailsNew}
                                hotelChoice={hotelChoice}
                                selectionDetails={selectionDetails}
                                tour_id={tour_id}
                                // AmountPax={AmountPax}
                              /> 
                             
                            
                   </div>
                  
                

                         
                   ) : (<div>Please click here to send your request</div>)
                  }
                </>
          </div>

          <div class='InclusionsBlock'>
             <>
                    
                {
                  choiceDetailsNew.inclusions&&choiceDetailsNew.inclusions.length>0? choiceDetailsNew.inclusions.map((item1)=>{
                    if(item1.Transfer){ 
                       return(

                            <div style={{display:'flex', 
                                      flexDirection:'column',
                                        }}
                                        //  class='third'
                                         >
                                  <Coach />
                                  <h4 style={{marginTop:'1vh'}}>Transfer Included</h4>
                            </div>
                           )
                          }
                    else if(item1.Excursion||item1.Guide){
                        return (
                            <div style={{marginBottom: '4vh',
                                          marginTop:'4vh',
                                          display:'flex', 
                                          flexDirection:'column'
                                          }}
                                          class='forth'>
                                  <Guide />
                                  <h4 style={{marginTop:'1vh'}}>Guide Included</h4>
                             </div>
                           )
                          }
                                          
                      })
                       :(null)
                    }
            </>
              
          </div>
        </div>
      )
    }