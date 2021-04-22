import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Route, NavLink, Link, BrowserRouter, Switch} from 'react-router-dom'
import {Router} from 'react-router'
import Helmet from '../../Library/PageDevices/Helmet'
import {Container, Row, Col} from 'react-bootstrap'
import axios from "axios"

import {ContentPages,SitePageType,SitePageRegion} from '../PageComponents/ContentPages'
import {getPages} from '../../../Redux/actions/pages'
import './footer.css'
import { PureContent } from '../PageComponents/MenuPageGenerator'

export const Footer = () => {

const sitePageType = SitePageType();
const sitePageRegion = SitePageRegion();

  console.log('[PAGES_SMART]', sitePageType, sitePageRegion)

   return (
	
	 <footer class='footer'>
		 <Container fluid='xs,sm,md,lg,xl'>
          <Row xs={1} sm={1} md={2} lg={3}>
		   {/* <Col Col lg={true}> */} 

						    <>
							  { 
								sitePageType&&sitePageType.map((item)=>{
									return (
									  sitePageRegion&&sitePageRegion.map((item1)=>{
										if(item.sitepage_region_id === item1.sitepage_region_id){
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
									})
					   			}
							</>		 

					{/* {/* </Col>   */}
	     		  </Row> 
			  </Container>
			 </footer>
	
   )
 }


const SitePagesList = ({sitepage_type}) =>{
  const pages = ContentPages();
	return(
		<>
		  <ul>
			{
				pages.length>0?pages.map((page)=>{
				 if(sitepage_type.sitepage_type_id === page.sitepage_type_id){
					return(
						<li key={page.id}>
							<div>
							     	{/* <NavLink exact to={{pathname: `/${page.title.map((item1)=>item1.text)}/?id=${page.id}`,
							              state: {id: page.id}}}>{page.title.map((item1)=>item1.text)}</NavLink>  */}
										<Link to={`/${page.title.map((item1)=>item1.text)}/?id=${page.id}`}>
										{page.title.map((item1)=>item1.text)}</Link> 
							</div>
						</li>
					)
				 }
				}):(null)
			}	
			</ul>
			{/* <Switch>
	 			<Route path='/helmet' component={Helmet} />
 					{
 						pages.length>0?pages.map((page)=>{
 				 			if(sitepage_type.sitepage_type_id === page.sitepage_type_id){
 							 return(
 								<Route exact path={`/${page.title.map((item1)=>item1.text)}`}
								 	   component={PureContent}/>
		 					)
 						 }
 						}):(null)
 					}	
 			</Switch> */}
			
		</>
	
	)
}
