import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import {Route, NavLink, Link, BrowserRouter, Switch} from 'react-router-dom'
import {Router} from 'react-router'
import {UserOutlined} from '@ant-design/icons'

import {COVID, ABOUT, CONTACTUS, SIGNIN, FORGROUPS} from '../PageComponents/TopMenuComponents'
import {HOTELS, GALLERY, LOGO, SOCIAL, NotFound} from '../PageComponents/MiddleMenuComponents' 
import {HomePage} from '../PageComponents/HomePage'
import {TOURS} from '../PageComponents/DropDownTours'
import { PureContent } from '../PageComponents/MenuPageGenerator'
import { Search } from '../FirstPageofSearchModule/SearchFront'
import { GuestItem } from '../SecondPageofSearchModule/GuestItem'
import { TourDetails } from '../ThirdPageofSearchModule/TourDetails'
import {TopToursDetails} from '../PageComponents/TopToursDetails'
import {BookingForm} from '../BookingForm/BookingForm'
// import Helmet from '../../Helmet'
import {SingleHotel} from '../../Library/HotelsUkraineTestComponents/single_hotel'
import { TestCities } from '../../Library/HotelsUkraineTestComponents/test_cities'
import Login from "../../Library/Authorization/Login";
import Register from "../../Library/Authorization/Register";
import { logout } from "../../../Redux/actions/auth";// import { findByLabelText } from '@testing-library/react'

export const RouteSwitcher = () =>{
	return(
		<Switch>

		{/* <Route path='/helmet' component={Helmet} /> */}
	 
		<Route exact path='/covid-19' component={PureContent} />
		<Route exact path='/about' component={PureContent} />
		<Route exact path='/contact_us' component={CONTACTUS} />
		<Route exact path='/sign_in' component={Login} />    
		<Route exact path="/sign_up" component={Register} />
		<Route exact path='/forgroups' component={FORGROUPS} />
		{/* <Route component={NotFound} /> */}

			<Route exact path='/' component={HomePage} />
			<Route exact path='/hotels_in_ukraine' component={SingleHotel}/*{HOTELS}*/ />					
			<Route exact path='/gallery' component={PureContent} />  
			<Route exact path='/testcities' component={TestCities} /> 
			<Route exact path='/search_results' component={GuestItem}/>
			<Route exact path='/tour_details' component={TourDetails} />
			<Route exact path='/booking_form' component={BookingForm}/>
			<Route exact path='/toptours' component={TopToursDetails} />
			<Route exact to='/Kyiv' component={PureContent}/>
			<Route exact to='/Odesa' component={PureContent}/>
			<Route exact to='/Lviv' component={PureContent}/>
			<Route exact to='/Kharkiv' component={PureContent}/>
			<Route exact to='/Vinnitsya' component={PureContent}/>
			<Route exact to='/Bukovel_Resort' component={PureContent}/>
			<Route exact to='/Mariupol' component={PureContent}/>
	
	</Switch>
	)
}