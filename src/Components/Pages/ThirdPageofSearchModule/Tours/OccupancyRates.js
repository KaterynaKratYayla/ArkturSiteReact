import React, {useState, useEffect}  from 'react'
import {useDispatch, useSelector} from 'react-redux'
// import {getPax} from "../../../Redux/actions/paxchoice"
import axios from "axios"
import {useIntl, FormattedMessage} from 'react-intl'
import { Radio } from 'antd';
import { OccupancyTypes} from '../../../Library/StaticJsonData/OccupancyTypes';
import {getHotelChoiceTours} from '../../../../Redux/actions/hotelchoiceintours'
import {getTourContents} from '../../../../Redux/actions/tourcontents'
import {CloseCircleTwoTone} from '@ant-design/icons';
import {PauseCircleTwoTone} from '@ant-design/icons';

import {HtlExistsBookButton} from './HtlExistsBookButton'
import {NoHotelBookButton} from './NoHotelBookButton'
import {TourRateGridTitles} from '../../../Library/StaticJsonData/TourRateGridTitles'

import './TourDetailsCSS.css'

// export const OccupancyRates = ({choiceDetailsNew,hotelChoice,tour_id,selectionDetails,totalPax,nohotel}) =>{
  export const OccupancyRates = ({tour_id,selectionDetails,choiceDetailsNew,mappingExists,hotelsExist,pickedCurrency}) =>{

    const [hotels, setHotels] = useState([{}])
   let tourchoice;

   console.log('choiceDetailsNew',choiceDetailsNew)
   const {locale, messages} = useIntl();

   const dispatch = useDispatch();

   const hotelChoice = useSelector(state => state.hotelchoiceintours.hotelchoice)

   const AmountPax = useSelector(state => state.paxchoice.pax)

   const currencies = useSelector(state=>state.currency.currencies)
    let exchangeRate;

    currencies.forEach((curr)=>{
      if(curr.name === pickedCurrency)
        exchangeRate = parseInt(curr.value)
    })

    // console.log('EXCHANGERATE',exchangeRate)

    const tourRateGridTitles = TourRateGridTitles(locale);

    console.log('AMOUNTPAX',(500*(AmountPax.children/2+AmountPax.adults)/exchangeRate))

    // console.log('OCCUPANCY', choiceDetailsNew, hotelChoice)

    // useEffect (() =>{
    //     axios.get(`${process.env.REACT_APP_SMART_URL}interface/sitechoice3new?tour_id=${tour_id}&date=${selectionDetails}`)
    //     .then(res => {

    //       console.log('KKKKK',res.data)
    
    //     nohotel!=='true'? tourchoice = res.data[0].hotels.map((item)=>item) : tourchoice = res.data[0].tariff
    //     setHotels(tourchoice)               
      
    //     })
    //     .catch(error =>{
    //         setHotels(undefined)
    //       console.log('[axios error]: ', error)
    //     });
    //   },[]);     

    // const test = useSelector(state => state.tourcontents.tourcontents)

    // useEffect(() =>{
    //   dispatch(getTourContents(tour_id, selectionDetails))
    // },[])
   
    // console.log('KKTOURCHOICE', test)

      // const choiceDetailsNew = useSelector(state => state.tours.touritems)
 
      // useEffect(() =>{
      //     dispatch(getTourDetails(search_data.tour_id,selectionDetails))
      //   },[])

    return(
      <div style={{marginTop:'5vh'}}> 
             
    {/* {          mappingExists ==='true' && hotelsExist === 'true'? choiceDetailsNew[0].mapping.map((item)=>{ */}
                     {/* for(let key in item){ */}
                         {/* if(key === hotelChoice){ */}
                             {/* for(let i in item[key].room_hotel){ */}
                                
                                 {/* if(i ==="id" ) */}
                                  {/* { */}
                                      {/* return (  */}
                                      {/* <div class='RadioWrapper'> */}
                                      
                                          {/* <div> */}
                                            {/* <Ticks  */}
                                               {/* hotelChoice={hotelChoice} */}
    {/* //                                           room_id={item[key].room_hotel[i]} */}
    {/* //                                           hotels={hotels} */}
    {/* //                                           totalPax={AmountPax} */}
    {/* //                                           date={selectionDetails} */}
    {/* //                                           tour_id={tour_id} */}
    {/* //                                           mappingItem={item[key]} */}
    {/* //                                           tariff={choiceDetailsNew[0].tariff.map((item)=>item.rooms)} */}
    {/* //                                         /> */}
    {/* //                                      </div> */}
    {/* //                                    </div> */}
    {/* //                                  ) */}
    {/* //                                 } */}
                                   
    {/* //                               } */}
    {/* //                             } */}
    {/* //                           } */}

    {/* //         // }) */}
            
                         
                         {/* }): */}
                     <ul className = 'TourCostHeader'>
                       {
                          tourRateGridTitles&&tourRateGridTitles.map((title)=>{
                              return(
                                <li>
                                  {title}
                                </li>
                                )
                              })
                            }
                      </ul>
                       <ul>
                          {
                              mappingExists ==='false' && hotelsExist === 'false' ? choiceDetailsNew[0].tariff.map((item)=>{
                               console.log('KATEKATE',item)
                               return(
                                item.rooms.map((item1)=>{
                                  // console.log('KATEKATE',item1.rates)
                                    return(
                                     <li className='TourDetailsCost'>
                                    
                                      <h5 className='TourDetailsCost_First'>
                                        {item1.room_name}
                                      </h5>
                                                                       
                                        {
                                          item1.rates.map((item2)=>{
                                            return(     
                                             item2.rate_details.map((item3)=>{
                                              return(
                                              <h5 className='TourDetailsCost_Second'>

                                                   <span style={{gridColumn:'1',
                                                            textAlign:'center',
                                                            width:'100%',
                                                            padding:'2vh'}}>
                                                                    {item2.tariff_name}
                                                    </span>
                                                    <span style={{ 
                                                                  gridColumn:'2',
                                                                   textAlign:'center',
                                                                   width:'100%',
                                                                   padding:'2vh'
                                                                }}>
                                                                    {pickedCurrency} {Math.round(item3.sale/exchangeRate)} 
                                                    </span>
                                                    <CloseCircleTwoTone style={{gridColumn:'3'}}/>

                                                    <span style={{gridColumn:'4', 
                                                                  display:'flex',
                                                                  flexDirection:'column',
                                                                  justifyContent:'flex-start',
                                                                  alignItems:'flex-start',
                                                                  paddingBottom:'1vh',
                                                                  paddingTop:'1vh'}}>

                                                       <span style={{marginBottom:'1vh'}}>
                                                                                {AmountPax.adults} {AmountPax.adults===1?'adult':'adults'}</span>
                                                      
                                                       {
                                                          AmountPax.children>0?
                                                           <span style={{display:'flex',
                                                                    flexDirection:'column',
                                                                    justifyContent:'flex-start'}}>
                                                           
                                                           <span style={{marginBottom:'1vh'}}>
                                                                            {'&'} {AmountPax.children} {AmountPax.children===1?'child':'children'}
                                                           </span>
                                                           
                                                           <span style={{fontSize:'11px',
                                                                       fontFamily:'Arial',
                                                                       color:'grey',
                                                                       fontStyle:'italic'}}>
                                                                                50% discount for children below 12 y.o.
                                                            </span>
                                                         </span>:null
                                                      }

                                                    </span>

                                                    <PauseCircleTwoTone style={{gridColumn:'5'}} 
                                                                        rotate={90}/>
                                                    <span style={{ 
                                                                  gridColumn:'6',
                                                                   textAlign:'center',
                                                                   width:'100%',
                                                                   padding:'2vh'
                                                                }}>
                                                                    {pickedCurrency} {AmountPax.children>0?Math.round(parseInt(item3.sale)*(AmountPax.children/2+AmountPax.adults)/exchangeRate):Math.round(parseInt(item3.sale)*AmountPax.adults/exchangeRate)} 
                                                    </span>

                                                    <div style={{gridColumn:'7',
                                                                  display:'flex',
                                                                  justifyContent:'center',
                                                                  alignItems:'center'}}>

                                                       <NoHotelBookButton 
                                                          totalPax={AmountPax}
                                                          start={selectionDetails}
                                                          tour_id={tour_id}
                                                          tariff_id={item2.smart_tariff_type_id}
                                                          selected_currency={pickedCurrency}
                                                          amount={AmountPax.children>0?Math.round(parseInt(item3.sale)*(AmountPax.children/2+AmountPax.adults)):Math.round(parseInt(item3.sale)*AmountPax.adults)}
                                                       />
                                                    </div>
                                              </h5>
                                             )
                                           })
                                         )
                                        })
                                      }       

                                    </li>
                                  )
                                })
                               )                                
                              })
                                                                                     
                               : 
                           null
                       } 
                      </ul>
    
              </div>
   
    )
}


const Ticks = ({hotelChoice,room_id,hotels,totalPax,date,tour_id,mappingItem,tariff})=>{

    console.log('KEY', hotels)

    const [value, setValue] = useState(2);
  
    const onChange = e => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
     };
     
    // const OccupancyTypes = ['Single Occupancy', 'Double Occupancy', 'Triple Occupancy','Quadruple Occupancy']

    return(
        <div>
            {
                hotels && hotels.length>0? hotels.map((item1)=>{
                 if(hotelChoice === item1.hotel_name){    
                    return item1.rooms.filter((item2,index,array)=>array.findIndex(t=>t.smart_category_id===item2.smart_category_id)===index).map((item3)=>{
                        if(item3.smart_category_id=== room_id){
                               return(
                                     <>
                                       <h5>
                                                 <span style={{fontSize:'17px',
                                                              color: 'rgb(77, 75, 75)',
                                                              fontStyle:'italic'

                                                            }}>with accommodation at hotel 
                                                  </span> 
                                                  
                                                  {' '+ hotelChoice + ' '} 
                                                  
                                                  <span style={{fontSize:'17px',
                                                              color: 'rgb(77, 75, 75)',
                                                              fontStyle:'italic'

                                                            }}>in a
                                                  </span>
                                                  
                                                  {' '+ item3.room_name.toLowerCase() + ' '} 
                                                  
                                                  <span style={{fontSize:'17px',
                                                              color: 'rgb(16, 45, 105)',
                                                              fontStyle:'italic'

                                                            }}>room. </span>

                                       <h4 style={{marginTop:'2vh', 
                                                   textAlign:'center',
                                                   textDecoration:'underline',
                                                   fontSize:'20px',
                                                   color:'#102D69'}}>Please choose your occupancy : </h4>
                                    </h5>
                                          {     
                                            totalPax.counterChild===0?(               
                                              <Radio.Group onChange={onChange} 
                                                      value={value} 
                                                      className='Radio'>
                                                          {
                                                              OccupancyTypes&&OccupancyTypes.map((item,index,array)=>{
                                                                if(index < item3.max_adults_room){
                                                                  return(
                                                                    <Radio style={{color:'#102D69',fontWeight:'bold'}} 
                                                                           value={index+1}
                                                                           key={index}>{item}</Radio>
                                                                  )
                                                                }

                                                                
                                                              })
                                                            }                                 
                                         </Radio.Group>):
                                         (
                                          <Radio.Group onChange={onChange} 
                                          value={value} 
                                          className='Radio'>
                                              {
                                                  OccupancyTypes&&OccupancyTypes.map((item,index,array)=>{
                                                    if(index < item3.max_adults_room&&index>0){
                                                      return(
                                                        <Radio style={{color:'#102D69',fontWeight:'bold'}} 
                                                               value={index+1}
                                                               key={index}>{item}</Radio>
                                                      )
                                                    }

                                                    
                                                  })
                                                }                                 
                                           </Radio.Group>
                                         )
                                      }
                                        <div>
                                           {
                                                                                       
                                           }
                                        </div>
                                     </>
                                  )
                               }
                            })
                        }
                }):(
                   
                     <label value='Please print your occupancy requirements'>
                        <input/>
                     </label>
                    )
                    
            }
            <HtlExistsBookButton 
               value={value}
               hotel_room_id={room_id}
               totalPax={totalPax}
               start={date}
               tour_id={tour_id}
               hotelChoice={hotelChoice}
               tour_room={mappingItem.room_tour}
               hotel_id={mappingItem.hotel_id}
               tariff={tariff}
            />
        </div>
    )
}