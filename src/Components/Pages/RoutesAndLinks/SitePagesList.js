import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Route, NavLink, Link, BrowserRouter, Switch} from 'react-router-dom'
import {Router} from 'react-router'
import Helmet from '../../Library/PageDevices/Helmet'
import {Container, Row, Col} from 'react-bootstrap'
import axios from "axios"

import {ContentPages} from '../PageComponents/ContentPages'


export const SitePagesList = ({sitepage_type}) =>{
    const pages = ContentPages();
      return(
          <>
            <ul>
              {
                  pages.length>0?pages.map((page)=>{
                   if(sitepage_type.sitepage_type_id === page.sitepage_type_id){
                      return(
                          <li key={page.id}>
                              <h2>
                                          <Link to={`/${page.title.map((item1)=>item1.text)}/?id=${page.id}`}>
                                          {page.title.map((item1)=>item1.text)}</Link> 
                              </h2>
                          </li>
                      )
                   }
                  }):(null)
              }	
              </ul>
              
          </>
      
      )
  }
  