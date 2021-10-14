import React,{useState, useEffect} from 'react';
import {Select} from 'antd'
import {useIntl} from 'react-intl'
import { useDispatch} from "react-redux";
import { useHistory } from "react-router-dom";

import config from '../../../Redux/config'
import {changeLang} from '../../../Redux/actions/locale'


export const LangSelectionTool = () =>{

    const [selectedLang, setSelectedLang] = useState(config.defaultLang);

    const history = useHistory();
    const { Option } = Select;

    const supportedLangs = config.supportedLangs;

    const dispatch = useDispatch();

    const SelectRooms = (value) => {
        setSelectedLang(value)
        history.push(`/${value}`)
        dispatch(changeLang(selectedLang))
    }

    return(
        <Select 
            defaultValue={config.defaultLang}
            onChange={SelectRooms}
            bordered={true}
            size='small'> 
             <>
                    {
                        supportedLangs&&supportedLangs.map((item)=>{
                            return (
                                <Option  
                                    // className='AvailableOptions' 
                                    value={item}
                                    key={item}> 
                                            {item} 
                                </Option>  
                            )    
                        })
                    }
            </>
        </Select>
    )
}