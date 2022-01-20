import React,{useEffect,useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getPurePage} from '../../../Redux/actions'
import ReactHtmlParser from 'react-html-parser'
import {useIntl, FormattedMessage} from 'react-intl'
import {useWindowWidthAndHeight} from '../Helpers/WindowResizeHook'
import {ClearInput} from '../../Library/PageDevices/ClearInput'

import './TermsConditionsCSS.css'

export const TermsConditions = ({readTerms,closeTermsConditions}) =>{

    const {locale,messages} = useIntl();
    const [width, height] = useWindowWidthAndHeight();
    const dispatch = useDispatch();

    // const [makeVisible, setMakeVisible] = useState(true)

    const purePage = useSelector(state => state.pages.purepage)

    useEffect ( () => {
        dispatch (getPurePage ('19',locale));
      },['19']);
  
        console.log('[PURE_PAGE]', purePage)
  
      if( !purePage ){
        return <div> Loading...</div>
    }

    return(
        <div class={`${readTerms === false? 'TermsNotVisible':'TermsVisible'}`} 
            style={{
                maxWidth:width, 
                maxHeight:height/2}}>
             {
                purePage && purePage.map((page)=>{
                  if(page.content_name === "Body"){
                    return (
                      <>      
                        <ClearInput makevisible={true}
                                    clearInput={closeTermsConditions}/>                
                        <div>
                            {ReactHtmlParser(page.text)}
                        </div>
                      </>
                    )
                  }
                })
            }
        </div>
    )
}