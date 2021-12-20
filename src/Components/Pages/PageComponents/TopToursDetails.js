import React, {useState, useEffect} from 'react'
import { useHistory, useLocation } from "react-router-dom";
import axios from "axios"
import {useDispatch, useSelector} from 'react-redux'
import ReactHtmlParser from 'react-html-parser'
// import ReactHtmlParser from 'react-html-parser'
import {Container, Row, Col} from 'react-bootstrap'
import {useIntl} from 'react-intl'

import {Search} from '../FirstPageofSearchModule/SearchResizersAndSwitchers/SearchFront'
import {CartGallery} from '../../Library/PageDevices/CartGallery/CartGallery'
import {ValidateQuery} from '../Helpers/helper'
import {HomePage} from './HomePage'
import {getGeneralGeo, getTopTours} from '../../../Redux/actions'
import ArkturCollection from '../../Library/Images/ArkturCollection.jpg'
import {useWindowWidthAndHeight} from '../Helpers/WindowResizeHook'

import './TopToursDetailsCSS.css'

export const TopToursDetails = (props) =>{

    const {locale} = useIntl();

    const [ttDetails, setTTDetails] = useState()  
    let location = useLocation();
    let history = useHistory();

    let search_data = ValidateQuery(location)

    const [width, height] = useWindowWidthAndHeight();

    console.log('Tour Details', location)
    console.log('Seach Details', search_data)
    
    useEffect ( () => {
    axios.get(`${process.env.REACT_APP_SMART_URL}interface/content?id=${search_data.tour_id}&language=${locale}`)
      .then( res => {
        setTTDetails(res.data)
        })
      
    .catch( error => {
        setTTDetails(undefined)
      console.log( '[axios error] : ' , error)
       });
   }, []);

   console.log('[ttDetails]', ttDetails)

   if( !ttDetails ){
    return <div> <HomePage /></div>
}

    return(
        <div>
          <Search />
            <div class={`${width>1000?'TopToursDetailsBlock':'TopToursDetailsBlockSmallScreen'}`}
                  style={{width:`${width*0.9}px`}}>

                {
                 ttDetails && ttDetails.map((item) =>{
               
                    if(item.content_name === "Image"){
                      return (
                     <div>
                          <h2 style={{
                                color: '#102D69',
                                fontFamily: "Arial",
                                fontSize: '30px',
                                fontWeight: 'bold',
                                textAlign:'center',
                                marginTop: '4vh'
                            }}>
                                {item.contract_name}
                          </h2>

                          <div>
                             <CartGallery photos={item}
                                          photoHeight={'60vh'}
                                          // photoWidth={'80%'}
                                          smallImageHeight={'15vh'}
                                          />
                          </div>
                         </div>
                        )}
                      
                    else if(item.content_name === 'Body'){
                        return (
                            <div>
                                {ReactHtmlParser(item.text)}
                            </div>
                          )
                        }
                      }                    
                  )
                }
              </div>
             
        </div>
    )
}