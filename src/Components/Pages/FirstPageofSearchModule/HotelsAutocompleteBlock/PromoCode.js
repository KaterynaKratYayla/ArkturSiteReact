import React, {useState, useEffect, useCallback}  from 'react'
// import axios from "axios"
import {useDispatch, useSelector} from 'react-redux'
import {getPromoCode} from "../../../../Redux/actions/promocode"
import {useWindowWidthAndHeight} from '../../Helpers/WindowResizeHook'

import {PlusOutlined, MinusOutlined, DownOutlined} from '@ant-design/icons'
import {Pax} from '../../../Library/Icons/pax.js'
// import {RateChoiceBlock} from './RateChoiceBlock'

import './PromoCodeCSS.css'
import 'antd/dist/antd.css';

export const PromoCode =({MakeCodeVisible, promoCodeOpen}) =>{

  const [code,setCode] = useState()

  const PromoCode = useSelector(state => state.promocode.promocode)

 const dispatch = useDispatch();

 const [width, height] = useWindowWidthAndHeight();

//  useEffect ( () => {
//     dispatch (getPromoCode ());
//   }, [])


  const SetInput = (e) =>{
    setCode(e.target.value)
    dispatch (getPromoCode (e.target.value))
  }
   
     return(
        <div>
            <div onClick={MakeCodeVisible}>  
                        <h4 style={{color:'rgb(136, 6, 6)',
                                    fontSize:'14px',
                                    fontWeight:'bold',
                                    marginTop:'auto',
                                    marginBottom:'auto'
                                  }}>
                    PROMO CODE</h4>
             </div>
             <input class={promoCodeOpen === false? 'PCPopUpNotActive' : 'PCPopUpActive'} 
                     style={{width:`${width >=1000? null: width*0.8}px`}}
                     placeholder='Partner ID/Promo Code'
                     onInput={SetInput}
                     value={!PromoCode?'':PromoCode}
                     />
      </div>
    )
} 