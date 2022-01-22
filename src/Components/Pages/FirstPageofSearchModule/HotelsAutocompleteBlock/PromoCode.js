import React, {useState, useEffect, useCallback}  from 'react'
// import axios from "axios"
import {useDispatch, useSelector} from 'react-redux'
import {getPromoCode} from "../../../../Redux/actions/promocode"
import {useWindowWidthAndHeight} from '../../Helpers/WindowResizeHook'
import {useLocation} from 'react-router-dom'

import {PlusOutlined, MinusOutlined, DownOutlined} from '@ant-design/icons'
import {Pax} from '../../../Library/Icons/pax.js'
// import {RateChoiceBlock} from './RateChoiceBlock'
import {ValidateQuery} from '../../Helpers/helper'

import './PromoCodeCSS.css'
import 'antd/dist/antd.css';

export const PromoCode =({MakeCodeVisible, promoCodeOpen,refpartner}) =>{

  let path ;
	const location = useLocation();
	
  if(location.search){
	   path = ValidateQuery(location)
	}
	else path = {refpartner:'',default:true}

  console.log('PATH_PATH',path)

  // const [code,setCode] = useState(path.refpartner)
  const [code,setCode] = useState(path.refpartner?path.refpartner:'')

  // const PromoCode = useSelector(state => state.promocode.promocode)

 const dispatch = useDispatch();

 const [width, height] = useWindowWidthAndHeight();

//  useEffect ( () => {
    // dispatch (getPromoCode (refpartner));
//   }, [])

  const SetInput = (e) =>{
    setCode(e.target.value)
    // localStorage.setItem('promocode', e.target.value)
    // dispatch (getPromoCode (path.refpartner?path.refpartner:e.target.value))
    dispatch (getPromoCode(e.target.value))
    // if(code === ''&&localStorage.getItem('promocode')){
    //   localStorage.removeItem('promocode')
    // }
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
                     value={code}
                  />
      </div>
    )
} 