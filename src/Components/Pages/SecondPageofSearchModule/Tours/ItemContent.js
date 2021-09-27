import React, {useState, useEffect} from 'react'
import axios from "axios"
import {useDispatch, useSelector} from 'react-redux'
import {getContent} from "../../../../Redux/actions/content"
import { Route, Switch, BrowserRouter, useHistory } from "react-router-dom";
import './SearchItems.css'
import {SearchInner} from '../../../Library/SearchPanneldel/SearchPanneldel'
import {LoadingMessage} from '../../../Library/PageDevices/LoadingMessage'
import moment from 'moment';
import ReactHtmlParser from 'react-html-parser'
import {useWindowWidthAndHeight} from '../../Helpers/WindowResizeHook'

import 'moment/locale/uk'

moment.locale('uk')

export const ItemContent = ({tour})=>{
  console.log('[TOUR]' , tour)
  const [result, setResult] = useState('')
  // const [id, setId] = useState([])
  const [width, height] = useWindowWidthAndHeight()
// const contents = useSelector(state => state.content.content)
// const dispatch = useDispatch();

// console.log('[CONTENTS]', contents )

  useEffect ( () => {
    axios.get(`https://hotels-ua.biz/interface/content?id=${tour.tour_id}&language=en`)
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

  //   if( !contents ){
  //     return <div> Loading...</div>
  // }

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
        <LoadingMessage/>
       )
     }
      </>
     </ul>
    {/* <div> */}
      {/* HI CONTENT */}
    </div>
   )
}
  
// const mapStateToProps = (state, ownProps) => {
//   const {content,loaded,errors} = state.content;

//   return({
//     data: state.content.content,
//     loaded: state.content.loaded,
//     errors: state.content.errors
//   })
// }

// const mapDispatchToProps = (dispatch, ownProps) => ({
//   getContent: () =>{
//     displatch (getContent());
//   }
// })

// export default connect (mapStateToProps, mapDispatchToProps)