import React , {useState, useEffect} from 'react'
import axios from 'axios'
import {useLocation} from 'react-router-dom'
import {Select,Input, AutoComplete} from 'antd'
import {photoarray} from '../../Library/Images/testphotos/photoarray'
import map from '../Images/testphotos/provinces-of-ukraine-map.png'
import {Complete} from './RegistrationRotarySearch'
import {granticons} from '../../Library/Images/testphotos/icons'
// import sunflowers from '../Images/testphotos/sunflowers.jpg'
import cityoutline from '../../Library/Images/testphotos/cityoutline.jpg'
import attractions from '../../Library/Images/testphotos/attractions_1.png'
import {Gallery} from '../../Library/PhotoGallery/PhotoGallery'
import { ValidateQuery} from '../Helpers/helper'

import './RegistrationRotaryCSS.css'

export const RegistrationRotary = () =>{

    const location = useLocation();
    console.log('ROTARY_REGISTRATION',location)

    const [clicked,setClicked] = useState(false)

    const { Option } = Select;

    const list = ['Київська Русь. Спадщина 10-11 столітть (Киів)','Обєкти єврейської історико-культурної спадщини (Киів, Бердичів, Житомір, Умань)',
                  'Обєкти шведської історико-культурної спадщини (Киів, Львів)','Обєкти турецької історико-культурної спадщини (Бережани, Лопушня, Рогатин)',
                  'Обєкти польської історико-культурної спадщини','Радянська Епоха в Украіні']
    
    const menu = ['Куди Поїхати',"Активності в України","Спланувати Поїздку","Про Історичну спадщину України"]

    const pickFunc = () =>{
        setClicked(true)
    }


     let path ;
	// const location = useLocation();	
    if(location.search){
        path = ValidateQuery(location)
        }
    console.log('ROTARY_REGISTRATION',location)
    console.log('ROTARY_REGISTRATION: path:',path)
    const user_id = path.user_id
    const [userData , setUserData] = useState([]);

    useEffect(() => {
        const ActionRQ = {
                "username":"Serodynringa",
                "password":"%tmMJZbABm6cB@tY",
                "user_id" : user_id,
                "action":"GetRotaryUserRQ"
        }
        axios.post(`${process.env.REACT_APP_SMART_URL}interface/xmlsubj/`, JSON.stringify({ActionRQ}))
            .then(response => {
                console.log('ROTARY_REGISTRATION: RESPONSE', response)
                // setUserData(response.data.client_data[0]) //data[0].data.client_data
                setUserData(response.data[0].data.client_data[0])
              })
            .catch(error =>{
                console.log('[axios error]: ', error)
              });

    }, []);
    console.log('ROTARY_REGISTRATION: userData:',userData)




    return(
        <>
        <h2>{userData.user_id}</h2>
        <div style={{display:'flex',
                     flexDirection:'row',
                    marginTop:'6vh',
                    marginLeft:'5vw',
        }}>

        <h2 style={{
                  fontSize:'30px',
                  color:'darkblue',
                  marginRight:'auto',
                   marginLeft:'auto',
                   width:'80%',
                   height:'70px',
                   backgroundImage:`url(${cityoutline})`,
                   backgroundRepeat: 'no-repeat',
                   backgroundSize:'300px 100px',
                   paddingTop:'60px',
                   marginBottom:'2vh',
                   color:'rgb(0, 77, 153)',
                   fontFamily:'Comic Sans MS',
                   fontWeight:'bold',
                   fontStyle:'italic'

      }}>Ukraine-Heritage.com</h2>

       <div style={{display:'grid',
                    gridTemplateColumns: '20% 20% 20% 20% 20%',
                            //  justifyContent:'space-evenly',
                             width:'140%',
                             marginRight:'5vw',
                             marginTop:'5vh',
                             gridColumnGap:'3vw'
                             }}>
                    {
                        menu.map((item1)=>{
                            return(
                                <h3 style={{color:'rgb(0, 77, 153)', 
                                     fontFamily:'Arial Narrow',
                                     fontWeight:'bold',
                                     paddingLeft:'1vw',
                                     fontSize:'27px'
                                     }}>{item1}
                                </h3>
                              )
                            })
                     }
                </div>
        </div>
        <div style={{
                     display: 'flex',
                     flexDirection:'row',
                     justifyContent:'space-evenly',
                     minHeight:'130vh',
                     marginTop:'1vh',
                     width:'100%',
                     marginLeft:'auto',
                     marginRight:'auto',
                     borderTop:'1px solid lightgrey'
                    //  position:'absolute',
                    //  top:'0',
                    //  zIndex:'4000',
                    //  background:'white',
                    //  paddingTop:'3vw'
        }}>
        
       
        <div style={{display:'flex',
                    flexDirection:'column',
                    maxWidth:'38%',
                    background:'rgb(230, 247, 255)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    paddingTop:'4vh',
                    borderRadius:'10px'}}>
            
             <Complete/>

             <div style={{width:'80%',
                          border:'1px solid lightgrey',
                          borderRadius:'20px',
                          minHeight:'24%',
                          marginBottom:'3vh',
                          display:'grid',
                          gridTemplateColumns: '30% 30% 30%',
                          gridTemplateRows:'50% 50%',
                          marginRight:'auto',
                          marginLeft:'auto',
                          background:'white',
                          padding:'0.5vw'
                         
                          }}>

                {
                    granticons.map((item2)=>{
                        return(
                        <span onClick={pickFunc} class='GrantIcons'>  
                          <img src={item2.image}
                                 style={{width:'3vw', 
                                      height:'3vw', 
                                      borderRadius:'70px',
                                      marginRight:'auto',
                                        marginLeft:'auto'}}/>
                               <h3 style={{fontFamily:'Arial',
                                        color:item2.color,
                                        fontSize:'17px',
                                        marginRight:'auto',
                                        marginLeft:'auto',
                                        marginTop:'1vh',
                                        fontWeight:'bold',
                                        width:'4vw',
                                        textAlign:'center'
                                        }}>
                                {item2.name}
                               </h3>
                         </span>
                          
                        )
                    })
                }
 
             </div>

             <Select  
                // defaultValue={list[0]}
                // onChange={SelectRooms}
                bordered={true}
                placeholder='Обрати Тему'
                size='large'
                style={{width:'50%',
                        fontFamily:'Arial',
                        color:'darkblue',
                        // position:'relative',
                        // zIndex:'5000',
                        marginRight:'auto',
                        marginLeft:'auto'
                }}> 
                <>
                  { 
                      list&&list.map((item)=>{ 
                          return ( 
                              <Option   
                                  // className='AvailableOptions'  
                                  value={item} 
                                  key={item}
                                  style={{fontFamily:'Arial',color:'darkblue'}}>  
                                          {item}  
                              </Option>   
                          )     
                      }) 
                  } 
                </> 
            </Select>
             {/* </div> */}
             <div>
                <Gallery galleryImages={photoarray}/>
            </div>
            </div>
            <div style={{width:'120%',
                         }}>
        
             
             <div style={{backgroundImage:`url(${map})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '110%',
                         display:'flex',
                         flexDirect:'row',
                         flexWrap:'wrap',
                         minHeight:'120vh'
                         }}
                         >
                {/* {
                    photoarray.map((item)=>{
                        return(
                            <img src={item} 
                                style={{width:'2vw', 
                                      height:'2vw', 
                                      borderRadius:'70px'}}/>
                        )
                  })    

                } */}

                <img style={{position:'absolute',top:'700px',right:'200px',width:'2vw',height:'2vw',borderRadius:'50px',cursor:'pointer'}} src={attractions}/>
                <img style={{position:'absolute',top:'600px',right:'250px',width:'2vw',height:'2vw',borderRadius:'50px',cursor:'pointer'}} src={attractions}/>
                <img style={{position:'absolute',top:'640px',right:'325px',width:'2vw',height:'2vw',borderRadius:'50px',cursor:'pointer'}} src={attractions}/>
                <img style={{position:'absolute',top:'620px',right:'420px',width:'2vw',height:'2vw',borderRadius:'50px',cursor:'pointer'}} src={attractions}/>
                <img style={{position:'absolute',top:'470px',right:'520px',width:'2vw',height:'2vw',borderRadius:'50px',cursor:'pointer'}} src={attractions}/>
                <img style={{position:'absolute',top:'520px',right:'480px',width:'2vw',height:'2vw',borderRadius:'50px',cursor:'pointer'}} src={attractions}/>
                <img style={{position:'absolute',top:'650px',right:'490px',width:'2vw',height:'2vw',borderRadius:'50px',cursor:'pointer'}} src={attractions}/>
                <img style={{position:'absolute',top:'590px',right:'490px',width:'2vw',height:'2vw',borderRadius:'50px',cursor:'pointer'}} src={attractions}/>
                <img style={{position:'absolute',top:'558px',right:'570px',width:'2vw',height:'2vw',borderRadius:'50px',cursor:'pointer'}} src={attractions}/>
                <img style={{position:'absolute',top:'570px',right:'586px',width:'2vw',height:'2vw',borderRadius:'50px',cursor:'pointer'}} src={attractions}/>
                <img style={{position:'absolute',top:'584px',right:'555px',width:'2vw',height:'2vw',borderRadius:'50px',cursor:'pointer'}} src={attractions}/>
                <img style={{position:'absolute',top:'600px',right:'596px',width:'2vw',height:'2vw',borderRadius:'50px',cursor:'pointer'}} src={attractions}/>
                <img style={{position:'absolute',top:'700px',right:'600px',width:'2vw',height:'2vw',borderRadius:'50px',cursor:'pointer'}} src={attractions}/>
                <img style={{position:'absolute',top:'660px',right:'670px',width:'2vw',height:'2vw',borderRadius:'50px',cursor:'pointer'}} src={attractions}/>
                <img style={{position:'absolute',top:'670px',right:'710px',width:'2vw',height:'2vw',borderRadius:'50px',cursor:'pointer'}} src={attractions}/>
                <img style={{position:'absolute',top:'500px',right:'710px',width:'2vw',height:'2vw',borderRadius:'50px',cursor:'pointer'}} src={attractions}/>
                <img style={{position:'absolute',top:'550px',right:'730px',width:'2vw',height:'2vw',borderRadius:'50px',cursor:'pointer'}} src={attractions}/>
                <img style={{position:'absolute',top:'560px',right:'690px',width:'2vw',height:'2vw',borderRadius:'50px',cursor:'pointer'}} src={attractions}/>
                <img style={{position:'absolute',top:'600px',right:'600px',width:'2vw',height:'2vw',borderRadius:'50px',cursor:'pointer'}} src={attractions}/>
                <img style={{position:'absolute',top:'620px',right:'650px',width:'2vw',height:'2vw',borderRadius:'50px',cursor:'pointer'}} src={attractions}/>
                <img style={{position:'absolute',top:'620px',right:'680px',width:'2vw',height:'2vw',borderRadius:'50px',cursor:'pointer'}} src={attractions}/>
                <img style={{position:'absolute',top:'590px',right:'730px',width:'2vw',height:'2vw',borderRadius:'50px',cursor:'pointer'}} src={attractions}/>
                <img style={{position:'absolute',top:'500px',right:'850px',width:'2vw',height:'2vw',borderRadius:'50px',cursor:'pointer'}} src={attractions}/>
                <img style={{position:'absolute',top:'530px',right:'870px',width:'2vw',height:'2vw',borderRadius:'50px',cursor:'pointer'}} src={attractions}/>
                <img style={{position:'absolute',top:'530px',right:'790px',width:'2vw',height:'2vw',borderRadius:'50px',cursor:'pointer'}} src={attractions}/>
                <img style={{position:'absolute',top:'630px',right:'790px',width:'2vw',height:'2vw',borderRadius:'50px',cursor:'pointer'}} src={attractions}/>
                <img style={{position:'absolute',top:'710px',right:'790px',width:'2vw',height:'2vw',borderRadius:'50px',cursor:'pointer'}} src={attractions}/>
                <img style={{position:'absolute',top:'720px',right:'810px',width:'2vw',height:'2vw',borderRadius:'50px',cursor:'pointer'}} src={attractions}/>
                <img style={{position:'absolute',top:'450px',right:'900px',width:'2vw',height:'2vw',borderRadius:'50px',cursor:'pointer'}} src={attractions}/>
                <img style={{position:'absolute',top:'445px',right:'940px',width:'2vw',height:'2vw',borderRadius:'50px',cursor:'pointer'}} src={attractions}/>
                <img style={{position:'absolute',top:'540px',right:'920px',width:'2vw',height:'2vw',borderRadius:'50px',cursor:'pointer'}} src={attractions}/>
                <img style={{position:'absolute',top:'690px',right:'1000px',width:'2vw',height:'2vw',borderRadius:'50px',cursor:'pointer'}} src={attractions}/>
                <img style={{position:'absolute',top:'610px',right:'940px',width:'2vw',height:'2vw',borderRadius:'50px',cursor:'pointer'}} src={attractions}/>
                <img style={{position:'absolute',top:'610px',right:'990px',width:'2vw',height:'2vw',borderRadius:'50px',cursor:'pointer'}} src={attractions}/>
                <img style={{position:'absolute',top:'620px',right:'1030px',width:'2vw',height:'2vw',borderRadius:'50px',cursor:'pointer'}} src={attractions}/>
                <img style={{position:'absolute',top:'650px',right:'940px',width:'2vw',height:'2vw',borderRadius:'50px',cursor:'pointer'}} src={attractions}/>
                <img style={{position:'absolute',top:'650px',right:'960px',width:'2vw',height:'2vw',borderRadius:'50px',cursor:'pointer'}} src={attractions}/>
                <img style={{position:'absolute',top:'800px',right:'940px',width:'2vw',height:'2vw',borderRadius:'50px',cursor:'pointer'}} src={attractions}/>
                <img style={{position:'absolute',top:'780px',right:'940px',width:'2vw',height:'2vw',borderRadius:'50px',cursor:'pointer'}} src={attractions}/>
                <img style={{position:'absolute',top:'710px',right:'940px',width:'2vw',height:'2vw',borderRadius:'50px',cursor:'pointer'}} src={attractions}/>
                <img style={{position:'absolute',top:'740px',right:'980px',width:'2vw',height:'2vw',borderRadius:'50px',cursor:'pointer'}} src={attractions}/>
                <img style={{position:'absolute',top:'790px',right:'1050px',width:'2vw',height:'2vw',borderRadius:'50px',cursor:'pointer'}} src={attractions}/>
             </div>
            </div>
     </div>
     </>
    )
}