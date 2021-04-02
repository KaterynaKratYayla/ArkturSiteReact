import React , {useState, useEffect} from 'react'
import {Route, NavLink, Link, BrowserRouter, Switch} from 'react-router-dom'
import '../PageComponents/ResponsiveHeader/header.css'
// import Slider from '../../Front Page/slider/slider'
// import Search from './searchfront'
import {Helmet} from 'react-helmet'
import ArkturDMClogoICO from '../../Library/Images/ArkturDMClogoICO.ico'

console.log('[file]', 'src/Components/Pages/PageComponents/MiddleMenuComponents.js');
export const HOTELS = () => {
    console.log('[file]:export const HOTELS', 'src/Components/Pages/PageComponents/MiddleMenuComponents.js');
	 return (
        <div>
         <Helmet>
           <title>Hotels in Ukraine</title>
           <link rel='shortcut icon' href={ArkturDMClogoICO} />
         </Helmet>
          <h3>Hotels</h3>
        </div>
    )
}

export const SOCIAL = () => {
    console.log('[file]:export const SOCIAL', 'src/Components/Pages/PageComponents/MiddleMenuComponents.js');

    return (
           <h2> My Home Page</h2>
    )
}

export const LOGO = () => {
    console.log('[file]:export const LOGO', 'src/Components/Pages/PageComponents/MiddleMenuComponents.js');

    return (
         <h2> My Home Page</h2>
    )
}

// export const NotFound = () => <h2>Not Found</h2>
