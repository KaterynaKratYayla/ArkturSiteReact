import React, {useState, useEffect} from 'react'
// import {history} from '../../Front Page/History'
import axios from "axios"
import {useDispatch, useSelector} from 'react-redux'
import { connect } from 'react-redux';
import { Route, Switch, BrowserRouter, useHistory } from "react-router-dom";
// import {TourDetails} from './tourDetails';
import './SearchItems.css'
import {SearchInner} from '../../../Library/SearchPanneldel/SearchPanneldel'
import moment from 'moment';
import ReactHtmlParser from 'react-html-parser'
// import 'moment/locale/uk'

moment.locale('uk')
  
  export const MinRate = ({selection, datesArray,pickedCurrency}) =>{

    console.log('[SELECTION]' , selection, datesArray)

    const currencies = useSelector(state=>state.currency.currencies)

    let exchangeRate;

    currencies.forEach((curr)=>{
      if(curr.name === pickedCurrency)
        exchangeRate = parseInt(curr.value)
    })
   
                    const minRateValue = datesArray.filter(function(item){
                        if(selection === item.date){
                          return true;
                         }
                          else return false;
                        }).sort(function(a,b){
                          // if(a.n_available > 0 || b.n_available > 0){
                            return (a.n_value - b.n_value)
                          // }                          
                        })
                      
                      console.log('[SORTED ARRAY] : ' , minRateValue[0])

    return(
      <div className='minimumRate_details'>Rates from {pickedCurrency} {Math.round(minRateValue[0].price/exchangeRate)}</div>
    )
  }
  