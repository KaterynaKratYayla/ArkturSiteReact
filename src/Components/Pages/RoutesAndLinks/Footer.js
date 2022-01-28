import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Route, NavLink, Link, BrowserRouter, Switch} from 'react-router-dom'
import {Router} from 'react-router'
import Helmet from '../../Library/PageDevices/Helmet'
import {Container, Row, Col} from 'react-bootstrap'
import axios from "axios"

import {ContentPages,SitePageType,SitePageRegion} from '../PageComponents/ContentPages'
import {SitePagesList} from './SitePagesList'
import {getPages} from '../../../Redux/actions/pages'
import cards from '../../Library/Images/visamastercard.jpg'
import './footer.css'
import { PureContent } from '../PageComponents/MenuPageGenerator'

export const Footer = () => {

const sitePageType = SitePageType();
const sitePageRegion = SitePageRegion();
const pages = ContentPages();

  console.log('[PAGES_SMART]', pages, sitePageType, sitePageRegion)

   return (
	
	 <footer class='footer'>
		 
		 <Container fluid='xs,sm,md,lg,xl' style={{marginLeft:'auto',marginRight:'auto',width:'80%'}}>
          <Row xs={1} sm={1} md={2} lg={3}>

						    <>
							  { 
								sitePageType&&sitePageType.map((item)=>{
									if(item.sitepage_type_id!==7){
									return (
									  sitePageRegion&&sitePageRegion.map((item1)=>{
										if(item.sitepage_region_id === item1.sitepage_region_id && item1.sitepage_region_name.includes("Footer")){
											console.log('ITEM',item, "ITEM1", item1)
											return(
											  <Col Col lg={true}>
												<div class='footerLinks'>
													<h3>{item.sitepage_type_name}</h3>
													<SitePagesList 
														 sitepage_type={item}/>
												</div> 
											  </Col>  
						 					)
						   				  }
										})
									  )	
								     }								
									})
					   			}
							</>		 

	     		  </Row> 
				   <div style={{marginTop:'2vw'}}>
				     <span style={{marginRight:'1vw', color:'white', fontSize:'10px', fontFamily:'Arial',fontStyle:'italic'}}>Ми приймаємо</span>
				     <img src={cards}
			       		style={{width:'5vw', height:'2vw',marginLeft:'auto',marginRight:'auto'}}/>
				   </div>
			  </Container>
			  
			 </footer>
	
   )
 }


