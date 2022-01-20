import React , {useEffect, useState} from 'react'
import {useLocation,useHistory} from 'react-router-dom'
import {Helmet} from 'react-helmet'
import {useDispatch, useSelector} from 'react-redux'
import ReactHtmlParser from 'react-html-parser'
import {useIntl, FormattedMessage} from 'react-intl'
import axios from "axios"

import {HomePage } from './HomePage'
import {Gallery} from '../../Library/PhotoGallery/PhotoGallery'
import {getPurePage,getPhotoGalleryPage} from '../../../Redux/actions'
import ArkturDMClogoICO from '../../Library/Images/ArkturDMClogoICO.ico'
import {ValidateQuery} from '../Helpers/helper'
import Slider from '../../Library/Slider/Slider'
import {CartGallery} from '../../Library/PageDevices/CartGallery/CartGallery'
import { LocalizationNavLink } from '../../Library/Localization/LocalizationNavLink';
import {AboutUs} from '../../Library/PageDevices/Animation/AboutUs'

import {ContentPages} from '../PageComponents/ContentPages'

import {useWindowWidthAndHeight} from '../Helpers/WindowResizeHook'

import YearAnimation from '../../Library/PageDevices/Animation/yearanimation'

import '../PageComponents/ResponsiveHeader/header.css'
import './MenuPageGeneratorCSS.css'


export const PureContent = () => {

  const location = useLocation(); 
  const history = useHistory();

  const {locale,messages} = useIntl();

  let search_data = ValidateQuery(location)

  const [width, height] = useWindowWidthAndHeight();

  // console.log('LOCATION',location,search_data.id)
  // console.log('HISTORY',history)

    const purePage = useSelector(state => state.pages.purepage)
    const dispatch = useDispatch();

    const pages = ContentPages(locale);

    // const pickedcurrency = useSelector(state=>state.currency.pickedcurrency)

    useEffect ( () => {
      dispatch (getPurePage (search_data.id,locale));
    },[search_data.id]);

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

           if(page.content_name === "Image"){
             if(search_data.id === '18'){
               return(
                 <Slider slides={page.text}/>
               )
             }

            else{
             return(
              <CartGallery photos={page}
               photoHeight={'55vh'}
              />
              )
             }
            }
           

           if(page.content_name === "Body"){
             if(search_data.id === '21'){
                 return (
                  <>
                     <YearAnimation/>
                     {
                       messages&&messages.map((item,index)=>{
                         console.log("AAAAA",item)
                         if(item.sitepage_region_id === 12){
                          return(
                          item.title.map((item1,index,array)=>{        
                            console.log('AAAA',item1)                  
                           return(
                             <ShowGallery innerText={item1.text} id={item.id}/>
                            )
                          })
                          )
                         }
                       })

                     }

                     {/* <div style={{maxWidth:`${width}px`,overflow:'hidden',order:'1'}}>{ReactHtmlParser(item.title)}</div> */}
                  </>
                )
              
             }
             else if(search_data.id === '1'){
              return(
                <AboutUs text={page.text}/>
              )
             }
             else {
             return (
               <div style={{maxWidth:`${width}px`,overflow:'hidden',order:'1',marginTop:'2vh'}}>{ReactHtmlParser(page.text)}</div>
             )
           }
          }

         })

       } 

    </div>
    ) 
  }

const ShowGallery = ({innerText,id}) =>{

  // console.log('AAA', id)
  const location = useLocation();
  const {locale} = useIntl();

  const [clicked,setClicked]  = useState(false)
  const dispatch = useDispatch();

  const [width, height] = useWindowWidthAndHeight();
  const [innerPage, setInnerPage] = useState('')

useEffect ( () => {
  axios.get(`https://hotels-ua.biz/interface/sitepagecontent?id=${id}&language=${locale}`)
    .then( res => {
      setInnerPage(res.data)
      })
    
  .catch( error => {
    setInnerPage(undefined)
    console.log( '[axios error] : ' , error)
     });
 }, []);

  const MakeVisible =()=>{
    setClicked(!clicked)
  }

  return(
    <>
    <h3 class={clicked === false? 'inner':'innerClicked'} onClick={MakeVisible}>
     <LocalizationNavLink  to={{
                                pathname: "/sitepages",
                                search: `${location.search}`
                          }}> 
       <FormattedMessage id={innerText}/>  
     </LocalizationNavLink>  
    </h3>

    <div class={clicked === false? 'galleryNotActive':'galleryActive'}>
    {
    innerPage && innerPage.map((page)=>{
       if(page.content_name === "Image"){
         
          return(
           <CartGallery photos={page}
            photoHeight={'65vh'}
           />
           )
          }
        
        if(page.content_name === "Body"){
          return (
            <div style={{maxWidth:`${width}px`,overflow:'hidden',order:'1'}}>{ReactHtmlParser(page.text)}</div>
          )
        }
       
      })
     }
    </div>
   
  </>
           
  )
}



export const NotFound = () => {
  
  return(
  <div>
      <h2>Not Found</h2>
      <YearAnimation/>
  </div>
  )
}