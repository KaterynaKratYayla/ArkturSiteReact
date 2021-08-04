import React ,{useEffect, useState } from 'react'
import {LoadingOutlined} from '@ant-design/icons'

import './LoadingMessage.css'

export const LoadingMessage = ({loadingMessageClass}) => {

const [show, setShow] = useState(true)

useEffect (()=>{
    let timer = setTimeout(()=>
    setShow(false),10000);
    return()=>{
        clearTimeout(timer);
       };
    
},[])

return(
    <div className={loadingMessageClass?loadingMessageClass:'Loading'}>
        {
          show === true?(
            <>
              <LoadingOutlined className='LoadingOutlinedIcon'/>
              <div className='LoadingText'>
                  The content is being loaded. Please wait                               
              </div>   
            </>     
          ):( <h3 className='LoadingText'>
                  Sorry, your search returned no result
              </h3>)
        }

    </div>
  )
}