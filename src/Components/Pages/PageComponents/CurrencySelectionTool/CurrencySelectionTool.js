import React ,{useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useIntl} from 'react-intl'
import {Select} from 'antd'
import { useHistory,useLocation } from "react-router-dom";

import {getCurrency,getPickedCurrencyResponse} from '../../../../Redux/actions/currency'

import 'antd/dist/antd.css';

export const CurrencySelectionTool = ({path}) =>{

    console.log('[A_PATH]',path)

    const dispatch = useDispatch();
    const history = useHistory();

    // const pickedCurrency = useSelector(state=>state.currency.pickedCurrency)
    const currencies = useSelector(state => state.currency.currencies)
    const route = useSelector(state => state.routes.route)
    
    const [currency, setCurrency] = useState(path.selected_currency)
   
    const {locale, messages} = useIntl();
    const { Option } = Select;

    // dispatch(getPickedCurrencyResponse(currency))

    const SelectCurrency = (value) => {
        setCurrency(value)
        history.push(`/${locale}/?selected_currency=${value}`)
        dispatch(getPickedCurrencyResponse(value))
    }

    return(
      <div style={{marginRight:'2vw'}}>
        <Select  
            defaultValue={currency}
            onChange={SelectCurrency}
            bordered={true}
            size='small'> 
             <>
                    { 
                        currencies&&currencies.map((item)=>{ 
                            return ( 
                                <Option    
                                    value={item.name} 
                                    key={item.id}>  
                                            {item.name}  
                                </Option>   
                            )     
                        }) 
                    } 
            </> 
       </Select>
      </div> 
   )

}