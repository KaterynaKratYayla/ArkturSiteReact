import React, {useState, useEffect} from 'react'
// import {history} from '../../Front Page/History'
import axios from "axios"
import {useDispatch, useSelector} from 'react-redux'
import { connect } from 'react-redux';
import { Route, Switch, BrowserRouter, useHistory , useLocation} from "react-router-dom";
import {useIntl, FormattedMessage} from 'react-intl'

// import {TourDetails} from './tourDetails';
import {SearchInner} from '../../../Library/SearchPanneldel/SearchPanneldel'
import moment from 'moment';
import ReactHtmlParser from 'react-html-parser'
import {MinRate} from './MinRate'
import {TourDetails} from '../../ThirdPageofSearchModule/Tours/TourDetails'
import {ValidateQuery} from '../../Helpers/helper'
// import 'moment/locale/uk'
import {useWindowWidthAndHeight} from '../../Helpers/WindowResizeHook'

import './SearchItems.css'

moment.locale('uk')

export const ItemObj = ({tariff, searchResults,tour_name,pickedCurrency}) => {

  const {locale,messages} = useIntl();
  
  // console.log('CHECKING', tariff,searchResults,tour_name)
  const location = useLocation()
  const history = useHistory();

  let search_data = ValidateQuery(location)
  console.log('ITEM OBJ LOCATION', location)

  console.log('HISTORY CHECK', history)

  const [width, height] = useWindowWidthAndHeight()
    //фильтрую объект с тарифами, датами так, чтобы вывести первую встречающую дату каждого вида (к примеру, у меня пришло
    //в массиве 10 раз дата 2021-03-03, 3 раза дата 2021-03-04, 4 раза дата 2021-03-05 - я вывожу новый массив, где будет
    //объект в массиве, где первый раз встречается 2021-03-03, потом объект, где встречается 2021-03-04 первый раз, и т.д.)
    //это нужно, чтобы вывести список периодов для выбора

    const filtered_tour_dates = tariff.rate.filter((item1,index,array) =>
    array.findIndex(t => t.date === item1.date)===index)

       console.log('[FILTERED_TOUR_DATES] : ' , filtered_tour_dates)

    const [selection, setSelection] = useState(filtered_tour_dates[0].date);
    const [detailsList, setDetailsList] = useState([]);
    // const [detailsList, setdetailsList] = useState([{}]);
 
        console.log('[ItemObj TARIFF]', tariff)
        console.log('[ItemObj searchResults]', searchResults)
        // console.log('[ItemObj HISTORY]', history)

    function selectedPeriod (e) {
      console.log('SELECTED : ' , e.target.value)
      setSelection(e.target.value)
}

const addToDetails = (e) => {

  e.preventDefault()

  const outline = {
      id: tariff.tour_id,
      date: selection
  };

setDetailsList([outline]);
  // console.log('TEST TEST', e.view.history)
  // console.log('[DETAILS LIST] : ' , detailsList)

  const route_query = `${location.search},tour_name=${tour_name},tour_id=${tariff.tour_id},selection=${selection}`
  history.push(`/${locale}/tour_details/${route_query}`, [...detailsList, outline])
}

  return (
    <div class={`${width>1000?'div_TourItemObj':'div_TourItemObjSmallScreen'}`}>

      <div className='availablePeriods'>
       <div style={{fontSize: '2vh',fontWeight: 'bold'}}>Available dates : </div>
        <select 
            value={selection}
            onChange={selectedPeriod}
            style={{fontSize: '2vh',color:'#001959'}}>
          <>
            {
              filtered_tour_dates && filtered_tour_dates.map((filter,index)=>{
                return (
                  <option 
                   value={filter.date}
                    key={tariff.tour_id, '-' , index}>
                      {filter.date} -- {moment(filter.date).add(tariff.duration, 'days').format('YYYY-MM-DD')} ({tariff.duration} days)  
                    </option>
                )    
              })
            
            }
          </>
        </select>
    </div>

    <div className='minimumRate'>   
       <div style={{fontSize: '10px', color:"grey", fontStyle:'italic'}}>{selection}</div>
       <MinRate 
          selection={selection}
          datesArray={tariff.rate}
          pickedCurrency={pickedCurrency}
        />
      <button 
          type='submmit'
          className='availableButtonSecondPage'
          onClick={addToDetails}
          >
                     {
                        messages&&messages.map((item)=>{
                          if(item.sitepage_region_id === 7&&item.sitepage_type_id === 33){
                            return (
                               <FormattedMessage id={item.title.map((item1)=>item1.text)}/>
                            )
                          }
                        })
                      }
      </button> 
      <div style={{fontSize: '10px', color:"grey", fontStyle:'italic'}}>{tariff.tour_id}</div> 
    </div>

          <>       
              {/* {detailsList.length > 0 && ( */}
        {/* <TourDetails  */}
          {/* selection={selection}/> */}
             {/* ) */}
           {/* } */}
        </>

  </div> 
   )
  }
  