import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import {Route, NavLink, Link, BrowserRouter, Switch, useLocation} from 'react-router-dom'
import {Router} from 'react-router'
import {useIntl} from 'react-intl'
import {FormattedMessage} from 'react-intl';
import {UserOutlined,PhoneTwoTone} from '@ant-design/icons'

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
import Login from "../../../Library/Authorization/Login";
import Register from "../../../Library/Authorization/Register";
import { logout } from "../../../../Redux/actions/auth";// import { findByLabelText } from '@testing-library/react'
import ArkturDMClogo from '../../../Library/Images/ArkturDMClogo.svg';
import {changeLang} from '../../../../Redux/actions/locale'
import { LocalizationNavLink } from '../../../Library/Localization/LocalizationNavLink';
import {LangSelectionTool} from '../../../Library/Localization/LangSelectionTool'
import {LangSelectionFlags} from '../../../Library/Localization/LangSelectionFlags'
import {getCurrency,getPickedCurrencyResponse} from '../../../../Redux/actions/currency'
import RotaryHeader from '../../../Library/Icons/RotaryHeader_2.svg'
import logoRotary from '../../../Library/Icons/logoRotary.svg'
import {CurrencySelectionTool} from '../../PageComponents/CurrencySelectionTool/CurrencySelectionTool'
import {ValidateQuery} from '../../Helpers/helper'
import {PhoneIcon} from '../../../Library/Icons/phoneicon'
import {EmailIcon} from '../../../Library/Icons/email'
import {Pax} from '../../../Library/Icons/pax'

import './header.css'
// import './ResponsiveCSS.css'

export const TopMenu = () => {

	const {locale} = useIntl();
	const { user: currentUser } = useSelector((state) => state.auth);

	let path ;
	const location = useLocation();
	if(location.search){
	   path = ValidateQuery(location)
	}
	else path = {selected_currency:'UAH',default:true}

	// console.log('[A_PATH]',path)

	const dispatch = useDispatch();
	const logOut = () => {
		dispatch(logout());
	};

	dispatch(getPickedCurrencyResponse(path.selected_currency))

	const [width, height] = useWindowWidthAndHeight();

	const lang = useSelector(state=>state.locale.locale)
	const currency = useSelector(state=>state.currency.currencies)
    const promoCode = useSelector(state => state.promocode.promocode)

	useEffect ( () => {
		  dispatch (changeLang ());
		}, [])

	useEffect ( () => {
		dispatch (getCurrency());
	  }, [])
  
	const pages = ContentPages(lang);

	// const pages = ContentPages('uk');
	console.log('[PAGES HEADER]', pages)

	const pickedCurrency = useSelector(state=>state.currency.pickedCurrency)

		//////////////////////////////////////////////////////
	// const current_locale = useSelector(state => state.localization.current_locale);
	// const locales = useSelector(state => state.localization.locales);

	const sitePageType = SitePageType();
	const sitePageRegion = SitePageRegion();

    const headerClass = (promoCode === '1497'? 'WhiteLableTopMenu' : 'topMenu');
	const backGroundImg = (promoCode === '1497'? `url(${RotaryHeader}` : null);
	const rotaryLogo = (promoCode === '1497'? `url(${logoRotary}` : null);
	const topMenuRight = (promoCode === '1497'? 'NotVisibleMenu' : 'topMenu_right');
	const middleMenu =  (promoCode === '1497'? 'NotVisibleMenu' : `${width>1000?'middleMenu':'middleMenuSmallScreen'}`);

	return (
	<header class='wrapperMain'>
	{/* onClick={WhiteLabling}>	 */}
	   		<div className={headerClass} style={{backgroundImage:backGroundImg}}>
			
			 {
				promoCode === '1497'? 
				    <div style={{display:'flex', flexDirection:'row-reverse', justifyContent:'space-between',maxWidth:'80%'}}>
						<LocalizationNavLink exact to={`/`}>
							<div style={{display:'flex',justifyContent:'flex-end',width:'75%',marginTop:'2vh'}}>
									<img src={logoRotary}/>
							</div> 

						</LocalizationNavLink>
						<div style={{marginLeft:'4vw',marginTop:'3vh'}}>
						  <LangSelectionFlags/>
						</div>
					</div>
				 : null
			 }
			  <div className={topMenuRight}>
				{width > 1000?
				  <>
				   <div>
				       <EmailIcon/>
					   <a href='mailto:inquiry@arktur.ua'>
				          inquiry@arktur.ua
					   </a>
					</div>
					<div style={{marginRight:'5vw'}}>
						<PhoneIcon/>
						<span style={{color:'white',fontSize:'12px',fontFamily:'Arial'}}>+38 093 326 68 02</span>
					</div>
				  </>
					:
					<EmailIcon/>
				}
						{currentUser.user_id !== 1426 ? (
						  <LocalizationNavLink exact to={`/${lang}/testcities`} activeClassName='active'>
							  <div style={{display:'flex',
							    	 flexDirection: 'row'}}>
								  <UserOutlined className='UserOutlinedIcon'/>

								  <div>MY ACCOUNT</div>
							</div>
						  </LocalizationNavLink>
						) : true}

						<>
      					{ width > 1000 ?
						   <>
							  {
								sitePageType&&sitePageType.map((item)=>{
									return (
									  sitePageRegion&&sitePageRegion.map((item1)=>{
										if(item.sitepage_region_id === item1.sitepage_region_id && item1.sitepage_region_name.includes("Header")===true && item.sitepage_type_name.includes("UPPER")===true){
											return(
												// <div>
													/* <h3>{item.sitepage_type_name}</h3> */
													// <>
													// { width > 1000 ?
															<LargeScreensNavBar
																// pages={pages}/>
																sitepage_type={item}
																linkClassName={"Upper"}
																/>
														// :null
													// }
													// </>
													//   <NavComponent  
													//    sitepage_type={item}
													//    linkClassName={"Upper"}/>
												
						 					)
						   				  }
										})
									  )
									})
					   			}
							</> : 
							<PhoneIcon />
						}
					</>

				<div style={{marginTop:'auto',marginBottom:'auto'}}>
					{currentUser.user_id !== 1426 ? (
						<LocalizationNavLink exact to={`/`} activeClassName='active' onClick={logOut}>LOG OUT</LocalizationNavLink>
					) : (
						<LocalizationNavLink exact to={`/sign_in`} activeClassName='active'>
							{/* <FormattedMessage id='common.name'/> */}
								SIGNIN
				  	</LocalizationNavLink>
					)}
				</div>

				<LocalizationNavLink exact to={`/mybooking`}><Pax color={"white"}/></LocalizationNavLink>
				<LocalizationNavLink exact to={`/`}><HomeOutlined className='HomeIcon'/></LocalizationNavLink>

				</div>

			</div>

	 		{/* <div className={`${width>1000?'middleMenu':'middleMenuSmallScreen'}`}> */}
			  <div className={middleMenu}>
			   <LocalizationNavLink exact to={`/`} >
					<img class='ArkturDMClogo'
  					    src={ArkturDMClogo}
					 	alt='Arktur DMC logo'/>
			   </LocalizationNavLink>
			     <>
					{width > 1000 ?
			              <>
							  {
								sitePageType&&sitePageType.map((item)=>{
									return (
									  sitePageRegion&&sitePageRegion.map((item1)=>{
										if(item.sitepage_region_id === item1.sitepage_region_id && item1.sitepage_region_name.includes("Header")===true && item.sitepage_type_name.includes("MIDDLE")===true){
											return(
												// <>
												 /* { width > 1000 ? */

													<LargeScreensNavBar
															// pages={pages}/>
															sitepage_type={item}
															linkClassName='nav_big_link'
															navClass='wrapper_nav_big_link'/>
												// 	:
												// 	<SmallScreensNavBar
												// 			navClass="nav-small"
												// 			linkClassName = "nav-small-link"
												// 			// pages={pages}
												// 			sitepage_type={item}
												// 			width={width}/>
												// 	}
												// </>
						 					)
						   				  }
										})
									  )
									})
					   			}
							</>
					   :
							// <>
							//   {
							// 	sitePageType&&sitePageType.map((item)=>{
							// 		return (
							// 		  sitePageRegion&&sitePageRegion.map((item1,index,array)=>{
									   
							// 			if(item.sitepage_region_id === item1.sitepage_region_id && item1.sitepage_region_name.includes("Header")===true){
							// 				return(
							// 						<SmallScreensNavBar
							// 								navClass="nav-small"
							// 								linkClassName = "nav-small-link"
							// 								// pages={pages}
							// 								sitepage_type={item}
							// 								width={width}/>
							// 			        	)
							// 			         }
												
							// 		         }
							// 		      )
							// 		   )
							// 	    }
								
							//       )
                            //     }
                            //  </>
							<>
							  {
								sitePageRegion&&sitePageRegion.map((item)=>{
									console.log('SITEPAGEREGION_KK',item)
				
										if(item.sitepage_region_id === 4){
											return(
													<SmallScreensNavBar
															navClass="nav-small"
															linkClassName = "nav-small-link"
															// pages={pages}
															sitepage_type={item}
															width={width}/>
													
										        	)
										         }
												
									         }
									      )
									   
								}
                             </>
					}
				</>
											

				 <div style={{marginTop:'auto',
							  marginBottom:'auto',
							  marginRight:'2vw',
							  display:'flex',
							  flexDirection:'row',
							  justifyContent:'space-around'
							  }}>
				    <CurrencySelectionTool path={path}/>
					<LangSelectionTool/>
				 </div>
			  </div>

		   <RouteSwitcher />
		</header>

	)
 }
