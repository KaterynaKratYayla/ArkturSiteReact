import React, {useState, useEffect} from 'react'
import { useHistory } from "react-router-dom";
import axios from "axios"
import {useDispatch, useSelector} from 'react-redux'
// import ReactHtmlParser from 'react-html-parser'
import {Container, Row, Col} from 'react-bootstrap'

import {useWindowWidthAndHeight} from '../Helpers/WindowResizeHook'

import {getGeneralGeo, getTopTours} from '../../../Redux/actions'
import ArkturCollection from '../../Library/Images/ArkturCollection.jpg'
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
           width={width}/>)
        :
        width > 768?(
          <MediumScreenTopTours 
          TopToursContents = {TopToursContents}
          TourTypes = {TourTypesFiltered}
          GetTourDetails={GetTourDetails}
          width={width}/>
        )
         :
        (
          <SmallScreenTopTours 
            TopToursContents = {TopToursContents}
            TourTypes = {TourTypesFiltered}
            GetTourDetails={GetTourDetails}
            width={width}/>
        )
        }
  
    </div>
        
    )
}


const LargeScreenTopTours = ({TopToursContents,GetTourDetails,TourTypes,width}) =>{
  // const [width, height] = useWindowWidthAndHeight();

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
                          width:'58.7vw'}}>
                                                {type}
              </h3>
                <ul style={{
                       display: 'grid', 
                       gridTemplateColumns: 'repeat(3, 20vw)',
                       listStyle: 'none',
                       paddingLeft: '0'}}>

                {
                    TopToursContents.length > 0 ? (TopToursContents.map((tour,index) => {

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
                                            src={'http://' + tour.main_photo[0]}/>
                                            ):(<LoadingMessage />)
                                          }
                                        </div> 
                                       <div class='TopToursTitle'
                                            id={tour.tour_id}>
                                          <h4 id={tour.tour_id}> 
                                                {tour.tour_name} 
                                          </h4> 
                                      </div> 
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
          })):(<div>{null}</div>) 
        }
       </ul>
      </div>
    </div>
  )
}

const MediumScreenTopTours = ({TopToursContents,GetTourDetails,width}) =>{
  // const [width, height] = useWindowWidthAndHeight();

  return(
    <div>
      <div style={{textAlign: 'center'}}><img src={ArkturCollection}/>
      </div>
      
      <div class="TopToursWrapper"> 

           <ul style={{
                       display: 'grid', 
                       gridTemplateColumns: `repeat(2, ${width/3}px)`,
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
                                          <img  
                                            id={tour.tour_id}
                                            class="TopToursImage"
                                            src={'http://' + tour.main_photo[0]}/>
                                        </div> 
                                       <div class='TopToursTitle'>
                                          <h4 id={tour.tour_id}> 
                                                {tour.tour_name} 
                                          </h4> 
                                      </div> 
                                </li> 
                            ) 
                          } 
                      })) 
                     : 
                      (<div>{null}</div>) 
                    } 
                </ul> 
      </div> 
    </div>
  )
}

const SmallScreenTopTours = ({width,TopToursContents,GetTourDetails}) =>{
  // const [width, height] = useWindowWidthAndHeight();

  return(
    <div>
      <div style={{textAlign: 'center'}}>
              <img src={ArkturCollection}
                   style={{width:width}}/>
            </div>
              <div class="SmallerTopToursWrapper">

              <ul style={{
                listStyle: 'none',
                paddingLeft: '0'
                }}>
                {
                    TopToursContents.length > 0 ? (TopToursContents.map((tour,index) => { 
                        if(index < 12){
                          return(
                             <li 
                                key={tour.tour_id}
                                onClick={GetTourDetails}>
                                    <div>
                                       <img 
                                            id={tour.tour_id}
                                            class="SmallerTopToursImage"
                                            style={{width:width}}
                                            src={'http://' + tour.main_photo[0]}/>
                                    </div>
                                    <div class='SmallerTopToursTitle'
                                          style={{width:width}}>
                                      <h4 id={tour.tour_id}>
                                           {tour.tour_name}
                                      </h4>
                                    </div>
                              </li>
                          )
                        }
                    }))
                    :
                    (<div>{null}</div>)
                 }

              </ul>
          </div>
    </div>
  )
}