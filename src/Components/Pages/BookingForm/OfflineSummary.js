import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import {useIntl,FormattedMessage} from 'react-intl'

import './OfflineSummary.css'

export const OfflineSummary = ({wait}) =>{

    const [hidden, setHidden] = useState("Hidden")
    const {locale,messages} = useIntl();

    useEffect(() => {
        setTimeout(Show,wait)
        },[]);

    const Show = () =>{
        setHidden("")
    }

    return(
        <h2 className={hidden}>
                     {
                        messages&&messages.map((item)=>{
                          if(item.sitepage_region_id === '6'&&item.sitepage_type_id === '19'){
                            return (
                               <FormattedMessage id={item.title.map((item1)=>item1.text)}/>
                            )
                          }
                        })
                      } 
        </h2>
    )
}