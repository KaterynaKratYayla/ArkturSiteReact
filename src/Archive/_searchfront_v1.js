// import React, {Component,useState,useEffect} from 'react'
// // import './tour.css';
// import './search.css';
// import hotelLIST from '../Library/static json data/hotelLIST.json';
// import {GuestItem} from '../Pages/searchrender';
// import {withRouter, Route, Redirect, Link, BrowserRouter, Switch} from 'react-router-dom'
// import {Switcher, SwitcherItem} from '../Library/Switcher'
// import '../Library/switcher_index.css'
// import moment from 'moment';
// import 'moment/locale/uk'

// import { useHistory } from "react-router-dom";
// moment.locale('uk')

// export const Search = (props) => {

//   console.log(props)
//   // const [tourSearch, settourSearch] = useState('');
//   const [date, setDate] = useState('');
//   const [Adults, setAdults] = useState('');
//   const [Children, setChildren] = useState('');
//   const [inputSelect, setinputSelect] = useState('');
//   const [option, setMyOption] = useState(''); 
//   const [index, setIndex] = useState('');
//   // const [smartresponse, setResponse] = useState('');
//   const history = useHistory();

//   const [list , setList] = useState([]);
//   const [selector, setSelect] = useState([{title: 'Loading...'}]);
  
//   const [align, setAlign] = useState('');  
//   const toggler = ( me ) => _ => {
//     setAlign(me);
//    }

//   console.log(hotelLIST)

//   const changeHandler = (e) => {
//       const etarget = e.target.value;
//       const filteredUsers = .filter(function(tour){
//         return tour.title.toLowerCase().includes(etarget.toLowerCase())
//         })         
//          setSelect(filteredUsers)
//          console.log('[SELECTOR] : ' , selector)
//          setinputSelect(etarget)
//          console.log('[ETARGET SELECT] : ' , inputSelect)
//    }


//   function dateFunc (e) {      
//       return setDate (e.target.value)
//       }
  
//    function adultsFunc (e) {     
//       return setAdults (e.target.value)
//       }

//   function childrenFunc (e) {     
//       return setChildren (e.target.value)
//       }

//   const optionChecker = (e) => {
//      console.log(e.target.value)
//     //  console.log(e.target.id)
//      setMyOption (e.target.value)
//     }

//   const addToList = () => {

//       const newList = {
//           // done: false,
//           // name: tourSearch,
//           // action: "SiteArktur_SearchAPI_RQ",
//           // i_currency: "2001",
//           date: date,
//           // n_nights: 5,
//           adults: Adults,
//           children: Children,
//           select: inputSelect, 
//           title: option,
//           // i_city: "",
//           // i_hotel: 6420,
//           // index: index
//       };

//   setList([...list, newList]);
//   setDate('');
//   setAdults('');
//   setChildren('');
//   setinputSelect('');
//   setMyOption('');

//   console.log('[NewList] : ' , newList)

//   history.push('/search_results' , [...list, newList])
//   // history.push('/test_results' , [...list, newList])
//   console.log('[HISTORY : ] ', history)
// }

//   const onSubmit = (e) =>{
//     console.log('[event]:', e, '[e.target]:', e.target, '[e.target.value] :', e.target.value)   
//     e.preventDefault();
     
// }
   

//   return(
//         <div>

//          <div class='switcher'>
//              <Switcher name={'align'} changeHandler={toggler} active={align}>
//                   <SwitcherItem value='HOTELS'>HOTELS</SwitcherItem>
//                   <SwitcherItem value='TOURS'>TOURS</SwitcherItem>
//                 {/* <SwitcherItem value='job Applicant'>Job Applicant</SwitcherItem> */}
//              </Switcher>   
//           </div>  

//           <div class='formOuterWrapper'>
        
//            <div class="formInnerWrapper">
//              <form className='mySearch' onSubmit={onSubmit}> 
//                  <input class='textInput' type='text' value={inputSelect} onChange={changeHandler} placeholder={'Country or City'}/>
//                    <select onChange={optionChecker}>
//                       {
//                           selector.length >= 0 ? (
//                             selector.map((pac) => {
//                               // setIndex(pac.index)
//                               // console.log(pac.tour_id)
//                                 return (
//                                     <option value={pac.tour_id} >{pac.title}</option>
//                                   )
//                                 }
//                               )
//                             ) : (
//                                 <div>
//                                     No results found for {selector}
//                                 </div>
//                                 )
//                         }
                      
//                      </select> 
//              <div>
       
//                <input 
//                  class='dateInput'
//                  type="date" 
//                  value={date}
//                  onChange={dateFunc}
//                  required/>
          
//              </div>
          
//             <div>
//               <input 
//                  className='number'
//                  type={'number'}
//                  value={Adults}
//                  onChange={adultsFunc}
//                  placeholder={`Adults`}
//                 required/>
//            </div>
          
//           <div>
//             <input  
//                className='number'     
//                 type={'number'}
//                 value={Children}
//                 onChange={childrenFunc}
//                 placeholder={`Children`}/>
//           </div>
//           <div  class='borderInnerWrapper2'>
//             <button type='submit' onClick={addToList}>SEARCH</button>
//           </div>
//      </form> 
//     </div>
//     </div>
      
        
//             <>       
//               {list.length > 0 && (
//                <GuestItem 
//                     option={option} 
//                    	selector={selector}
//                     // location={props.location}
//                     list={list}
//                   />	
//              )
//           }
//         </>
//        </div>
//       )
//     }


