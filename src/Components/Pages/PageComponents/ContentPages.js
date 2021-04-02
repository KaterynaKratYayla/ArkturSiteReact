import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {getPages} from '../../../Redux/actions/pages'

console.log('[file]:import', 'import {getPages} from \'../../../Redux/actions/pages\'');
console.log('[file]', 'src/Components/Pages/PageComponents/ContentPages.js');
export const ContentPages = () =>{
    console.log('[file]:export const ContentPages', 'src/Components/Pages/PageComponents/ContentPages.js');
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
