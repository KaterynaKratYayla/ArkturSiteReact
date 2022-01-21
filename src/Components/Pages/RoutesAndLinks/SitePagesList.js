import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Route, NavLink, Link, BrowserRouter, Switch} from 'react-router-dom'
import {Router} from 'react-router'
import {FormattedMessage} from 'react-intl';
import Helmet from '../../Library/PageDevices/Helmet'
import {Container, Row, Col} from 'react-bootstrap'
import {changeLang} from '../../../Redux/actions/locale'
import axios from "axios"
import {localizeRoutePath} from '../Helpers/localizeRoutePath'
import { LocalizationNavLink } from '../../Library/Localization/LocalizationNavLink';
import {useIntl} from 'react-intl'

import {ContentPages} from '../PageComponents/ContentPages'
import { locales } from 'moment';


export const SitePagesList = ({sitepage_type}) =>{
    const {locale,messages} = useIntl();

    const dispatch=useDispatch();
	const lang = useSelector(state=>state.locale.locale)

	useEffect ( () => {
		dispatch (changeLang ());
	  }, [])
     
      const pages = ContentPages(locale);

      console.log('LOCALE', locale)

      return(
          <>
            <ul>
              {
                  messages.length>0?messages.map((page)=>{
                      console.log('PAGE',page)
                   if(sitepage_type.sitepage_type_id === page.sitepage_type_id&&sitepage_type.sitepage_type_id!==7){
                    if(page.name.includes('Hotels')===true){
                      return(
                          <li key={page.id}>
                              <h2>
                                     <LocalizationNavLink to={`/sitepages_hotels/?name=${page.name.replace(/\s/g , '-').toLowerCase()},id=${page.id}`}> 
                                         <FormattedMessage id={page.title.map((item1)=>item1.text)}/>  
                                    </LocalizationNavLink>  
                              </h2>
                          </li>
                      )
                   }
                   else{
                    return(
                        <li key={page.id}>
                            <h2>
                                   <LocalizationNavLink to={`/sitepages/?name=${page.name.replace(/\s/g , '-').toLowerCase()},id=${page.id}`}> 
                                       <FormattedMessage id={page.title.map((item1)=>item1.text)}/>  
                                  </LocalizationNavLink>  
                            </h2>
                        </li>
                    )
                   }
                }
                  }):(React.Fragment)
              }	
              </ul>
              
          </>
      
      )
  }
  