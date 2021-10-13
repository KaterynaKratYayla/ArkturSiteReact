import React,{useState} from 'react';
import {DatePicker,Space} from 'antd';
import {HotelsPaxChoice} from '../../FirstPageofSearchModule/HotelsAutocompleteBlock/HotelsPaxChoice'
import {useWindowWidthAndHeight} from '../../Helpers/WindowResizeHook'
import moment from 'moment';

import 'antd/dist/antd.css';
import './HotelDetailsCSS.css';

export const InnerSearchBlock = ({search_data}) =>{

    const [startDate, setStartDate] = useState(search_data.start);
    const [endDate, setEndDate] = useState(search_data.end);

    const dateFormat = 'YYYY-MM-DD';

    console.log('SEARCH_DATA',search_data)

    function StartDateChange(date, dateString) {
        setStartDate(dateString)
        // console.log('DATE',date, dateString)
    }

    function EndDateChange(date, dateString) {
        setEndDate(dateString)
        // console.log('DATE1',date, dateString)
    }

    return(
        <h3  class="SearchDetails">
            <h4>Check-in date : 
                <Space direction="vertical">
                    <DatePicker 
                        defaultValue={search_data.start!==null?moment(search_data.start, dateFormat):null} format={dateFormat}
                        onChange={StartDateChange} />
                </Space>
            </h4>
            <h4>Check-out date 
                <Space direction="vertical">
                    <DatePicker 
                        defaultValue={search_data.end!==null?moment(search_data.end, dateFormat):null} format={dateFormat}
                        onChange={EndDateChange} />
                </Space>
            </h4>
            <h4>Rooms : <span>{search_data.rooms} </span></h4>
            <h4>Adults : <span>{search_data.adults}</span> {search_data.children === "0"? null:`${' , Children : ' + `${<span>{search_data.children}</span>}`}`}</h4>
            <button 
                type='submmit'
                className='availableButton'
            // onClick={addToHotelDetails}
                       >Change search details
            </button>
    </h3>
    )
}