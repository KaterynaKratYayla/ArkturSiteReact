import React, {useState, useEffect} from 'react'
import axios from "axios"
import 'antd/dist/antd.css'
// import PropTypes from 'prop-types';

// import DropdownButton from 'react-bootstrap/DropdownButton'
// import Dropdown from 'react-bootstrap/Dropdown'

import { Select } from 'antd';

// import {CalendarOutlined} from '@ant-design/icons'

import {PaxChoice} from './PaxChoice'
import {Coach} from '../../Library/Icons/coach.js'
import {Guide} from '../../Library/Icons/guide.js'
import {Hotels} from '../../Library/Icons/hotels.js'

import './TourDetailsCSS.css'

console.log('[file]', 'src/Components/Pages/ThirdPageofSearchModule/RateChoiceBlock.js');
export const RateChoiceBlock =({selectionDetails,tour_id}) =>{

      const [choiceDetails, setchoiceDetails] = useState([{}]);
      const [hotelChoice, sethotelChoice] = useState('Hotels Available')
      const [open, setOpen] = useState(false)

      const { Option } = Select;

      console.log('tour_id', tour_id)

      function handleChange(value) {
        // console.log(`selected ${value}`);
        sethotelChoice(value)

        // console.log('[hotelChoice]', hotelChoice)
      }

      useEffect (() =>{
        axios.get(`https://hotels-ua.biz/interface/sitechoice3?tour_id=${tour_id}&date=${selectionDetails}`)
        .then(res => {
          setchoiceDetails(res.data)
        })
        .catch(error =>{
          setchoiceDetails(undefined)
          console.log('[axios error]: ', error)
        });
      },[]);

      // const pickupHotel = (e) =>{
      //   console.log(e.target)
      //   sethotelChoice(e.target.value)
      // }

      const MakeVisible = () =>{
        setOpen(!open)
      }

      console.log('[SASHAS_OBJECT]' , choiceDetails)

      return(
        <div>

          <div class='RateChoiceBlock'>
               <PaxChoice
                    MakeVisible = {MakeVisible}
                    open={open}/>
            {
              choiceDetails? (choiceDetails.map((item)=> {

                if(item.hotel){
                  return(
                  <div style={{display:'flex',
                               flexDirection:'column'}}
                       class='second'>
                     <div style={{display:'flex',
                             flexDirection:'row',
                            //  justifyContent:'space-around',
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
                          bordered={true}>
                               {
                                item.hotel && item.hotel.map((hotel)=>{
                                  return(
                                    <>
                                      <Option
                                            value={hotel[0].hotel_name}>
                                                  {hotel[0].hotel_name} {hotel[0].hotel_rating}
                                      </Option>
                                    </>
                                  )
                        })
                      }
                    </Select>

                      {/* <div>{hotelChoice}</div> */}
                   </div>
                  )
                }

                else if(item.inclusions){
                  return(

                     <>
                        {
                          item.inclusions.hotel? item.inclusions.hotel.map((item1)=>{
                            if(item1.Transfer){
                              return(

                                <div style={{display:'flex',
                                         flexDirection:'column',
                                        //  marginBottom:'0.5vh'

                                         }}
                                         class='third'>
                                  <Coach />
                                  <h4 style={{marginTop:'1vh'}}>Transfer Included</h4>
                                </div>
                               )
                              }
                            else if(item1.Excursion){
                               return (
                                <div style={{marginBottom: '4vh',
                                          marginTop:'0.5vh',
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

                 )
                }

              })) : (<div>Please click here to send your request</div>)
            }
        </div>
      </div>
      )
    }
