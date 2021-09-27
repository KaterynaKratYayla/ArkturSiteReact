import React, {useState, useEffect} from 'react'
import { useHistory } from "react-router-dom";
import axios from "axios"
import {useDispatch, useSelector} from 'react-redux'
// import ReactHtmlParser from 'react-html-parser'
import {Container, Row, Col} from 'react-bootstrap'

import {useWindowWidthAndHeight} from '../Helpers/WindowResizeHook'

import {getGeneralGeo, getTopTours} from '../../../Redux/actions'
import ArkturCollection from '../../Library/Images/ArkturCollection.jpg'
import ArkturDMClogo from '../../Library/Images/ArkturDMClogo.svg'
import {SyncOutlined,SmileTwoTone,LoadingOutlined} from '@ant-design/icons'
import {LoadingMessage} from '../../Library/PageDevices/LoadingMessage'

import './TopToursCSS.css'

export const TopTours = () => {

    const dispatch = useDispatch();
    const toptours = useSelector(state => state.cities.gen_locs)
    const TopToursContents = useSelector(state => state.toptours.toptours)

    const history = useHistory();

    const [toptourdetails, setTopTourDetails] = useState('')
    const [width, height] = useWindowWidthAndHeight();
console.log('[TOURTOURS]', toptours)
 
  ///получаю из смарта тур имя, тур айди, сити имя, сити айди
  useEffect ( () => {
    dispatch (getGeneralGeo ());
  }, [])

  useEffect ( () => {
     dispatch (getTopTours ());
    },[]);

    if( !TopToursContents ){
      return <div> <LoadingOutlined /></div>
  }

   const TourTypesFiltered = TopToursContents.filter((item,index,array) =>
   array.findIndex(t => t.subservices.id === item.subservices.id)===index).map((item)=>item.subservices.name)

  console.log('[TourTypesFiltered]', TourTypesFiltered)

  const GetTourDetails = (e) =>{  
    let route_query;
    if(e.target.id){
       route_query = `/toptours/?tour_id=${e.target.id}`
    }
    else {
      route_query = '/'
      alert('Please choose another tour')
    }

    // history.push(`/toptours/${route_query}`)
    history.push(route_query)
    // console.log('[HISTORY : ] ', history)
  }

  // console.log('[TopToursContents]',TopToursContents)


    return (
       <div>
 
        { width > 1000 ?(    
          <LargeScreenTopTours 
           TopToursContents = {TopToursContents}
           TourTypes = {TourTypesFiltered}
           GetTourDetails={GetTourDetails}
          //  width={width}
           />)
        :
        width > 768?(
          <MediumScreenTopTours 
          TopToursContents = {TopToursContents}
          TourTypes = {TourTypesFiltered}
          GetTourDetails={GetTourDetails}
          // width={width}
          />
        )
         :
        (
          <SmallScreenTopTours 
            TopToursContents = {TopToursContents}
            TourTypes = {TourTypesFiltered}
            GetTourDetails={GetTourDetails}
            // width={width}
            />
        )
        }
  
    </div>
        
    )
}


const LargeScreenTopTours = ({TopToursContents,GetTourDetails,TourTypes}) =>{
  const [width, height] = useWindowWidthAndHeight();

  return(
    <div>
      <div style={{textAlign: 'center'}}><img src={ArkturCollection}/>
      </div>
      
      <div>
        <ul>
          { TourTypes.length > 0 ? (TourTypes.map((type)=>{

           return(
            <li class="TopToursWrapper"> 
              <h3 style={{
                          fontFamily:'Arial Narrow',
                          fontSize:'24px',
                          fontWeight:'bold',
                          color:'white',
                          textAlign:'center',
                          backgroundColor:'#005AEB',
                          borderRadius:'5px',
                          lineHeight:'6vh',
                          width:`${width*0.65}px`}}>
                                                {type}
              </h3>
                <ul style={{
                       textAlign:'center',
                       display: 'grid', 
                       gridTemplateColumns: `repeat(3, ${width*0.65/3}px)`,
                       listStyle: 'none',
                       }}>

                {
                    TopToursContents.length > 0 ? (TopToursContents.map((tour,index) => {

                      console.log('PHOTO',tour.main_photo[0])
                        if(index < 12 && type === tour.subservices.name){
                            return( 
                              <li 
                                 key={tour.tour_id}
                                 onClick={GetTourDetails}>
                                        {/* <TopToursDetails  
                                            tour_id={tour.tour_id}
                                          />  */}
                                        <div id={tour.tour_id}> 
                                          {
                                            tour.main_photo[0]?(
                                          <img  
                                            id={tour.tour_id}
                                            class="TopToursImage"
                                            width={`${width*0.6/3}px`}
                                            src={'http://' + tour.main_photo[0]}/>
                                            ):tour.main_photo[1]?(
                                              <img  
                                                id={tour.tour_id}
                                                class="TopToursImage"
                                                width={`${width*0.6/3}px`}
                                                src={'http://' + tour.main_photo[1]}/>
                                                ):null
                                            // (<LoadingMessage itemWidth={`${width*0.6/3}px`}/>)
                                            }
                                        </div> 
                                        {
                                          tour.main_photo[0]||tour.main_photo[1]?(
                                       <div class='TopToursTitle'
                                            style={{width:`${width*0.6/3}px`}}
                                            id={tour.tour_id}>
                                          <h4 id={tour.tour_id}
                                              style={{width:`${width*0.6/3}px`}}> 
                                                {tour.tour_name.toUpperCase()} 
                                          </h4> 
                                      </div> ):null
                                    }
                                </li> 
                            )}
                         })) 
                     : 
                      (null) 
                    } 
                  
                </ul> 
           </li> 
           )
          })):(<div>{null}</div>) 
        }
       </ul>
      </div>
    </div>
  )
}

const MediumScreenTopTours = ({TopToursContents,GetTourDetails,TourTypes}) =>{
  const [width, height] = useWindowWidthAndHeight();

  return(
    <div>
      <div style={{textAlign: 'center'}}><img src={ArkturCollection}/>
      </div>
      
      <div>
        <ul>
          { TourTypes.length > 0 ? (TourTypes.map((type)=>{
            return(
              <div class="TopToursWrapper"> 
                  <h3 style={{
                          fontFamily:'Arial Narrow',
                          fontSize:'24px',
                          fontWeight:'bold',
                          color:'white',
                          textAlign:'center',
                          backgroundColor:'#005AEB',
                          borderRadius:'5px',
                          lineHeight:'6vh',
                          width:`${width*0.65}px`}}>
                                                {type}
                    </h3>
                <ul style={{
                       display: 'grid', 
                       gridTemplateColumns: `repeat(2, ${width*0.6/2}px)`,
                       listStyle: 'none',
                       marginLeft:'auto',
                       marginRight: 'auto'
                       }}>

                {
                    TopToursContents.length > 0 ? (TopToursContents.map((tour,index) => {
                        if(index < 12){
                            return( 
                              <li 
                                 key={tour.tour_id}
                                 onClick={GetTourDetails}>
                                        {/* <TopToursDetails  
                                            tour_id={tour.tour_id}
                                          />  */}
                                        <div> 
                                          {
                                            tour.main_photo[0]?(
                                              <img  
                                                id={tour.tour_id}
                                                class="TopToursImage"
                                                width={`${width*0.5/2}px`}
                                                src={'http://' + tour.main_photo[0]}/>
                                            ):null
                                            // (<LoadingMessage itemWidth={`${width*0.5/2}px`}/>)
                                         }
                                        </div> 
                                        {
                                            tour.main_photo[0]?(
                                       <div class='TopToursTitle' style={{width:`${width*0.5/2}px`}}>
                                          <h4 id={tour.tour_id}
                                          style={{width:`${width*0.5/2}px`}}> 
                                                {tour.tour_name.toUpperCase()} 
                                          </h4> 
                                      </div> ):null
                                    }
                                </li> 
                            ) 
                          } 
                      })) 
                     : 
                      (<div>{null}</div>) 
                    } 
                </ul> 
              </div> 
              )
            })): (<div>{null}</div>) 
            }
          </ul>
        </div>
    </div>
  )
}

const SmallScreenTopTours = ({TopToursContents,GetTourDetails,TourTypes}) =>{
  const [width, height] = useWindowWidthAndHeight();

  return(
    <div>
      <div style={{textAlign: 'center'}}>
              <img src={ArkturCollection}
                   style={{width:width}}/>
            </div>
      
      <div>
        <ul>
          { TourTypes.length > 0 ? (TourTypes.map((type)=>{
            return(
            <div class="SmallerTopToursWrapper">
                <h3 style={{
                       fontFamily:'Arial Narrow',
                       fontSize:'24px',
                       fontWeight:'bold',
                       color:'white',
                       textAlign:'center',
                       backgroundColor:'#005AEB',
                       borderRadius:'5px',
                       lineHeight:'6vh',
                       width:`${width}px`}}>
                                                {type}
                   </h3>
              <ul style={{   
                listStyle: 'none'
                }}>
                {
                    TopToursContents.length > 0 ? (TopToursContents.map((tour,index) => { 
                        if(index < 12){
                          return(
                             <li 
                                key={tour.tour_id}
                                onClick={GetTourDetails}>
                                    <div>
                                    {
                                            tour.main_photo[0]?(
                                       <img 
                                            id={tour.tour_id}
                                            class="SmallerTopToursImage"
                                            style={{width:width}}
                                            src={'http://' + tour.main_photo[0]}/>
                                            ):null
                                            // (<LoadingMessage itemWidth={`${width}px`}/>
                                            // )
                                         }
                                    </div>
                                    {
                                            tour.main_photo[0]?(
                                    <div class='SmallerTopToursTitle'
                                          style={{width:width}}>
                                      <h4 id={tour.tour_id}>
                                           {tour.tour_name}
                                      </h4>
                                    </div>):null
                                  }
                              </li>
                          )
                        }
                    }))
                    :
                    (<div>{null}</div>)
                 }

              </ul>
              </div>)
          })):(<LoadingMessage itemWidth={`${width}px`}/>)
        }
        </ul>
       </div>
    </div>
  )
}