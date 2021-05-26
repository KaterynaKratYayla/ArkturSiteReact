import React from 'react'
import {LoadingOutlined} from '@ant-design/icons'

import './LoadingMessage.css'

export const LoadingMessage = () => {
return(
    <div className='Loading'>
        <LoadingOutlined className='LoadingOutlinedIcon'/>
                 <div style={{color:'grey',
                              fontSize:'15px',
                              fontFamily:'Arial'}}>
                                  The content is being loaded. Please wait
                </div>        
    </div>
    )
}