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
import { logout } from "../../../Redux/actions/auth";// import { findByLabelText } from '@testing-library/react'

export const RouteSwitcher = () =>{
	const sitePageType = SitePageType();
	const sitePageRegion = SitePageRegion();
	const pages = ContentPages();
	const htlpages=HotelPagesFooter();

	console.log('SITEPAGES',pages )

	return(

		 <Switch>
		 {/* <Route path='/helmet' component={Helmet} /> */}
			<Route exact path='/sign_in' component={Login} />
			<Route exact path="/sign_up" component={Register} />
			<Route exact path="/payment_result" component={PaymentResult} />
			<Route exact path='/forgroups' component={FORGROUPS} />
		{/* <Route component={NotFound} /> */}
			<Route exact path='/' component={HomePage} />
			<Route exact path='/hotels_in_ukraine' component={SingleHotel}/>
			<Route exact path='/testcities' component={TestCities} /> 
			<Route exact path='/search_results_tours' component={GuestItem}/>
			<Route exact path='/search_results_hotels' component={HotelItems}/>
			{/* <Route exact path='/testcities' component={TestCities} />
			<Route exact path='/search_results' component={GuestItem}/> */}
			<Route exact path='/hotel_details' component={HotelDetails}/>
			<Route exact path='/tour_details' component={TourDetails} />
			<Route exact path='/booking_form' component={BookingForm}/>
			<Route exact path='/toptours' component={TopToursDetails} />
			<Route exact path='/offlineSummary' component={OfflineSummary}/>
			
			{/* </Switch> */}
				{/* <Switch> */}
				<>
 					{
 						pages&&pages.map((page)=>{
						//  return(
							// htlpages&&htlpages.map((htlpage)=>{
						     if(page.name.includes('Hotels')){
 							  return(
 								// <Route exact path={`/${page.title.map((item1)=>item1.text.replace(/\s/g , '-'))}`} component={CityHotels}/>
								<Route path={`/${page.name.replace(/\s/g , '-')}`} component={CityHotels}/>
							   )
		 	  				}
							else {
							   return(
								   <Route exact path={`/${page.title.map((item1)=>item1.text.replace(/\s/g , '-'))}`} component={PureContent}/>
								)
							   }
							})
						 	
						   }

			  </>
 			</Switch>

	)
}
