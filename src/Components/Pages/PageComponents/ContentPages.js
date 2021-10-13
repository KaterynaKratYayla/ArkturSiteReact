import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getPages,getSitePageType,getSitePageRegion,getHotelPagesFooter} from '../../../Redux/actions/pages'

export const ContentPages = (lang) =>{
const pages = useSelector(state => state.pages.pages)
const dispatch = useDispatch();
   useEffect ( () => {
    dispatch (getPages (lang));
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

    export const HotelPagesFooter = () =>{
      const hotelPagesFooter = useSelector(state => state.pages.hotelPagesFooter)
      
      const dispatch = useDispatch();
         useEffect ( () => {
          dispatch (getHotelPagesFooter());
        },[]);
      
        if( !hotelPagesFooter ){
          return <div> Loading...</div>
          }
        return hotelPagesFooter
      }
    