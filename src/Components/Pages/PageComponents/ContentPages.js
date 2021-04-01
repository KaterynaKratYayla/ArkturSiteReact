import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getPages} from '../../../Redux/actions/pages'

export const ContentPages = () =>{
    console.log('[file]');
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
