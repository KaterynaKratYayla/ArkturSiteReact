import React , {useEffect} from 'react'
import {Helmet} from 'react-helmet'
import {useDispatch, useSelector} from 'react-redux'
import ReactHtmlParser from 'react-html-parser'

import '../PageComponents/ResponsiveHeader/header.css'
// import contentPages from './contentPages.json'
import {HomePage } from './HomePage'
import {Gallery} from '../../Library/PhotoGallery/PhotoGallery'
import {getPurePage} from '../../../Redux/actions'
import ArkturDMClogoICO from '../../Library/Images/ArkturDMClogoICO.ico'
// import Arktur_DMC_logo from '../Library/images/Arktur_DMC_logo.ico'

console.log('[file]', 'src/Components/Pages/PageComponents/MenuPageGenerator.js');
export const PureContent = ({location}) => {
    console.log('[file]:export const PureContent', 'src/Components/Pages/PageComponents/MenuPageGenerator.js');

    // contentPages.forEach(function(item){
        // console.log('[CONTENT_PAGES] : ' , location)
    // })

    // console.log('[LOCATION]', location, location.state.id)

    const purePage = useSelector(state => state.pages.purepage)
    const dispatch = useDispatch();

    useEffect ( () => {
      dispatch (getPurePage (location.state.id));
    },[location.state.id]);

    console.log('[PURE PAGE]', purePage)

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
               <div>{ReactHtmlParser(page.text)}</div>
             )
           }

         })

       }

    </div>
    )
  }

console.log('[file]:export const NotFound', 'src/Components/Pages/PageComponents/MenuPageGenerator.js');
export const NotFound = () => <h2>Not Found</h2>
