import React,{useState, useEffect} from 'react';
import { useSelector} from 'react-redux';
import { DatePicker ,Space , Select , InputNumber, Input , Radio} from 'antd';
import {useWindowWidthAndHeight} from '../../../Pages/Helpers/WindowResizeHook';
import {useIntl,FormattedMessage} from 'react-intl';
import ReactHtmlParser from 'react-html-parser';

import LodgingTypes from '../../StaticJsonData/LodgingTypes.json';

import { PlaceHolderStrings } from '../../Localization/placeholders.js'

import {SendForm} from './SendForm.js'

// import cities from 'cities.json';

import CitiesTurkey from '../../StaticJsonData/CitiesTurkey.json'

// import {getCode, getName} from 'country-list';

import './SupplierPartnerFormCSS.css'

export const SupplierPartnerForm = ({text}) =>{

const placeholder = PlaceHolderStrings();

    const [accomType, setAccomType] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [amountRooms,setAmountRooms] = useState(1);
    const [floorAmount,setFloorAmount] = useState(1);
    const [renYear, setRenYear] = useState('');
    const [telInput, setTelInput] = useState('');
    const [adrressInput, setAddressInput] = useState('');
    const [value1,setValue1] = useState(''); //free accomm refugees
    const [value2,setValue2] = useState(''); //payable accomm for refugees
    const [daysAmount,setDaysAmount] = useState(1); //amount of days that people accept free of charge for refugees
    const [daysAmount_2,setDaysAmount_2] = useState(1); //amount of days that people accept at special rates for refugees
    const [propertyName, setPropertyName] = useState();
    const [ownerName, setOwnerName] = useState();
    const [position,setPosition] = useState('');
    const [website, setWebSite] = useState('');
    const [email, setEmail] = useState('');
    const [list,setList] = useState()
    const [clicked, setClicked] = useState(false)

    const {messages,locale} = useIntl();
    const { Option } = Select;
    const { TextArea } = Input;

    const selectCountry = (value) =>{
        setCountry(value)
    }

    const onChangeCity = (value) => {
        setCity(value)
      }
      
    const onSearchCity = (val) => {
        console.log('search:', val);
      }
    
    const selectingAccomTypes = (value) =>{
        setAccomType(value)
    }

    const SelectRoomAmount = (value) =>{
        setAmountRooms(value)
    }

    const selectPostion = (value) =>{
         setPosition(value)
    }

    const SelFloors = (value) =>{
        setFloorAmount(value)
    }

    const SelYear = (date,dateString) =>{
        setRenYear(dateString)
    }

    const SelNameProperty = (e) =>{
      setPropertyName(e.target.value)
    }

    const SelOwnerName = (e)=>{
      setOwnerName(e.target.value)
    }

    const SelTelephone = (e) =>{
        setTelInput(e.target.value)
    }

    const SelAddress = (e) =>{
        setAddressInput(e.target.value)
    }

    const InputEmail = (e) =>{
      setEmail(e.target.value)
    }

    const SelWebSite = (e) =>{
        setWebSite(e.target.value)
    }

    const onChange1 = e => {
        console.log('radio1 checked', e.target.value);
        setValue1(e.target.value);
    }

    const onChange2 = e => {
          setValue2(e.target.value)
    }

    const SelDays = (value) =>{
        setDaysAmount(value)
    }

    const SelDays_2 = (value) =>{
        setDaysAmount_2(value)
    } 

    const Complete = () =>{
        const newList = {
            country:country,
            city:city,
            accomType:accomType,
            amountRooms:amountRooms,
            property_name:propertyName,
            owner_name:ownerName,
            position:position,  ///new
            website:website,
            floorAmount:floorAmount,
            renYear:renYear,
            tel:telInput,
            // email:
            address:adrressInput,
            freeAccom:value1,
            freeAccomDays:daysAmount,
            discAccom:value2,
            discAccomDays:daysAmount_2,
        }
      setList(newList)
      setClicked(true)
    }

    const onSubmit = (e) =>{
        e.preventDefault()
    }

    // const Cities = cities.filter((item)=>{
    //     return item.country === 'UA'
    // })

    // console.log('CITIES','hi',Cities)

    return(
       <form class='supplierWrapper'
              onSubmit={onSubmit}>
          <h3>{ReactHtmlParser(text)}</h3>

          
        <div class="blocks">
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
            //    defaultValue={TurkeyCitiesList.map((item,index,array)=>array[0].name)}
               onChange={selectCountry}
               placeholder={placeholder.placeHolderCountry}
               bordered={true}
               size='middle'
               style={{minWidth:'5vw',marginRight:'2vw'}}> 
              <Option  
                    value={'MD'}
                    key={'MD'}> 
                           {'Moldova'} 
              </Option>
              <Option  
                    value={'TR'}
                    key={'TR'}> 
                           {'Turkey'} 
              </Option>
              <Option  
                    value={'UA'}
                    key={'UA'}> 
                           {'Ukraine'} 
              </Option>
           </Select>

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
                    //  cities&&cities.map((item)=>{
                    //   if(country === item.country){
                    CitiesTurkey&&CitiesTurkey.map((item)=>{
                     if(country === item.country){
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
                   if(item.id === 171){
                       return (
                          <FormattedMessage id={item.title.map((item1)=>item1.text)}/>
                        )
                      }
                  })
              } 
            </span>
            <Select 
            //    defaultValue={lodgingTypes[0]}
               onChange={selectingAccomTypes}
               bordered={true}
               placeholder={placeholder.placeHolderSelect}
            //    size='middle'
               style={{minWidth:'5vw'}}> 
                 <>
                   {
                     LodgingTypes&&LodgingTypes.map((item)=>{
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

         <span>
             {
               messages&&messages.map((item)=>{
                   if(item.id === 173){
                       return (
                          <FormattedMessage id={item.title.map((item1)=>item1.text)}/>
                        )
                      }
                  })
              } 
         </span>
         <Space>
               <InputNumber min={1} max={100000} defaultValue={1} onChange={SelectRoomAmount} />
        </Space>

        </div>

        <div class='blocks_2'>
            <span>
            {
               messages&&messages.map((item)=>{
                   if(item.id === 174){
                       return (
                          <FormattedMessage id={item.title.map((item1)=>item1.text)}/>
                        )
                      }
                  })
              } 
            </span>
            <Space>
               <InputNumber min={1} max={100000} defaultValue={1} onChange={SelFloors} />
            </Space>

            <span>
            {
               messages&&messages.map((item)=>{
                   if(item.id === 175){
                       return (
                          <FormattedMessage id={item.title.map((item1)=>item1.text)}/>
                        )
                      }
                  })
              } 
            </span>
              <Space direction="vertical"
                    style={{background:'white', marginRight:'2vw'}}>
                         <DatePicker 
                            size='middle' 
                             onChange={SelYear} 
                             picker='month' 
                            //  format={dateFormat} 
                             placeholder={placeholder.placeHolderMonth}
                             bordered={false}
                             className={'SupplierMonth'}
                            //  disabledDate={disabledDate}
                               />
            </Space>

        </div>

        <div class='blocks_3'>
            <span>
            {
               messages&&messages.map((item)=>{
                   if(item.id === 177){
                       return (
                          <FormattedMessage id={item.title.map((item1)=>item1.text)}/>
                        )
                      }
                  })
              } 
            </span>
            <TextArea rows={1} style={{marginTop:'1vh',marginBottom:'1vh'}}
                      onChange={SelNameProperty}
                      value={propertyName}/>

            <span>
            {
               messages&&messages.map((item)=>{
                   if(item.id === 178){
                       return (
                          <FormattedMessage id={item.title.map((item1)=>item1.text)}/>
                        )
                      }
                  })
              } 

            </span>
            <TextArea rows={1} style={{marginTop:'1vh',marginBottom:'1vh'}}
                      onChange={SelOwnerName}
                      value={ownerName}/>
      
        </div>

        <div class='blocks_5'>
          <span>
          {
               messages&&messages.map((item)=>{
                   if(item.id === 179){
                       return (
                          <FormattedMessage id={item.title.map((item1)=>item1.text)}/>
                        )
                      }
                  })
              } 

          </span>
            <Select 
               onChange={selectPostion}
               bordered={true}
               placeholder={placeholder.placeHolderSelect}
               style={{width:'13vw'}}> 
                 <>
                   {
                     LodgingTypes&&LodgingTypes.map((item)=>{
                      if(item.lang === locale){
                       return(
                        item.ownership_types.map((item1)=>{
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

         <span>
            {
               messages&&messages.map((item)=>{
                   if(item.id === 180){
                       return (
                          <FormattedMessage id={item.title.map((item1)=>item1.text)}/>
                        )
                      }
                  })
              } 
         </span>
            <Input style={{width:'80%',background:'white'}} 
                   onChange={SelWebSite}
                   value={website}/>

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
                   onChange={InputEmail}
                   value={email}/>

        </div>

        <div class='blocks_3'>
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
                      onChange={SelAddress}
                      value={adrressInput}/>

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
            <Input style={{width:'100%',background:'white'}} 
                   onChange={SelTelephone}
                   value={telInput}/>
      
        </div>

        <div class="blocks_4">
           <span>
           {
               messages&&messages.map((item)=>{
                   if(item.id === 184){
                       return (
                          <FormattedMessage id={item.title.map((item1)=>item1.text)}/>
                        )
                      }
                  })
              } 
           </span>
           <Radio.Group
                options={['Yes','No']}
                onChange={onChange1}
                value={value1}
                optionType="button"
                buttonStyle="solid"
            />
            <span>
            {
               messages&&messages.map((item)=>{
                   if(item.id === 185){
                       return (
                          <FormattedMessage id={item.title.map((item1)=>item1.text)}/>
                        )
                      }
                  })
              } 
            </span>
            <Space>
               <InputNumber min={1} max={100000} defaultValue={1} onChange={SelDays} />
           </Space>
        </div>

        <div class="blocks_4">
           <span>
           {
               messages&&messages.map((item)=>{
                   if(item.id === 186){
                       return (
                          <FormattedMessage id={item.title.map((item1)=>item1.text)}/>
                        )
                      }
                  })
              } 
           </span>
           <Radio.Group
                options={['Yes','No']}
                onChange={onChange2}
                value={value2}
                optionType="button"
                buttonStyle="solid"
            />
             <span>
             {
               messages&&messages.map((item)=>{
                   if(item.id === 185){
                       return (
                          <FormattedMessage id={item.title.map((item1)=>item1.text)}/>
                        )
                      }
                  })
              } 
             </span>
            <Space>
                   <InputNumber min={1} max={100000} defaultValue={1} onChange={SelDays_2} />
            </Space>
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
             <SendForm list={list}/>:
          null
       }
       </form>
      
    )
}