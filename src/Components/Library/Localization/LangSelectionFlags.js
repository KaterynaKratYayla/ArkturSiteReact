import React,{useState, useEffect} from 'react';
import {NavLink} from "react-router-dom";
import {Select} from 'antd'
import {useIntl} from 'react-intl'
import { useDispatch} from "react-redux";
import { useHistory,useLocation } from "react-router-dom";
import engflag_ImgID1 from '../Images/Rotary/engflag_Images/engflag_ImgID1.gif'
import frflag from '../Images/Rotary/frflag.svg'
import ukrflag from '../Images/Rotary/ukrflag.svg'

import config from '../../../Redux/config'
import {getLangResponse, changeLang} from '../../../Redux/actions/locale'
import { localeData } from 'moment';

import './LangSelectionFlagsCSS.css'

export const LangSelectionFlags = () =>{

    const {locale, messages} = useIntl();

    const [align, setAlign] = useState(locale);

    const history = useHistory();
    const { Option } = Select;

    const supportedLangs = config.supportedLangs;

    const dispatch = useDispatch();

    const toggler = ( value ) => _ => {
        setAlign(value);
        history.push(`/${value}`)
        dispatch(getLangResponse(value))
       }

    return(
      <>
        <LangSwitcher name={'align'} changeHandler={toggler} active={align} /*switcherWidth={`${width*0.2}px`}*/>

           <LangSwitcherItem value='uk'><img width="50px" height="40px" style={{marginBottom:'-4px',marginTop:'-2px'}} src={ukrflag}/></LangSwitcherItem>
           <LangSwitcherItem value='en'><img width="50px" height="34px" src={engflag_ImgID1}/></LangSwitcherItem>
           <LangSwitcherItem value='fr'><img width="50px" height="40px" style={{marginBottom:'-4px',marginTop:'-2px'}} src={frflag}/></LangSwitcherItem>

        </LangSwitcher>  
     </> 
    )
}

const LangSwitcher = (props) =>{
    const {children, active, name, changeHandler,switcherWidth} = props;
     
    // const [width, height] = useWindowWidthAndHeight();

    return (
      <div className='LangSwitcher'>  {  
        React.Children.count(children) > 0 && (
          <>
          {
            React.Children.map(children, (child) =>{
              if (React.isValidElement(child)) {
                return React.cloneElement(
                  child,
                    {
                    active:  child.props.value === active,
                    changeHandler: changeHandler(child.props.value), 
                    }
                   )
                 }
                       
            })
           }
          </>
         )
        } 
        </div>
       )
      }
    
  
  const LangSwitcherItem = (props) =>{
  const {children,active,changeHandler, value} = props;
  console.log(props);
  
    return (
      <button className={active ? 'LangSwitcher_item active' : "LangSwitcher_item"
        } 
        onClick={changeHandler}
         >
        {children}
        </button>
    )
  
  }