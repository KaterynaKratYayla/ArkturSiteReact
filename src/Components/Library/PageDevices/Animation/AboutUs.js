import React from 'react'
import ReactHtmlParser from 'react-html-parser'

import './AboutUsCSS.css'

export const AboutUs = ({text})=>{

    // console.log('TEXT',text.text)
    return(
      <div class='WrapperAboutUs'>
          {ReactHtmlParser(text)}
      </div>
    )
}