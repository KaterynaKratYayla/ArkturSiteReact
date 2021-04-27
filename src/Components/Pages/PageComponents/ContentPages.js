import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getPages,getSitePageType,getSitePageRegion} from '../../../Redux/actions/pages'

export const ContentPages = () =>{
const pages = useSelector(state => state.pages.pages)
const dispatch = useDispatch();
   useEffect ( () => {
    dispatch (getPages ());
  },[]);

  if( !pages ){
    return <div> Loading...</div>
    }
  return pages
}

export const SitePageType = () =>{
  const sitePageType = useSelector(state => state.pages.pageType)
  const dispatch = useDispatch();
     useEffect ( () => {
      dispatch (getSitePageType());
    },[]);
  
    if( !sitePageType ){
      return <div> Loading...</div>
      }
    return sitePageType
  }

  export const SitePageRegion = () =>{
    const sitePageRegion = useSelector(state => state.pages.pageRegion)
    const dispatch = useDispatch();
       useEffect ( () => {
        dispatch (getSitePageRegion());
      },[]);
    
      if( !sitePageRegion ){
        return <div> Loading...</div>
        }
      return sitePageRegion
    }
