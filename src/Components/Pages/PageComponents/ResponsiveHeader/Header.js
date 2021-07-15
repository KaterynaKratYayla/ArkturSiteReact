import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import {Route, NavLink, Link, BrowserRouter, Switch} from 'react-router-dom'
import {Router} from 'react-router'
import {UserOutlined} from '@ant-design/icons'

import {NavComponent} from './NavComponent'
import {RouteSwitcher} from '../../RoutesAndLinks/RouteSwitcher'
import {SitePagesList} from '../../RoutesAndLinks/SitePagesList'
import {COVID, ABOUT, CONTACTUS, SIGNIN, FORGROUPS} from '../TopMenuComponents'
import {HOTELS, GALLERY, LOGO, SOCIAL, NotFound} from '../MiddleMenuComponents' 
import {HomePage} from '../HomePage'
import {TOURS} from '../DropDownTours'
import { PureContent } from '../MenuPageGenerator'
import { Search } from '../../FirstPageofSearchModule/SearchFront'
// import { GuestItem } from '../../SecondPageofSearchModule/GuestItem'
// import { TourDetails } from '../../ThirdPageofSearchModule/TourDetails'
import {TopToursDetails} from '../TopToursDetails'
// import Helmet from '../../Helmet'

import {HomeOutlined} from '@ant-design/icons'
import {ContentPages,SitePageType,SitePageRegion} from '../ContentPages'
// import {SingleHotel} from '../../../Library/HotelsUkraineTestComponents/single_hotel'
// import { TestCities } from '../../../Library/HotelsUkraineTestComponents/test_cities'
import {LargeScreensNavBar} from './LargeScreensNavBar'
import SmallScreensNavBar from './SmallScreensNavBar'
import {useWindowWidthAndHeight} from '../../Helpers/WindowResizeHook'
import {useLocation} from 'react-router-dom'
import Login from "../../../Library/Authorization/Login";
import Register from "../../../Library/Authorization/Register";
import { logout } from "../../../../Redux/actions/auth";// import { findByLabelText } from '@testing-library/react'
import ArkturDMClogo from '../../../Library/Images/ArkturDMClogo.svg'

import './header.css'
// import './ResponsiveCSS.css'

export const TopMenu = () => {

	const { user: currentUser } = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const logOut = () => {
		dispatch(logout());
	};

	const [width, height] = useWindowWidthAndHeight();

	const pages = ContentPages();
	console.log('[PAGES HEADER]', pages)
	
	const sitePageType = SitePageType();
	const sitePageRegion = SitePageRegion();

	return (
	<header class='wrapperMain'>	

	   		<div className='topMenu'>

				<div className='topMenu_right'>
						{currentUser ? (
						  <NavLink exact to='/testcities' activeClassName='active'>
							  <div style={{display:'flex',
							    	 flexDirection: 'row'}}>
								  <UserOutlined className='UserOutlinedIcon'/>
								  <div>MY ACCOUNT</div>
							</div>
						  </NavLink>
						) : true}

							<>
							  { 
								sitePageType&&sitePageType.map((item)=>{
									return (
									  sitePageRegion&&sitePageRegion.map((item1)=>{
										if(item.sitepage_region_id === item1.sitepage_region_id && item1.sitepage_region_name.includes("Header") && item.sitepage_type_name.includes("UPPER")){
											return(
												<div>
													{/* <h3>{item.sitepage_type_name}</h3> */}
													<NavComponent 
													 sitepage_type={item}
													 linkClassName={"Upper"}/>
												</div> 
						 					)
						   				  }
										})
									  )									
									})
					   			}
							</>		 



				  
				<div style={{marginTop:'auto',marginBottom:'auto'}}>
					{currentUser ? (
						<NavLink exact to='/' activeClassName='active' onClick={logOut}>LOG OUT</NavLink>
					) : (
						<NavLink exact to='/sign_in' activeClassName='active'>SIGN IN</NavLink>
					)}					
				</div>	

				<Link exact to='/'><HomeOutlined className='HomeIcon'/></Link>
					
				</div>

			</div>

	 		<div className='middleMenu'>
					{/* <div class='middleMenu_left'> */}
			   <NavLink exact to='/' >
					<img class='ArkturDMClogo'
  					    src={ArkturDMClogo} 
					 	alt='Arktur DMC logo'/>
			   </NavLink>	 


			   <>
							  { 
								sitePageType&&sitePageType.map((item)=>{
									return (
									  sitePageRegion&&sitePageRegion.map((item1)=>{
										if(item.sitepage_region_id === item1.sitepage_region_id && item1.sitepage_region_name.includes("Header") && item.sitepage_type_name.includes("MIDDLE")){
											return(
												<>
												 { width > 1000 ?
				
													<LargeScreensNavBar 
															// pages={pages}/>
															sitepage_type={item}/>
													:
													<SmallScreensNavBar 
															navClass="nav-small"
															linkClassName = "nav-small-link"
															// pages={pages}
															sitepage_type={item}
															width={width}/>
													} 
												</>
						 					)
						   				  }
										})
									  )									
									})
					   			}
							</>	

	
			  </div>					

		   <RouteSwitcher />
		</header> 
		
	)
 }
