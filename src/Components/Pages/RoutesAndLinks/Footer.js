import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Route, NavLink, Link, BrowserRouter, Switch} from 'react-router-dom'
import {Router} from 'react-router'
import Helmet from '../../Library/PageDevices/Helmet'
import {Container, Row, Col} from 'react-bootstrap'
import axios from "axios"

import {ContentPages} from '../PageComponents/ContentPages'
import {getPages} from '../../../Redux/actions/pages'
import './footer.css'
import { PureContent } from '../PageComponents/MenuPageGenerator'


export const Footer = () => {

	// const [pages, setPages] = useState([{}])

const pages = ContentPages();

//   const pages = useSelector(state => state.pages.pages)
//   const dispatch = useDispatch();
//      useEffect ( () => {
//       dispatch (getPages ());
//     },[]);

//     if( !pages ){
//       return <div> Loading...</div>
//   }

// useEffect (() =>{
// 	axios.get('http://smartbooker.biz/interface/classifier?classifier=sitepage',  {
//     }) 
//         .then( res => {
                  
//             console.log('[PAGES_INFO] : ' , res.data)
//             // dispatch(pagesResponse(res.data))
// 			setPages(res.data)
//         })
        
//     },[]);

  console.log('[PAGES_SMART]', pages)

   return (
	// <Container fluid='xs,sm,md,lg,xl'>
	 <footer
	 		//  class={sm? 'footerSM' : md? 'footer': 'footer'}
			class='footer'>

		 <div class="footerLinks">
		 <Container fluid='xs,sm,md,lg,xl'>
          <Row xs={1} sm={1} md={2} lg={3}>
		   <Col Col lg={true}>
		    <div class='Hotels'>	
		   	
		  	 <h3>CITY HOTELS</h3>
			    <ul>
				
					  {
						pages && pages.map((page)=>{
						  if(page.name.includes('Hotels')){	
							return (
							 <li>
								<div>
									<Link exact to={{pathname: `/${page.name.replace(/ /g, "_").toLowerCase()}`,
									                 state: {id: page.id}}}>{page.name}</Link> 
								</div>
						    </li>
						   
						   )
						  }
						})
					  }
				</ul>
			  
			 </div>
			 </Col>
			 <Col lg={true}> 
			<div class='SPA'>
			  <h3>RESORTS AND MEDICAL SPA DESTINATIONS</h3>
			    <ul>
					  {
						pages && pages.map((page)=>{
						  if(page.name.includes('SPA')){	
							return (
							<li>
								<div>
									<Link exact to={{pathname: `/${page.name.replace(/ /g, "_").toLowerCase()}`,
									                 state: {id: page.id}}}>{page.name.replace(/SPA/g, " " )}
									</Link> 
								</div>
						   </li>
						   )
						  }
						})
					  }
				</ul>
			  </div>
			  </Col> 
			  <Col lg={true}> 
			 <div class='INFO'>
			   <h3>INFORMATION</h3>
			    <ul>
					  {
						pages && pages.map((page)=>{
						  if(page.name.includes('INFO')){	
							return (
							<li key={page.id}>
								<div>
									<Link exact to={{pathname: `/${page.name.replace(/ /g, "_").toLowerCase()}`,
									                 state: {id: page.id}}}>{page.name.replace(/INFO/g, " " )}
									</Link> 
								</div>
						   </li>
						   )
						  }
						})
					  }
					</ul>
			  	  </div>
			  	 </Col> 
			    </Row> 
			  </Container>
			 </div>
			 {/* </Container> */}
			 <Switch>
				  <Route path='/helmet' component={Helmet} />
					{
						pages && pages.map((page) => {
							<Route exact path={`/${page.name.replace(/ /g, "_").toLowerCase()}`}							 
							component={PureContent} />
								{/* <PureContent id={page.id}/> */}
							// </Route>
						})
					}
			 </Switch>		
		 </footer>
	//   </Container>
   )
 }


