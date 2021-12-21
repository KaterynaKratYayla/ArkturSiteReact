import React, {useState, useEffect} from 'react'
// import {history} from '../../Front Page/History'
import axios from "axios"
import {useDispatch, useSelector} from 'react-redux'
import {useIntl, FormattedMessage} from 'react-intl'
import {getPosts} from "../../../../Redux/actions/list"
import { connect } from 'react-redux';
import { useLocation, Route, Switch, BrowserRouter, useHistory } from "react-router-dom";
// import {TourDetails} from './tourDetails';
import './SearchItems.css'
import {SearchInner} from '../../../Library/SearchPanneldel/SearchPanneldel'
import {getGeo, getGeneralGeo} from "../../../../Redux/actions/cities"
import moment from 'moment';
import ReactHtmlParser from 'react-html-parser'
import {ItemContent} from './ItemContent'
import {ItemObj} from './ItemObj'
import {ValidateQuery} from '../../Helpers/helper'
import {useWindowWidthAndHeight} from '../../Helpers/WindowResizeHook'
import {LoadingMessage} from '../../../Library/PageDevices/LoadingMessage'

import {Search} from '../../FirstPageofSearchModule/SearchResizersAndSwitchers/SearchFront'
// import 'moment/locale/uk'

moment.locale('uk')

// import 'moment-timezone';

export const GuestItem = ({tour, selector, list}) =>{

///получаю с помощью своиства истории (history) из компонента search результаты поиска - массив с одним объектом.
const {locale, messages} = useIntl();
let location = useLocation();
let history = useHistory();

let search_data = ValidateQuery(location)
console.log('GUEST ITEM LOCATION', location)

// // const searchResults = search_data.query.replace(/_/g, " ")
// console.log('[SEARCHRESULTS] : ' , searchResults , 'DATSENKO',search_data, search_data.title.replace(/_/g, " "))
console.log('DATSENKO',search_data)

const dispatch = useDispatch();
const test = useSelector(state => state)
const data = useSelector(state => state.posts.items)
const generalGeo = useSelector(state => state.cities.gen_locs)

const [rate, setRate] = useState([])
const [filtered1, setFiltered1] = useState([]);
const [geoindex, setGeoindex] = useState([]);

console.log('[TEST]', test)

  ///получаю из смарта тур имя, тур айди, сити имя, сити айди
  useEffect ( () => {
    dispatch (getGeneralGeo (locale));
  }, [])

  console.log('[GENERAL_GEO] , ' , generalGeo)///получаю из смарта тур имя, тур айди, сити имя, сити айди
  const [width, height] = useWindowWidthAndHeight()

  ///используется непосредственно для вывода названий туров на странице.
  ///если айди города, который мне приходит первоначально от Саши Ефица (классификатор contracts) не находится в данных, пришедших в результате поиска клиентом,
  ///то в переменную filtered возвращается тур айди из классификатора contracts, равное айди, пришедшему от клиентского поиска
  ///иначе возвращается сити айди из классификатора contracts, равное айди из поиска

  const filtered = generalGeo.filter(function(item){
      // if(item.city_id.indexOf(parseInt(search_data.id)) === -1){
        if(item.city_id === parseInt(search_data.id)){
        // return parseInt(item.tour_id) === parseInt(search_data.id)
        return parseInt(item.city_id)
      }
      // return parseInt(item.city_id) === parseInt(search_data.id)
      // return parseInt(item.city_id)
      return parseInt(item.tour_id) === parseInt(search_data.id)
    })

    console.log('[FILTERED]', filtered)

  ///отфильтровала данные поиска, чтобы получить только тур айди поиска
  const filtered_tour_id = filtered.map(function(item1){
    return item1.tour_id
  })

  // console.log('[FILTERED GEO] : ', filtered)
  console.log('[FILTERED TOUR_ID] : ', filtered_tour_id)

  const currentMonth = moment().format('YYYY-MM');
  const today = moment().format('YYYY-MM-DD');

  console.log('[TODAY MONTH]' , currentMonth, '[TODAY DATE]', today, '[TEST_DATE] : ' , search_data.date + '-01')
	const { user: currentUser } = useSelector((state) => state.auth);

    useEffect(() => {
        const ActionRQ = {
            "username":"Serodynringa",
            "password":"%tmMJZbABm6cB@tY",
            // "user_id" :1426,
            "user_id" :currentUser.id,
            "action":"GetPriceTourRQ",
            "data" :
                {
                    city_id: search_data.city_id,
                    date: currentMonth === search_data.date ? today : (search_data.date + '-01'),
                    window: 30,
                    tour_id: filtered_tour_id.length === 1? filtered_tour_id[0] : null ///если в ответ при поиске пришёл массив из более 1 айди тура (что может быть при поиске клиентом по городу, а не по туру), то, так как Смарт не принимает массив, данный параметр при передаче данных игнорируется (равен null). Иначе этот параметр в одном экземпляре и он тогда передаётся в Смарт и участвует в фильтрации
                }
        };

        // axios.post('https://hotels-ua.biz/interface/xmlsubj/', JSON.stringify({ActionRQ}))
        axios.post(`${process.env.REACT_APP_SMART_URL}interface/xmlsubj/`, JSON.stringify({ActionRQ}))
        // axios.post('http://smartbooker/interface/xmlsubj/', JSON.stringify({ActionRQ}))
            .then( res => {
                setRate(res.data)
                console.log('[SET_RATE]' , res.data)
            })
            .catch( error => {
                setRate(undefined)
                console.log( '[axios error] : ' , error)
            });

    }, []);

 console.log('[search_data] : ' , search_data)
 console.log('[SET_RATE] : ' , rate)

    return(
      <div>

        {/* <h3>Search Results</h3> */}
            <div>
              {/* <Search /> */}
            </div>
            <div class='TourSearchrendering_Wrapper'>
            <div>
              <h3 style={{marginTop:'2vw', 
                  color:'#003057',
                  fontFamily:'Arial',
                  fontSize:'30px',
                  fontWeight:'bold'}}>
                     {
                        messages&&messages.map((item)=>{
                          if(item.sitepage_region_id === 6&&item.sitepage_type_id === 25){
                            return (
                               <FormattedMessage id={item.title.map((item1)=>item1.text)}/>
                            )
                          }
                        })
                      } 
                  </h3>
            </div>

              <div>
                {
                  !rate||rate.length===0?  
                   (<div
                      style={{
                        position:'absolute', 
                              left: '40%',
                              transform: 'translate(0%, -50%)',
                              margin:'0'
                             }}
                         ><LoadingMessage loadingMessageClass='RateLoading'/></div>): 
                         (            
                  <ul className={`${width>1000? 'TourDescriptionUl':'TourDescriptionUlSmallScreen'}`}
                      style={{width:`${width>1000? width*0.65 : width*0.9}px`}}>
                    <>
                      {
                        filtered.length > 0  && filtered? (filtered.map((tour) => {
                          return (
                            <li key={tour.tour_id} className='descriptionLi'>
                                {/* <h3 style={{fontSize:'27px',
                                             color: '#001959'}}>
                                                    {tour.tour_name}
                                </h3> */}

                                 {/* <div class={`${width>1000?'TourDescriptionContent':'TourDescriptionContentSmallScreen'}`}>  */}
                                 {/* {
                                   <ItemContent
                                      tour = {tour}
                                   />
                                 }  */}

                                 {
                                  rate? (rate.map((tariff) => {
                                   if(parseInt(tour.tour_id) === parseInt(tariff.tour_id)){
                                    return (
                                      <>
                                      <h3 style={{fontSize:'27px',
                                             color: '#001959'}}>
                                                    {tour.tour_name}
                                </h3>
                                <div class={`${width>1000?'TourDescriptionContent':'TourDescriptionContentSmallScreen'}`}> 
                                        <ItemContent
                                           tour = {tour}
                                        />
                                      
                                    <ItemObj
                                       key={parseInt(tariff.tour_id)}
                                       tariff = {tariff}
                                       searchResults = {search_data}
                                       history={history}
                                       tour_name={tour.tour_name}
                                     />
                                     </div>
                                     </>
                                    )
                                  }
                                 })):
                                (<button className="onrequestButton">Sold out</button>)
                               }
                              {/* </div> */}
                              </li>
                           )
                          })
                          ) : (
                       <div className='noResultSearch'>
                          Your
                           Search returned no results. Please change your parameters and try once again.
                      </div> )
                  }
              </>
           </ul>
            )
           }
         </div>

       </div>
    </div>
  )
}

