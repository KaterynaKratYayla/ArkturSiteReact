import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import {Route, NavLink, Link, BrowserRouter, Switch} from 'react-router-dom'
import {Router} from 'react-router'
import {UserOutlined} from '@ant-design/icons'
import Dropdown from "react-bootstrap/Dropdown";

import {RouteSwitcher} from '../../RoutesAndLinks/RouteSwitcher'
import {COVID, ABOUT, CONTACTUS, SIGNIN, FORGROUPS} from '../TopMenuComponents'
import {HOTELS, GALLERY, LOGO, SOCIAL, NotFound} from '../MiddleMenuComponents'
import {HomePage} from '../HomePage'
import {TOURS} from '../DropDownTours'
import { PureContent } from '../MenuPageGenerator'
import { Search } from '../../FirstPageofSearchModule/SearchFront'
import { GuestItem } from '../../SecondPageofSearchModule/GuestItem'
import { TourDetails } from '../../ThirdPageofSearchModule/TourDetails'
import {TopToursDetails} from '../TopToursDetails'
// import Helmet from '../../Helmet'

import {HomeOutlined} from '@ant-design/icons'
import {ContentPages} from '../ContentPages'
import {SingleHotel} from '../../../Library/HotelsUkraineTestComponents/single_hotel'
import { TestCities } from '../../../Library/HotelsUkraineTestComponents/test_cities'
import {LargeScreensNavBar} from './LargeScreensNavBar'
import SmallScreensNavBar from './SmallScreensNavBar'
import {useWindowWidthAndHeight} from '../../Helpers/WindowResizeHook'
import {useLocation} from 'react-router-dom'
import Login from "../../../Library/Authorization/Login";
import Register from "../../../Library/Authorization/Register";
import { logout } from "../../../../Redux/actions/auth";
import { getLocales, changeLang } from "../../../../Redux/actions";
// import { findByLabelText } from '@testing-library/react'
import ArkturDMClogo from '../../../Library/Images/ArkturDMClogo.svg'
import { LocalizationNavLink } from '../../../Library/Localization';

import './header.css'
import {getPages} from "../../../../Redux/actions";
// import './ResponsiveCSS.css'
import config from '../../../../Redux/config';
import {FormattedMessage, useIntl} from "react-intl";

const defaultLocale = config.defaultLocale;
const apiUrl = config.apiUrl;
const supportedLangs = config.supportedLangs;
// console.log('supportedLangs2: ', supportedLangs);
// console.log('supportedLangs5: ', `/:locale(${supportedLangs})`);

console.log('[file]:import', 'import {ContentPages} from \'../ContentPages\'');
console.log('[file]:import', 'import {LargeScreensNavBar} from \'./LargeScreensNavBar\'');
console.log('[file]:import', 'import SmallScreensNavBar from \'./SmallScreensNavBar\'');
console.log('[file]:import', 'import {useWindowWidthAndHeight} from \'../../Helpers/WindowResizeHook\'');
console.log('[file]:import', 'import { logout } from "../../../../Redux/actions/auth";');
console.log('[file]:import', 'import { getLocales, changeLang } from "../../../../Redux/actions";');
console.log('[file]:import', 'import { LocalizationNavLink } from \'../../../Library/Localization\';');
console.log('[file]', 'src/Components/Pages/PageComponents/ResponsiveHeader/Header.js');
export const TopMenu = () => {
	console.log('[file]:export const TopMenu', 'src/Components/Pages/PageComponents/ResponsiveHeader/Header.js');
	const intl = useIntl();

	const { user: currentUser } = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const logOut = () => {
		dispatch(logout());
	};

	const changeLocale = ( locale ) => {
		console.log('[changeLocale]', locale);
		dispatch (changeLang(locale));
	}

	// Получаем языки при загрузке Header
	useEffect ( () => {
		dispatch (getLocales());
	},[]);
	console.log('supportedLangs2: ', supportedLangs);

	const [width, height] = useWindowWidthAndHeight();

	const pages = ContentPages();
	console.log('[PAGES HEADER]', pages);

	const current_locale = useSelector(state => state.localization.current_locale);
	const locales = useSelector(state => state.localization.locales);
	const MenuItems = () => {
		const listItems = locales.map(
			(locale) => {
				{/*TODO: Подправить стили и вынести их в файл css. Пока сделал как получилось, чтобы было видно выбор языков*/}
				return (
					<Dropdown.Item style={{backgroundColor: "#2146ce"}} href={`/${locale.name.toLowerCase()}`}>
						{locale.name}
					</Dropdown.Item>
					/*<Dropdown.Item style={{backgroundColor: "#2146ce"}} href="#/action-1">
						{locale.name}
					</Dropdown.Item>*/
				);
			}
		);
		return(
			<Dropdown.Menu style={{backgroundColor: "#007bff"}}>
				{listItems}
			</Dropdown.Menu>
		);
	}

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

				    <ul class='Upper'>
					  {
						pages && pages.map((page)=>{
						  if(page.name.includes('UPPER')){
							return (
							<li>
								<div>
									{/*<LocalizationNavLink to={{pathname: `/${page.name.replace(/ /g, "_").toLowerCase()}`,
									                 state: {id: page.id}}}
													 activeClassName='active'>
														 {page.name.replace(/UPPER/g, " " ).toUpperCase()}
									</LocalizationNavLink>*/}
									 <NavLink exact to={{pathname: `/${page.name.replace(/ /g, "_").toLowerCase()}`,
									                 state: {id: page.id}}}
													 activeClassName='active'>
														 {page.name.replace(/UPPER/g, " " ).toUpperCase()}
									</NavLink>
								</div>
						   </li>
						   )
						  }
						})
					  }
				</ul>

				{/*<div style={{marginTop:'auto',marginBottom:'auto'}}>
					{currentUser ? (
						<LocalizationNavLink exact to='/' activeClassName='active' onClick={logOut}>LOG OUT</LocalizationNavLink>
					) : (
						<NavLink exact to='/sign_in' activeClassName='active'>SIGN IN</NavLink>
					)}
				</div>*/}

				<div style={{marginTop:'auto',marginBottom:'auto'}}>
					{currentUser ? (
						// <NavLink exact to='/' activeClassName='active' onClick={logOut}>LOG OUT</NavLink>
						/*<LocalizationNavLink to='/' activeClassName='active' onClick={logOut}>LOG OUT</LocalizationNavLink>*/
						<LocalizationNavLink to='/' activeClassName='active' onClick={logOut}>
							{/*<FormattedMessage id='topMenu.logout' />*/}
							{intl.formatMessage({ id: 'topMenu.logout' })}
						</LocalizationNavLink>
					) : (
						<NavLink exact to='/sign_in' activeClassName='active'>SIGN IN</NavLink>
					)}
				</div>

				{/*<div style={{marginTop:'auto',marginBottom:'auto'}}>
					{currentUser ? (
						<NavLink exact to='/' activeClassName='active' onClick={logOut}>LOG OUT</NavLink>
					) : (
						<NavLink exact to='/sign_in' activeClassName='active'>SIGN IN</NavLink>
					)}
				</div>*/}

				<Link exact to='/'><HomeOutlined className='HomeIcon'/></Link>

				{/*TODO: Подправить стили и вынести их в файл css. Пока сделал как получилось, чтобы было видно выбор языков*/}
				<Dropdown className='languageSelector'>
					<Dropdown.Toggle variant="success" id="dropdown-basic" onSelect={changeLocale}>
						{current_locale.toUpperCase()}
					</Dropdown.Toggle>
					<MenuItems />
				</Dropdown>

				</div>

			</div>

	 		<div className='middleMenu'>
					{/* <div class='middleMenu_left'> */}
			   <NavLink exact to='/' >
					<img class='ArkturDMClogo'
  					    src={ArkturDMClogo}
					 	alt='Arktur DMC logo'/>
			   </NavLink>

			 { width > 1000 ?

                <LargeScreensNavBar
						pages={pages}/>
                :
                <SmallScreensNavBar
						navClass="nav-small"
                        linkClassName = "nav-small-link"
						pages={pages}
						width={width}/>
                }

			    {/* </div>  */}
			  </div>

		   <RouteSwitcher />
		</header>

	)
 }
