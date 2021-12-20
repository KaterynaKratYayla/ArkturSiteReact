import React, {useState, useEffect} from 'react'
import axios from "axios"
import {useDispatch, useSelector} from 'react-redux'
import {getContent} from "../../../../Redux/actions/content"
import { Route, Switch, BrowserRouter, useHistory } from "react-router-dom";
import {useIntl} from 'react-intl'

import './SearchItems.css'
import {SearchInner} from '../../../Library/SearchPanneldel/SearchPanneldel'
import {LoadingMessage} from '../../../Library/PageDevices/LoadingMessage'
import moment from 'moment';
import ReactHtmlParser from 'react-html-parser'
import {useWindowWidthAndHeight} from '../../Helpers/WindowResizeHook'

import 'moment/locale/uk'

moment.locale('uk')

export const ItemContent = ({tour})=>{
  // console.log('[TOUR]' , tour)

  const {locale} = useIntl();

  const [result, setResult] = useState('')
  const [width, height] = useWindowWidthAndHeight()

  useEffect ( () => {
    axios.get(`${process.env.REACT_APP_SMART_URL}interface/content?id=${tour.tour_id}&language=${locale}`)
      .then( res => {
        setResult(res.data)
        })
      
    .catch( error => {
      setResult(undefined)
      console.log( '[axios error] : ' , error)
       });
   }, []);

   console.log('[RESULT] : ' , result)

  //   useEffect ( () => {
  //     dispatch (getContent (tour.tour_id));
  //   },[]);

    if( !result ){
      return <div> <LoadingMessage noTextMessage={true}
                                   loadingMessageClass={'contentLoadingWheel'}/>
              </div>
  }

   return(
     
    <div style={{paddingRight: '2vw'}}>
      <ul class='Ul_ItemContent'>
        <>
      {
       result ? (result.map((trip) =>{
        if(trip.content_name === 'Summary'){
          return (
              <li class='Li_ItemContent'
                  style={{width:`${width>1000?'50%':'60%'}`}}>
                  {ReactHtmlParser(trip.text)}
              </li>
            )
          }
          
          else if(trip.content_name === 'Image'){
            return (
            <li
            style={{
              listStyleType:'none',
              textAlign: 'left',
              width:`${width>1000?'50%':'40%'}`
              
            }}
            >
                  <img 
                      // class='imageSearchrender'
                     style = {{
                      width: '100%',
                      borderRadius: '5px',
                      height: '20vw'  
                      }}
                      src={'http://' + trip.text[2]}/> 
              </li>
            )
          }
          
         }
       )) : (
        // <div>{tour.name}{tour.duration}</div> 
        <div>Content is not available</div>
       )
     }
      </>
     </ul>

    </div>
   )
}
  