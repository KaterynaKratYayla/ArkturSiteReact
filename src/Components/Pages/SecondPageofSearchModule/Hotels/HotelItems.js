import React, {useState, useEffect} from 'react'
// import {history} from '../../Front Page/History'
import axios from "axios"
import {useDispatch, useSelector} from 'react-redux'
// import {getPosts} from "../../../../Redux/actions/list"
// import { connect } from 'react-redux';
import { useLocation, Route, Switch, BrowserRouter, useHistory } from "react-router-dom";
// import {TourDetails} from './tourDetails';
import {SearchInner} from '../../../Library/SearchPannel/SearchPannel'
import {getGeneralHotels} from "../../../../Redux/actions/hotels"
import moment from 'moment';
// import ReactHtmlParser from 'react-html-parser'
import {HotelContent} from './HotelContent'
import {HotelRates} from './HotelRates'
import {ValidateQuery} from '../../Helpers/helper'

import {Search} from '../../FirstPageofSearchModule/SearchFront'
import { LoadingMessage } from '../../../Library/PageDevices/LoadingMessage';
// import 'moment/locale/uk'

import './HotelItemsCSS.css'

moment.locale('uk')

// import 'moment-timezone';

export const HotelItems = ({title}) =>{

console.log('HOTEL_TITLE', title)

///получаю с помощью своиства истории (history) из компонента search результаты поиска - массив с одним объектом.
let location = useLocation();
let history = useHistory();

let search_data = ValidateQuery(location)
console.log('HOTEL ITEM LOCATION', location)

// // const searchResults = search_data.query.replace(/_/g, " ")
// console.log('[SEARCHRESULTS] : ' , searchResults , 'DATSENKO',search_data, search_data.title.replace(/_/g, " "))
console.log('DATSENKO',search_data.city_id)

const dispatch = useDispatch();
const generalHotelItems = useSelector(state => state.hotels.general_hotels)

const [hotelRate, setHotelRate] = useState([])
const [filtered1, setFiltered1] = useState([]);
const [geoindex, setGeoindex] = useState([]);
const [timing,setTiming] = useState();

// console.log('[TEST]', test)

  ///получаю из смарта тур имя, тур айди, сити имя, сити айди
  useEffect ( () => {
    dispatch (getGeneralHotels ());
  }, [])

  console.log('[GENERAL_HOTELS] , ' , generalHotelItems)///получаю из смарта имя отеля, айди отеля, сити имя, сити айди

  ///используется непосредственно для вывода названий отелей на странице.
  ///если айди города, который мне приходит первоначально от Саши Ефица (классификатор contracts) не находится в данных, пришедших в результате поиска клиентом,
  ///то в переменную filtered возвращается тур айди из классификатора contracts, равное айди, пришедшему от клиентского поиска
  ///иначе возвращается сити айди из классификатора contracts, равное айди из поиска

  const filtered_hotel_items = generalHotelItems.filter(function(item){
      if(item.city_id.indexOf(search_data.id) === -1){
        return item.hotel_id === search_data.id
      }
      return item.city_id === search_data.id
    })

    console.log('[FILTERED_GENERAL_HOTELS]', filtered_hotel_items)

  ///отфильтровала данные поиска, чтобы получить только айди отеля поиска
  const filtered_hotel_id = filtered_hotel_items.map(function(item1){
    return item1.hotel_id
  })

  // console.log('[FILTERED GEO] : ', filtered)
  console.log('[FILTERED_HOTEL_ID] : ', filtered_hotel_id)

  const currentMonth = moment().format('YYYY-MM');
  const today = moment().format('YYYY-MM-DD');

  console.log('[TODAY MONTH]' , currentMonth, '[TODAY DATE]', today, '[TEST_DATE] : ' , search_data.date + '-01')

  useEffect(() => {
    const ActionRQ = {
        "username":"Serodynringa",
        "password":"%tmMJZbABm6cB@tY",
        "user_id" :1426,
        "action":"GetPriceHotelRQ",
        "data" :
            {
              "start" : search_data.start, // date of arrival
              "end" : search_data.end, // date of departure
              "city_id" : search_data.city_id,
              // search_data.city_id,         // Id of city - can`t be equel to zero
              "hotel_id" : search_data.city_id === search_data.id? 0 : search_data.id ,
              // search_data.city_id === search_data.id? 320 : search_data.id,       // Id of hotel: if hotel_id = 0, must return all hotels of the pointed city in response
              "numberofunits" : search_data.rooms,    // Quantity of rooms, 1 by default, NOT OBLIGATORY
              "calculation_data" :
                    {
                      "adults" : search_data.adults,
                      "children" : search_data.children,
                      // "child_discount" : search_data.c !== 0? 0.5: null,
                      "lower_cost_limit" : 0.00, // lower cost limit of room in USD, NOT OBLIGATORY
                      "upper_cost_limit" : 200.00 // upper cost limit of room in USD, NOT OBLIGATORY
                    }
            }
        };

    // axios.post('https://hotels-ua.biz/interface/xmlsubj/', JSON.stringify({ActionRQ}))
    axios.post('http://smartbooker.biz/interface/xmlsubj/', JSON.stringify({ActionRQ}))
    // axios.post('http://smartbooker/interface/xmlsubj/', JSON.stringify({ActionRQ}))
        .then(response => {
          for(let key in response.data.data){
            if(key === 'hotels'){
              setHotelRate(response.data.data[key])
            }

          }
         }
        )
        .catch( error => {
          setHotelRate(undefined)
          console.log( '[axios error] : ' , error)
           });
    }, []);

console.log('GEN_HOTEL_RATE',hotelRate)

    return(
      <div>

        {/* <h3>Search Results</h3> */}
            <div>
              <Search />
            </div>
            <div class='searchrendering_Wrapper'>
            <div>
              <h3 style={{marginTop:'2vw',
                          color:'#003057',fontFamily:'Arial',fontSize:'30px',fontWeight:'bold'}}>Search Results</h3>
            </div>
          {/* <div  style={{width:'100%',marginLeft:'auto',marginRight:'auto'}}> */}

              {/* <SearchInner /> */}
           {/* </div> */}

                {/* <div>{history.location.pathname}</div> */}
              <div>
                {
                  hotelRate.length===0?
                   (<div
                      style={{position:'absolute',
                              zIndex: '1000',
                              top: '70%',
                              left: '50%',
                              transform: 'translate(-50%, -50%)',
                             }}
                         ><LoadingMessage loadingMessageClass='RateLoading'/></div>):
                         (
                           <>
                            <h2
                              style={{color:'#001959',
                              backgroundColor:'rgb(255, 239, 131)',
                              // border:'2px solid #001959',
                              borderRadius:'5px',
                              marginLeft: 'auto',
                              marginRight: 'auto',
                              textAlign: 'center',
                              paddingTop:'2vh',
                              paddingBottom: '2vh'
                            }}>
                              {/* {filtered_hotel_items[0].city_name} : {filtered_hotel_items.length} properties found */}
                                City Name : {filtered_hotel_items.length} properties found
                            </h2>

                               <ul className='HotelDescriptionUl'>
                                 <>
                                    {
                                      hotelRate.length>0 && hotelRate? (hotelRate.map((hotelTariff) => {
                                         if(hotelTariff){
                                           return (
                                             <li key={hotelTariff.hotel_id} className='HotelDescriptionLi'>
                                                <HotelRates
                                                   key={hotelTariff.hotel_id}
                                                   hotelTariff = {hotelTariff}
                                                   hotelRooms = {hotelTariff.room_rates}
                                                   searchResults = {search_data}
                                                   history={history}
                                                   hotelName={hotelTariff.hotel_name}
                                                />

                                                {
                                                  filtered_hotel_items.length > 0  && filtered_hotel_items? (filtered_hotel_items.map((hotel) => {
                                                   if(hotel.hotel_id === hotelTariff.hotel_id){
                                                     if(hotel){
                                                      return (
                                                          <HotelContent
                                                              hotel = {hotel}
                                                              hotelTariff = {hotelTariff}
                                                           />
                                                          )
                                                        }
                                                       }
                                                      }
                                                     )
                                                    ):null
                                                  }
                                                </li>
                                                 )
                                                }
                                              }
                                             )):
                                            null
                                          }


                                       {/* {
                                         filtered_hotel_items.length > 0  && filtered_hotel_items? (filtered_hotel_items.map((hotel) => {
                                          return (
                                            <li key={hotel.hotel_id} className='HotelDescriptionLi'>
                                               {
                                                 <HotelContent
                                                    hotel = {hotel}
                                                  />
                                               }
                                                {
                                              hotelRate? (hotelRate.map((hotelTariff) => {
                                               if(hotel.hotel_id === hotelTariff.hotel_id){

                                                return (
                                                 <HotelRates
                                                   key={hotelTariff.hotel_id}
                                                   hotelTariff = {hotelTariff}
                                                   hotelRooms = {hotelTariff.rooms}
                                                   searchResults = {search_data}
                                                   history={history}
                                                   hotel_name={hotel.hotel_name}
                                                 />
                                                )

                                              }
                                             }
                                              )
                                            ):
                                            (<button className="onrequestButton">Sold out</button>)
                                          }

                                          </li>
                                        )
                                       }
                                       )) : (
                                      <div className='noResultSearch'>
                                          Your Search returned no results. Please change your parameters and try once again.
                                     </div> )
                              }                      */}

                              </>
                           </ul>
                         </>
                      )
                }
            </div>
       </div>
    </div>
  )
}

