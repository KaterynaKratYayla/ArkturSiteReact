import React from 'react'
import PropTypes from 'prop-types';

export const Switcher = (props) =>{
    const {children, active, name, changeHandler} = props;
     
    console.log('SWITCHER',props)

    return (
    // <div className='switcher'> {name} : {
      <div className='switcher'>  {  
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