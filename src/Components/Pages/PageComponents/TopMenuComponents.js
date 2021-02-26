import React from 'react'
import '../RoutesAndLinks/header.css'
import {Helmet} from 'react-helmet'
import ArkturDMClogoICO from '../../Library/Images/ArkturDMClogoICO.ico'


//Call: +38 044 498 4880 / inquiry@arktur.ua / COVID-19 / ABOUT US / CONTACT US / SIGN IN / FOR GROUPS / LOGIN / TRANSLATE

///CITY HOTELS/ RESORT & HOTELIDAY DESTINATIONS / INFORMATION

export const CONTACTUS = () => {

    return ( 
        <div>
           <Helmet>
               <title>Contact Arktur DMC</title>
               <link rel='shortcut icon' href={ArkturDMClogoICO} />
           </Helmet>
         <h2> Our Contact details</h2>
        </div>
    )
}

export const SIGNIN = () => {

    return (
      <div>
       <Helmet>
         <title>Arktur DMC Partners</title>
         <link rel='shortcut icon' href={ArkturDMClogoICO} />
       </Helmet>
         <h2>Sign In</h2>
      </div>
    )
}

export const FORGROUPS = () => {

    return (
      <div>
       <Helmet>
           <title>Arktur Groups</title>
           <link rel='shortcut icon' href={ArkturDMClogoICO} />
       </Helmet>
          <h2>For Groups</h2>
      </div>
    )
}
