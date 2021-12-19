import React , {useEffect, useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import {Route, NavLink, Link, BrowserRouter, Switch} from 'react-router-dom'
// import {Router} from 'react-router'
// import {UserOutlined} from '@ant-design/icons'
import Helmet from '../../Library/PageDevices/Helmet'

import {ContentPages,SitePageType,SitePageRegion,HotelPagesFooter} from '../PageComponents/ContentPages'
import {FORGROUPS} from '../PageComponents/TopMenuComponents'
// import {HOTELS, GALLERY, LOGO, SOCIAL, NotFound} from '../PageComponents/MiddleMenuComponents'
import {HomePage} from '../PageComponents/HomePage'
// import {TOURS} from '../PageComponents/DropDownTours'
import { PureContent } from '../PageComponents/MenuPageGenerator'
// import { Search } from '../FirstPageofSearchModule/SearchFront'
import { GuestItem } from '../SecondPageofSearchModule/Tours/GuestItem'
import { HotelItems } from '../SecondPageofSearchModule/Hotels/HotelItems'
import { TourDetails } from '../ThirdPageofSearchModule/TourDetails'
import {TopToursDetails} from '../PageComponents/TopToursDetails'
import {BookingForm} from '../BookingForm/BookingForm'
import {SingleHotel} from '../../Library/HotelsUkraineTestComponents/single_hotel'
import { TestCities } from '../../Library/HotelsUkraineTestComponents/test_cities'
import {CityHotels} from '../PageComponents/Footer/CityHotels'
import {OfflineSummary} from '../BookingForm/OfflineSummary'
import {HotelDetails} from '../ThirdPageofSearchModule/Hotels/HotelDetails'
import Login from "../../Library/Authorization/Login";
import Register from "../../Library/Authorization/Register";
import PaymentResult from "../LiqPay/PaymentResult";
import {changeLang} from "../../../Redux/actions/locale"
import { logout } from "../../../Redux/actions/auth";// import { findByLabelText } from '@testing-library/react'
import {useIntl} from 'react-intl'

import {NotFound} from '../PageComponents/MenuPageGenerator'

import {localizeRoutePath} from '../Helpers/localizeRoutePath' 
import {LocalizationRoute} from '../../Library/Localization/LocalizationRoute'
import {LocalizationSwitch} from '../../Library/Localization/LocalizationSwitch'

import config from '../../../Redux/config'

const supportedLangs = config.supportedLangs.join('|')

export const RouteSwitcher = (props) =>{
	// console.log('ROUTESWITCHER_PROPS',props)
	// const {locale} = useIntl();

	const dispatch=useDispatch();
	const lang = useSelector(state=>state.locale.locale)

	useEffect ( () => {
		dispatch (changeLang ());
	  }, [])

	const sitePageType = SitePageType();
	const sitePageRegion = SitePageRegion();
	const pages = ContentPages(lang);
	const htlpages=HotelPagesFooter();

console.log(localizeRoutePath('/'))
// console.log(localizeRoutePath('/'))

	console.log('SITEPAGES',pages )

	// console.log('LOCALE', locale)
	return(
		<>
		<LocalizationSwitch>
		
		  {/* <Switch> */}
		    <LocalizationRoute path='/helmet' component={Helmet} /> 
			<LocalizationRoute exact path='/sign_in' component={Login} />
			<LocalizationRoute exact path='/sign_up' component={Register} />
			<LocalizationRoute exact path='/payment_result' component={PaymentResult} />
			<LocalizationRoute exact path='/forgroups' component={FORGROUPS} /> 
			{/* /* <Route component={NotFound} /> */ }
			<LocalizationRoute exact path='/' component={HomePage} /> 
			{/* <Route exact path='/hotels_in_ukraine' component={SingleHotel}/> */ } 
			{/* <Route exact path='/testcities' component={TestCities} />  */} 
			{/* <LocalizationRoute path='/testcities' component={TestCities} /> */}
			 {/* <Route exact path='/search_results' component={GuestItem}/>  */ }
			<LocalizationRoute exact path='/search_results_tours' component={GuestItem}/>
			<LocalizationRoute exact path='/search_results_hotels' component={HotelItems}/>
			<LocalizationRoute exact path='/hotel_details' component={HotelDetails}/>
			<LocalizationRoute exact path='/tour_details' component={TourDetails} />
			<LocalizationRoute exact path='/booking_form' component={BookingForm}/>
			<LocalizationRoute exact path='/toptours' component={TopToursDetails} />
			<LocalizationRoute exact path='/offlineSummary' component={OfflineSummary}/>
			<LocalizationRoute exact path='/test' component={NotFound}/>
		
 			{
 			  pages&&pages.map((page)=>{
			    if(page.name.includes('Hotels')===true){
 					return(  								
						<LocalizationRoute exact path={`/sitepages_hotels`} component={CityHotels}/> 
						) 
		 			}
			    else {
					return(
						<LocalizationRoute exact path={`/sitepages`} component={PureContent}/>
						 )
					}
			    })
			} 
			
		 </LocalizationSwitch> 
	  </>   
	)
}
