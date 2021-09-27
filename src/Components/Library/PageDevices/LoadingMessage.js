import React ,{useEffect, useState } from 'react'
import {LoadingOutlined} from '@ant-design/icons'

import './LoadingMessage.css'

export const LoadingMessage = ({loadingMessageClass,itemWidth}) => {

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
                  The content is being loaded... Thanks for waiting.                               
              </div>   
            </>     
          ):( <h3 className='LoadingText'>
                  Sorry, your search returned no result
              </h3>)
        }

    </div>
  )
}