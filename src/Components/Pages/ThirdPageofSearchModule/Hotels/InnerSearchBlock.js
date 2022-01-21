import React,{useState,useEffect} from 'react';
import {useIntl, FormattedMessage} from 'react-intl'
import {DatePicker,Space} from 'antd';
import {HotelsPaxChoice} from '../../../Library/PageDevices/HotelsPaxChoice'
import {RatesBlock} from './RatesBlock/RatesBlock'
import {useDispatch, useSelector} from 'react-redux'
import {getPaxInnerSearch} from '../../../../Redux/actions/paxchoice'
import {getHotelRates} from '../../../../Redux/actions/hotelrates'
import {useWindowWidthAndHeight} from '../../Helpers/WindowResizeHook'

import moment from 'moment';

import 'antd/dist/antd.css';
import './HotelDetailsCSS.css';

export const InnerSearchBlock = ({search_data,hotelName}) =>{

    const {locale,messages} = useIntl();

    const [startDate, setStartDate] = useState(search_data.start);
    const [endDate, setEndDate] = useState(search_data.end);
    const [paxListOpen, setPaxListOpen] = useState(false);
    const [newList,setNewList] = useState(search_data);
    const [clicked, setClicked] = useState(false);
    const [pickedStartValue, setPickedStartValue] = useState(false);
    const [pickedEndValue, setPickedEndValue] = useState(false);
    const [width, height] = useWindowWidthAndHeight()

    const totalPaxRedux = useSelector(state => state.paxchoice.pax)
    const dispatch = useDispatch();

    const dateFormat = 'YYYY-MM-DD';

    console.log('SEARCH_DATA',search_data)
   
    useEffect ( () => {
        dispatch(getPaxInnerSearch(search_data.adults, search_data.children, search_data.rooms))
    },[]);

    function StartDateChange(date, dateString) {
        setStartDate(dateString)
        setPickedStartValue(true)
    }

    function EndDateChange(date, dateString) {
        setEndDate(dateString)
        setPickedEndValue(true)
    }

    const MakeVisible = () =>{
        setPaxListOpen(!paxListOpen)
      }

      const disabledDate = (current) =>{
        return current < moment().subtract(1,'days')
      }
    
      const changeSearchDetails = () =>{

        if (pickedStartValue === false){
            alert ("Arrival Date is missing")
        }
        else if (pickedEndValue === false){
            alert ("Departure Date is missing")
        }

        else if (pickedStartValue === true && pickedEndValue === true){
          const List = {
            start: startDate,
            end: endDate,
            city_id: search_data.city_id,
            hotel_id: search_data.hotel_id,
            adults: String(totalPaxRedux.adults),
            children: String(totalPaxRedux.children),
            rooms: String(totalPaxRedux.rooms)
          }
          
          setNewList(List)
          setClicked(true)
        //   dispatch(getHotelRates(newList))

        }
    //     return <RatesBlock
    //     search_data={newList}
    //  /> 
      }

    return(
      <div>
        <h3 class={`${width>768?"SearchDetails":"SearchDetailsSmallScreen"}`}>
            <h4><span>Check-in date : </span>
            {!search_data.start?(
             <Space direction="vertical">
                    <DatePicker 
                        disabledDate={disabledDate}
                        placeholder={'Start date'}
                        onChange={StartDateChange} />
                </Space>
                 ):(
                 <Space direction="vertical">
                     <DatePicker 
                        disabledDate={disabledDate}
                         defaultValue={moment(search_data.start, dateFormat)} format={dateFormat}
                         onChange={StartDateChange} />
                 </Space>
                 )
                }
            </h4>
            <h4><span>Check-out date :</span>
            {
            !search_data.end?(
            <Space direction="vertical">
                    <DatePicker 
                        disabledDate={disabledDate}
                        placeholder={'End date'}
                        onChange={EndDateChange} />
                </Space>
                ):(
                <Space direction="vertical">
                    <DatePicker 
                        disabledDate={disabledDate}
                        defaultValue={moment(search_data.end, dateFormat)} format={dateFormat}
                        onChange={EndDateChange} />
                </Space>
                )
                }
            </h4>
            <h4> <span>Details of your stay :</span> 
                <HotelsPaxChoice
                    MakeVisible={MakeVisible}
                    paxListOpen={paxListOpen}
                    rooms={search_data.rooms}
                    adults={search_data.adults}
                    children={search_data.children}/>
            </h4>
            <h4>
                <button 
                    type='submmit'
                    class={`${width>768?"availableButton":"availableButtonSmallScreen"}`}
                    onClick={changeSearchDetails}
                    >
                     {
                        messages&&messages.map((item)=>{
                          if(item.sitepage_region_id === 7&&item.sitepage_type_id === 15){
                            return (
                               <FormattedMessage id={item.title.map((item1)=>item1.text)}/>
                            )
                          }
                        })
                      }
                </button>
            </h4>
         </h3>
         
          {/* {
            clicked === false?(
                
                <RatesBlock
                    search_data={search_data}
                />    
            )
            :React.Fragment */}
            {
             clicked === true?
                (<RatesBlock 
                    search_data={newList}
                 />):(
                 <RatesBlock 
                    search_data={search_data}/>
                        )
            }        
      </div>
    )
}