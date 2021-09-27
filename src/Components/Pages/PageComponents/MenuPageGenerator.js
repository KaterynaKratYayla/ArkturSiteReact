import React , {useEffect, useState} from 'react'
import {useLocation,useHistory} from 'react-router-dom'
import {Helmet} from 'react-helmet'
import {useDispatch, useSelector} from 'react-redux'
import ReactHtmlParser from 'react-html-parser'
import axios from "axios"

import {HomePage } from './HomePage'
import {Gallery} from '../../Library/PhotoGallery/PhotoGallery'
import {getPurePage} from '../../../Redux/actions'
import ArkturDMClogoICO from '../../Library/Images/ArkturDMClogoICO.ico'
import {ValidateQuery} from '../Helpers/helper'

import {useWindowWidthAndHeight} from '../Helpers/WindowResizeHook'

import '../PageComponents/ResponsiveHeader/header.css'


export const PureContent = () => {

  const location = useLocation(); 

  let search_data = ValidateQuery(location)

  const [width, height] = useWindowWidthAndHeight();

  console.log('LOCATION',location,search_data.id)

    const purePage = useSelector(state => state.pages.purepage)
    const dispatch = useDispatch();

    useEffect ( () => {
      dispatch (getPurePage (search_data.id));
    },[]);

      console.log('[PURE_PAGE]', purePage)

    if( !purePage ){
      return <div> Loading...</div>
  }


   return (
     <div className='purecontentPage'>

       {
         purePage && purePage.map((page)=>{
                              
          if(page.content_name === "Title"){
             return (  
               <>
                <Helmet>
                    <title>{page.text}</title>
                    <link rel='shortcut icon' href={ArkturDMClogoICO} />
                </Helmet>           
               
               <h2>{page.text}</h2>
               </>
             )
           }

           if(page.content_name === "Body"){
             return (
               <div  style={{maxWidth:`${width}px`,overflow:'hidden'}}>{ReactHtmlParser(page.text)}</div>
             )
           }

         })

       } 

    </div>
    ) 
  }


export const NotFound = () => <h2>Not Found</h2>