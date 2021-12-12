import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import {Route, NavLink, Link, BrowserRouter, Switch} from 'react-router-dom'
import {Router} from 'react-router'
import {useIntl} from 'react-intl'
import {FormattedMessage} from 'react-intl';
import {UserOutlined} from '@ant-design/icons'

import {NavComponent} from './NavComponent'
import {RouteSwitcher} from '../../RoutesAndLinks/RouteSwitcher'
import {SitePagesList} from '../../RoutesAndLinks/SitePagesList'
import {HomePage} from '../HomePage'
import {TOURS} from '../DropDownTours'
import { PureContent } from '../MenuPageGenerator'
import { Search } from '../../FirstPageofSearchModule/SearchResizersAndSwitchers/SearchFront'
import {TopToursDetails} from '../TopToursDetails'
// import Helmet from '../../Helmet'

import {HomeOutlined} from '@ant-design/icons'
import {ContentPages,SitePageType,SitePageRegion} from '../ContentPages'
import {LargeScreensNavBar} from './LargeScreensNavBar'
import SmallScreensNavBar from './SmallScreensNavBar'
import {useWindowWidthAndHeight} from '../../Helpers/WindowResizeHook'
import {useLocation} from 'react-router-dom'
import Login from "../../../Library/Authorization/Login";
import Register from "../../../Library/Authorization/Register";
import { logout } from "../../../../Redux/actions/auth";// import { findByLabelText } from '@testing-library/react'
import ArkturDMClogo from '../../../Library/Images/ArkturDMClogo.svg';
import {changeLang} from '../../../../Redux/actions/locale'
import { LocalizationNavLink } from '../../../Library/Localization/LocalizationNavLink';
import {LangSelectionTool} from '../../../Library/Localization/LangSelectionTool'
import {getCurrency} from '../../../../Redux/actions/currency'

import './header.css'
// import './ResponsiveCSS.css'

export const TopMenu = () => {

	const { user: currentUser } = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const logOut = () => {
		dispatch(logout());
	};

	const [width, height] = useWindowWidthAndHeight();

	const lang = useSelector(state=>state.locale.locale)
	const currency = useSelector(state=>state.currency.currencies)
  
	useEffect ( () => {
		  dispatch (changeLang ());
		}, [])

	useEffect ( () => {
		dispatch (getCurrency());
	  }, [])
  
	const pages = ContentPages(lang);

	// const pages = ContentPages('uk');
	console.log('[PAGES HEADER]', pages)

		//////////////////////////////////////////////////////
	// const current_locale = useSelector(state => state.localization.current_locale);
	// const locales = useSelector(state => state.localization.locales);
	
	const sitePageType = SitePageType();
	const sitePageRegion = SitePageRegion();

	return (
	<header class='wrapperMain'>	
	   		<div className='topMenu'>
			    
				<div className='topMenu_right'>
				<a href='mailto:inquiry@arktur.ua'>inquiry@arktur.ua</a>
						{currentUser ? (
						  <LocalizationNavLink exact to={`/${lang}/testcities`} activeClassName='active'>
							  <div style={{display:'flex',
							    	 flexDirection: 'row'}}>
								  <UserOutlined className='UserOutlinedIcon'/>
								
								  <div>MY ACCOUNT</div>
							</div>
						  </LocalizationNavLink>
						) : true}

							<>
							  { 
								sitePageType&&sitePageType.map((item)=>{
									return (
									  sitePageRegion&&sitePageRegion.map((item1)=>{
										if(item.sitepage_region_id === item1.sitepage_region_id && item1.sitepage_region_name.includes("Header")===true && item.sitepage_type_name.includes("UPPER")===true){
											return(
												// <div>
													/* <h3>{item.sitepage_type_name}</h3> */
													  <NavComponent  
													   sitepage_type={item}
													   linkClassName={"Upper"}/>
												// </div> 
						 					)
						   				  }
										})
									  )									
									})
					   			}
							</>	



				  
				<div style={{marginTop:'auto',marginBottom:'auto'}}>
					{currentUser ? (
						<LocalizationNavLink exact to={`/`} activeClassName='active' onClick={logOut}>LOG OUT</LocalizationNavLink>
					) : (
						<LocalizationNavLink exact to={`/sign_in`} activeClassName='active'>
							{/* <FormattedMessage id='common.name'/> */}
								SIGN In
							</LocalizationNavLink>
					)}					
				</div>	

				<LocalizationNavLink exact to={`/`}><HomeOutlined className='HomeIcon'/></LocalizationNavLink>
					
				</div>

			</div>

	 		<div className={`${width>1000?'middleMenu':'middleMenuSmallScreen'}`}>
					{/* <div class='middleMenu_left'> */}
			   <LocalizationNavLink exact to='/' >
					<img class='ArkturDMClogo'
  					    src={ArkturDMClogo} 
					 	alt='Arktur DMC logo'/>
			   </LocalizationNavLink>	 


			   <>
							  { 
								sitePageType&&sitePageType.map((item)=>{
									return (
									  sitePageRegion&&sitePageRegion.map((item1)=>{
										if(item.sitepage_region_id === item1.sitepage_region_id && item1.sitepage_region_name.includes("Header")===true && item.sitepage_type_name.includes("MIDDLE")===true){
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
				 <div style={{marginTop:'auto',
							  marginBottom:'auto',
							  marginRight:'2vw'}}>
					<LangSelectionTool/>
				 </div>
			  </div>					

		   <RouteSwitcher />
		</header> 
		
	)
 }
