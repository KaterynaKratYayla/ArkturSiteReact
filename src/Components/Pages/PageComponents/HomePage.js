import React from 'react'
import '../PageComponents/ResponsiveHeader/header.css'
import Slider from '../../Library/Slider/Slider'
import {Search} from '../FirstPageofSearchModule/SearchFront'
import {Helmet} from 'react-helmet'
import ArkturDMClogoICO from '../../Library/Images/ArkturDMClogoICO.ico'
import {TopTours} from './TopTours'

import ArkturDMClogo from '../../Library/Images/ArkturDMClogo.svg'


export const HomePage = () => {
    
    const images = [
        "https://arktur.ua/sites/default/files/public/image/slider/Lavra_shutterstock_1545799133_small.jpg",
        "https://arktur.ua/sites/default/files/public/image/slider/Azov%20sea_small.jpg",
        "https://arktur.ua/sites/default/files/public/image/slider/carpathians_shutterstock_750654637_small.jpg",
        "https://arktur.ua/sites/default/files/public/image/slider/Odesa%20Opera%20House_shutterstock_179655773_small.jpg",
        "https://arktur.ua/sites/default/files/public/image/slider/KamenetsCastle_shutterstock_1621762234_small.jpg"
    
      ]

    return (
       <div>
           <Helmet>
               <title>Arktur DMC</title>
               <link rel='shortcut icon' href={ArkturDMClogoICO} />
           </Helmet>

           <h2 style={{
                        marginTop: '5vh', 
                    //    paddingTop: '1vh',
                       paddingBottom: '1vh',
                       color: 'rgb(122,6,8)', 
                       fontSize: '25px', 
                       fontFamily: 'Arial',
                       fontWeight: 'bold',
                       textAlign: 'center',
                      }}> ARKTUR TourOperator and DMC is your reliable partner in Ukraine</h2>

           <Slider slides={images}/>
           <Search />
           <TopTours/>
       </div>
    )
}