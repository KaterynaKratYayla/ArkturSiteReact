import React, {useState,useEffect} from 'react'
import { useHistory } from "react-router-dom";
import {useWindowWidthAndHeight} from '../Helpers/WindowResizeHook'
import {LargeScreenSearch} from './LargeScreenSearch'
import {SearchInner} from '../../Library/SearchPannel/SearchPannel'

import './Search.css';
import './SwitcherFront.css';
import 'antd/dist/antd.css';
import '../../Library/SearchPannel/SearchPannelCSS.css'

// moment.locale('uk')

export const Search = (props) => {
      // console.log('[PROPS] : ', props)
      const genProps = props

  const history = useHistory();

  const [width, height] = useWindowWidthAndHeight();

   
  return(
        <div>
             { width > 1000 ?
				
        <LargeScreenSearch
            wrapper='formOuterWrapper'
            innerWrapper='formInnerWrapper'
            formClass='mySearch'
            autocompleteClass='Autocomplete'
            datepickerClass='datePicker'
            props={genProps}
            width={width}
            />
            :
        <SearchInner
           wrapper='formOuterWrapper_inner'
           innerWrapper='formInnerWrapper_inner'
           formClass='mySearch_inner'
           autocompleteClass={null}
           datepickerClass='datePicker_inner'
           props={genProps}
           width={width}
           />
          }                                   
                

       </div>
      )
    }


    