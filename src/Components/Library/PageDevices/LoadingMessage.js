import React ,{useEffect, useState } from 'react'
import {useIntl, FormattedMessage} from 'react-intl'
import {LoadingOutlined} from '@ant-design/icons'

import './LoadingMessage.css'

export const LoadingMessage = ({loadingMessageClass,itemWidth}) => {

const {locale,messages} = useIntl();
const [show, setShow] = useState(true)

useEffect (()=>{
    let timer = setTimeout(()=>
    setShow(false),10000);
    return()=>{
        clearTimeout(timer);
       };
    
},[])

return(
    <div className={loadingMessageClass?loadingMessageClass:'Loading'} 
        style={{width:`${itemWidth? itemWidth : null}`,
         display:'block', 
         position:'absolute',
         zIndex:'30000',
         backgroundColor:'rgb(227, 227, 241)',
         borderRadius:'5px'}}>
        {
          show === true?(
            <>
              <div style={{
                    textAlign: 'center',
                    marginTop:'20%'}}>
                      <LoadingOutlined className='LoadingOutlinedIcon'/>
              </div>
              <div className='LoadingText'>
                 {
                        messages&&messages.map((item)=>{
                          if(item.sitepage_region_id === '6'&&item.sitepage_type_id === '18'){
                            return (
                               <FormattedMessage id={item.title.map((item1)=>item1.text)}/>
                            )
                          }
                        })
                      }                               
              </div>   
            </>     
          ):( <h3 className='LoadingText'>
                  {
                        messages&&messages.map((item)=>{
                          if(item.sitepage_region_id === '6'&&item.sitepage_type_id === '26'){
                            return (
                               <FormattedMessage id={item.title.map((item1)=>item1.text)}/>
                            )
                          }
                        })
                      }   
              </h3>)
        }

    </div>
  )
}