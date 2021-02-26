import React, {useState, useEffect} from 'react'
import { useHistory } from "react-router-dom";
import axios from "axios"
import {useDispatch, useSelector} from 'react-redux'
// import ReactHtmlParser from 'react-html-parser'
import {Container, Row, Col} from 'react-bootstrap'

import {getGeneralGeo, getTopTours} from '../../../Redux/actions'
import ArkturCollection from '../../Library/Images/ArkturCollection.jpg'
import './TopToursCSS.css'

export const TopTours = () => {

    const dispatch = useDispatch();
    const toptours = useSelector(state => state.cities.gen_locs)
    const TopToursContents = useSelector(state => state.toptours.toptours)

    const history = useHistory();

    const [toptourdetails, setTopTourDetails] = useState('')

console.log('[TOURTOURS]', toptours)
 
  ///получаю из смарта тур имя, тур айди, сити имя, сити айди
  useEffect ( () => {
    dispatch (getGeneralGeo ());
  }, [])

  useEffect ( () => {
     dispatch (getTopTours ());
    },[]);

    if( !TopToursContents ){
      return <div> Loading...</div>
  }

  const GetTourDetails = (e) =>{  
    
    let route_query = `?tour_id=${e.target.id}`

    history.push(`/toptours/${route_query}`)
    // console.log('[HISTORY : ] ', history)
  }

  console.log('[TopToursContents]',TopToursContents)

    return (
        <div>
          {/* <>
<Container>
     <Row>
       <Col sm={1}>Row 1, Column 1</Col>
       <Col sm={1}>Row 1, Column 2</Col>
       <Col sm={1}>Row 1, Column 3</Col>
     </Row>
     <Row sm={1}>
       <Col>Row 2, Column 1</Col>
       <Col>Row 2, Column 2</Col>
       <Col>Row 2, Column 3</Col>
     </Row>
   </Container>
   </> */}
         <div style={{textAlign: 'center'}}><img src={ArkturCollection}/></div>
         <div class="TopToursWrapper">

            <ul style={{
                        // display: 'grid', 
                        // gridTemplateColumns: 'repeat(3, 20vw)',
                        listStyle: 'none',
                        paddingLeft: '0'
                        }}>
         <Container fluid="sm, md, lg, xl">
                <Row sm={12} md={3} lg={3}>
                {
                    TopToursContents.length > 0 ? (TopToursContents.map((tour,index) => { 
                        if(index < 12){
                          return(
                           <Col sm={1} >
                             <li 
                                key={tour.tour_id}
                                onClick={GetTourDetails}>
                                {/* <TopToursDetails 
                                    tour_id={tour.tour_id}
                                   /> */}
                                    <div>
                                       <img 
                                            id={tour.tour_id}
                                            class="TopToursImage"
                                            src={'http://' + tour.main_photo[0]}/>
                                    </div>
                                    <div id={tour.tour_id} 
                                         class="TopToursTitle">
                                           {tour.tour_name}
                                    </div>
                              </li>
                            </Col>
                          )
                        }
                    }))
                    :
                    (<div>{null}</div>)
                 }
                    </Row>
                  </Container> 
              </ul>
          </div>
        </div>
    )
}

const TopToursDetails = ({tour_id}) =>{

    const [ttDetails, setTTDetails] = useState()  
    
    useEffect ( () => {
    axios.get(`http://smartbooker.biz/interface/content?id=${tour_id}&language=en`)
      .then( res => {
        setTTDetails(res.data)
        })
      
    .catch( error => {
        setTTDetails(undefined)
      console.log( '[axios error] : ' , error)
       });
   }, []);

   console.log('[ttDetails]', ttDetails)

    return(
        <div>
            {/* { */}
                 {/* ttDetails && ttDetails.map((onetour)=>{ */}
                  {/* // if(onetour.content_name === 'Image') */}
                    {/* // return( */}
                        {/* // <div> */}
                        {/* //     <img  */}
                        {/* // style = {{ */}
                        {/* //     width: '272px', */}
                        {/* //     height: '250px', */}
                        {/* //     borderRadius: '5px'}} */}
                        {/*  */}
                        {/* //     src={'http://' + onetour.text[1]}/> */}
                     {/* /* </div> */}
                    {/* // ) */}
         
                {/* // }) */}
              {/* // } */}
        </div>
    )
}