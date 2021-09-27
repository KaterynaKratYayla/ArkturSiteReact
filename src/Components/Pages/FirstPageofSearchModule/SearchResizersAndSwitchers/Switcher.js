import React from 'react'
import PropTypes from 'prop-types';
import {useWindowWidthAndHeight} from '../../Helpers/WindowResizeHook'

export const Switcher = (props) =>{
    const {children, active, name, changeHandler,switcherWidth} = props;
     
    const [width, height] = useWindowWidthAndHeight();

    console.log('SWITCHER',props)

    return (
    // <div className='switcher'> {name} : {
      <div className='switcher' style={{width:switcherWidth}}>  {  
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
    
  
  export const SwitcherItem = (props) =>{
  const {children,active,changeHandler, value} = props;
  console.log(props);
  
    return (
      <button className={
        active ? 'switcher__item active' : "switcher__item"
        } 
        onClick={changeHandler}
         >
        {children}
        </button>
    )
  
  }