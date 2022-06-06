import React,{useState, useEffect} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { DatePicker ,Space , Select , InputNumber, Input , Radio} from 'antd';
import {useWindowWidthAndHeight} from '../../../../Pages/Helpers/WindowResizeHook';
import {useIntl,FormattedMessage} from 'react-intl';
import ReactHtmlParser from 'react-html-parser';
import { ContentPages} from '../../../../Pages/PageComponents/ContentPages';
import { getPurePage } from '../../../../../Redux/actions';

import { PlaceHolderStrings } from '../../../Localization/placeholders.js'
import CitiesTurkey from '../../../StaticJsonData/CitiesTurkey.json'
import RefugeeStatus from "../../../StaticJsonData/RefugeeStatus.json"
import Occupations from  "../../../StaticJsonData/Occupations.json"

import {RefugeeSubmit} from './RefugeeSubmit'

import './RefugeeFormCSS.css'
import { SET_MESSAGE } from '../../../../../Redux/actions/types';

export const RefugeeDetailsForm = ({text}) =>{

const placeholder = PlaceHolderStrings();

    const [city, setCity] = useState('');
    const [name,setName] = useState('');
    const [surname,setSurname] = useState('');
    const [arrival,setArrivalDate] = useState('');
    const [status, setStatus] = useState('');
    const [occupation, setOccupation] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');
    const [address, setAddress] = useState();
    const [value1,setValue1] = useState(''); //whether you want to be a part of BlackSeaAssociation
    const [value2,setValue2] = useState(''); //whether you want to go to Ukrainian school
    const [childrenPresent,setChildren] =  useState(placeholder.placeHolderNo)
    const [amount,setChildrenAmount] = useState(1);
    const [age,setAge] = useState(0);
    const [ageArray,setAgeArray]=useState([])
    const [list,setList] = useState({});
    const [clicked, setClicked] = useState(false);

    const {messages,locale} = useIntl();
    const { Option } = Select;
    const { TextArea } = Input;

    const refugeeForm = useSelector(state => state.pages.purepage)
    const dispatch = useDispatch();

    const onChangeCity = (value) => {
        setCity(value)
      }
      
    const onSearchCity = (val) => {
        console.log('search:', val);
      }
    
    const funcName = (e) =>{
        setName(e.target.value)
    }

    const funcSurname = (e) =>{
        setSurname(e.target.value)
    }
   
    const funcArrival = (date,dateString) =>{
      setArrivalDate(dateString)
  }
    const funcStatus = (value) =>{
        setStatus(value)
    }

    const funcOccupation = (value) =>{
      setOccupation(value)
    }

    const funcEmail = (e) =>{
      setEmail(e.target.value)
    }

    const funcTel = (e) =>{
        setTel(e.target.value)
    }

    const funcAddress = (e) =>{
        setAddress(e.target.value)
    }

    const funcAssociation = e => {
        setValue1(e.target.value);
    }

    const funcChildren = (e) =>{
      setChildren(e.target.value)

    }

    const funcAmount = (value) =>{
      setChildrenAmount(value)
    }

    const funcAge = (index) => (value) =>{
      setAge(value)
      setAgeArray([...ageArray,index])
      
    }

    const funcSchool = e => {
          setValue2(e.target.value)
    }

    const Complete = () =>{
        const newList = {
            city:city,
            property_name:name,
            owner_name:surname,
            renYear:arrival,
            position:occupation,  
            accomType:status,
            website:email,
            tel:tel,
            address:address,
            freeAccom:value1,
            discAccom:value2,
            children:childrenPresent,
            childrenAmount:amount
        }
      setList(newList)
      setClicked(true)
    }

    const onSubmit = (e) =>{
        e.preventDefault()
    }

    return(
       <form class='supplierWrapper'
              onSubmit={onSubmit}>
          <h3>{ReactHtmlParser(text)}</h3>
          
        <div class="blocks_4">
           <span>
           {
               messages&&messages.map((item)=>{
                   if(item.id === 168){
                       return (
                          <FormattedMessage id={item.title.map((item1)=>item1.text)}/>
                        )
                      }
                  })
              } 
           </span>

         <Select
                showSearch
                placeholder={placeholder.placeHolderCity}
                optionFilterProp="children"
                onChange={onChangeCity}
                onSearch={onSearchCity}
                style={{minWidth:'10vw',marginRight:'2vw'}}
                filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                  }
                               
                    >
                    {
                    CitiesTurkey&&CitiesTurkey.map((item)=>{
                     if(item.country === 'TR'){
                       return (
                         <Option  
                            // className='AvailableOptions' 
                            value={item.name}
                            key={item.id}> 
                                  {item.name} 
                         </Option>  
                        )
                      }  
                     })
                    //   }
                    }
              </Select>
        </div>
        <div class='blocks_2'>
        <span>
            {
               messages&&messages.map((item)=>{
                   if(item.id === 93){
                       return (
                          <FormattedMessage id={item.title.map((item1)=>item1.text)}/>
                        )
                      }
                  })
              } 
         </span>
            <Input style={{width:'80%',background:'white'}} 
                   onChange={funcName}
                   value={name}/>
         <span>
            {
               messages&&messages.map((item)=>{
                   if(item.id === 94){
                       return (
                          <FormattedMessage id={item.title.map((item1)=>item1.text)}/>
                        )
                      }
                  })
              } 
         </span>
            <Input style={{width:'80%',background:'white'}} 
                   onChange={funcSurname}
                   value={surname}/>
        </div>

        <div class='blocks_4'>
        <span>
            {
               messages&&messages.map((item)=>{
                   if(item.id === 189){
                       return (
                          <FormattedMessage id={item.title.map((item1)=>item1.text)}/>
                        )
                      }
                  })
              } 
            </span>
              <Space direction="vertical"
                    style={{background:'white'}}>
                         <DatePicker 
                            size='middle' 
                             onChange={funcArrival} 
                             picker='date' 
                            //  format={dateFormat} 
                             placeholder={placeholder.placeHolderDateTurkey}
                             bordered={false}
                             className={'SupplierMonth'}
                            //  disabledDate={disabledDate}
                               />
            </Space>
        </div>

        <div class='blocks_4'>
            <span>
            {
               messages&&messages.map((item)=>{
                   if(item.id === 190){
                       return (
                          <FormattedMessage id={item.title.map((item1)=>item1.text)}/>
                        )
                      }
                  })
              } 
            </span>
            <Select 
            //    defaultValue={lodgingTypes[0]}
               onChange={funcStatus}
               bordered={true}
               placeholder={placeholder.placeHolderSelect}
            //    size='middle'
               style={{minWidth:'5vw'}}> 
                 <>
                   {
                     RefugeeStatus&&RefugeeStatus.map((item)=>{
                      if(item.lang === locale){
                       return(
                        item.type.map((item1)=>{
                            console.log('ITEM1',item1)
                         return (
                            <Option  
                               // className='AvailableOptions' 
                               value={item1}
                               key={item1}> 
                                       {item1} 
                            </Option>  
                           )  
                         })
                        )
                       }
                     })
                    }
                </> 
         </Select>

         </div>


        <div class='blocks_4'>
            <span>
            {
               messages&&messages.map((item)=>{
                   if(item.id === 191){
                       return (
                          <FormattedMessage id={item.title.map((item1)=>item1.text)}/>
                        )
                      }
                  })
              } 
            </span>
            
            <Select 
            //    defaultValue={lodgingTypes[0]}
               onChange={funcOccupation}
               bordered={true}
               placeholder={placeholder.placeHolderSelect}
            //    size='middle'
               style={{minWidth:'5vw'}}> 
                 <>
                   {
                     Occupations&&Occupations.map((item)=>{
                      if(item.lang === locale){
                       return(
                        item.occupation.map((item1)=>{
                         return (
                            <Option  
                               // className='AvailableOptions' 
                               value={item1}
                               key={item1}> 
                                       {item1} 
                            </Option>  
                           )  
                         })
                        )
                       }
                     })
                    }
                </> 
         </Select>

      
        </div>

        <div class='blocks_2'>
         <span>
            {
               messages&&messages.map((item)=>{
                   if(item.id === 181){
                       return (
                          <FormattedMessage id={item.title.map((item1)=>item1.text)}/>
                        )
                      }
                  })
              } 
         </span>
            <Input style={{width:'80%',background:'white'}} 
                   onChange={funcEmail}
                   value={email}/>

          <span>
          {
               messages&&messages.map((item)=>{
                   if(item.id === 183){
                       return (
                          <FormattedMessage id={item.title.map((item1)=>item1.text)}/>
                        )
                      }
                  })
              } 
          </span>
            <Input style={{width:'80%',background:'white'}} 
                   onChange={funcTel}
                   value={tel}/>

        </div>

        <div class='blocks_4'>
            <span>
            {
               messages&&messages.map((item)=>{
                   if(item.id === 182){
                       return (
                          <FormattedMessage id={item.title.map((item1)=>item1.text)}/>
                        )
                      }
                  })
              } 
            </span>
            <TextArea rows={3} style={{marginTop:'1vh',marginBottom:'1vh'}}
                      onChange={funcAddress}
                      value={address}/>


        </div>

        <div class="blocks_3">
           <span>
           {
               messages&&messages.map((item)=>{
                   if(item.id === 192){
                       return (
                          <FormattedMessage id={item.title.map((item1)=>item1.text)}/>
                        )
                      }
                  })
              } 
           </span>
           <Radio.Group
                options={[placeholder.placeHolderYes,placeholder.placeHolderNo, placeholder.placeHolderNotsure]}
                onChange={funcAssociation}
                value={value1}
                optionType="button"
                buttonStyle="solid"
                style={{display:'flex', alignItems:'center'}}
            />
        </div>

        <div class="blocks_5">
          <span>
           {
               messages&&messages.map((item)=>{
                   if(item.id === 197){
                       return (
                          <FormattedMessage id={item.title.map((item1)=>item1.text)}/>
                        )
                      }
                  })
              } 
           </span>

           <Radio.Group
                options={[placeholder.placeHolderYes,placeholder.placeHolderNo]}
                onChange={funcChildren}
                value={childrenPresent}
                optionType="button"
                buttonStyle="solid"
            />
   
         <span className={childrenPresent === placeholder.placeHolderNo? 'ChildrenNA' : 'ChildrenAvailable'}>
           {
               messages&&messages.map((item)=>{
                   if(item.id === 193){
                       return (
                          <FormattedMessage id={item.title.map((item1)=>item1.text)}/>
                        )
                      }
                  })
              } 
           </span>

           <Space className={childrenPresent === placeholder.placeHolderNo? 'ChildrenNA' : 'ChildrenAvailable'}>
               <InputNumber min={1} max={100000} defaultValue={0} onChange={funcAmount} />
           </Space>

           <div className={childrenPresent === placeholder.placeHolderNo? 'ageNA' : 'ageAvailable'}>
            {
              [...Array(amount)].map((el, index) =>{

                return(  
                <div style={{display: 'flex', 
                            flexDirection:'row',
                            justifyContent:'space-around'}}>
                                  
                  <span>
                  {
                     messages&&messages.map((item)=>{
                         if(item.id === 194){
                             return (
                                <FormattedMessage id={item.title.map((item1)=>item1.text+' '+parseInt(index+1))}/>
                              )
                            }
                        })
                    } 
                 </span>
                    <Space key={index}>
                      <InputNumber min={1} max={100000} defaultValue={0} onChange={funcAge(index)} />
                    </Space>
                   </div> 
                     )
                  })
            
              }
                
        </div>
          
        </div>

        <div class="blocks_3">
           <span>
           {
               messages&&messages.map((item)=>{
                   if(item.id === 196){
                       return (
                          <FormattedMessage id={item.title.map((item1)=>item1.text)}/>
                        )
                      }
                  })
              } 
           </span>
           <Radio.Group
                options={[placeholder.placeHolderYes,placeholder.placeHolderNo, placeholder.placeHolderNotsure]}
                onChange={funcSchool}
                value={value2}
                optionType="button"
                buttonStyle="solid"
                style={{display:'flex', alignItems:'center'}}
            />
     
        </div>


       <button class="SupplierSubmitButton"
           onClick={Complete}>
                {
                  messages&&messages.map((item)=>{
                    if (item.sitepage_region_id ===7&&item.sitepage_type_id === 13){                   
                       return (
                         <FormattedMessage id={item.title.map((item1)=>item1.text)}/>
                      )
                    }
                })
              }
                    
       </button>
       {
         clicked === true?
             <RefugeeSubmit list={list}/>:
          null
       }
       </form>
      
    )
}
