import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { HomePage } from '../../../Pages/PageComponents/HomePage'
import {PureContent} from '../../../Pages/PageComponents/MenuPageGenerator'
import { CONTACTUS } from '../../../Pages/PageComponents/TopMenuComponents'
import { HOTELS } from '../../../Pages/PageComponents/MiddleMenuComponents'
import { HelmetWrapper, LocalizationRoute, LocalizationNavLink, LocalizaitonSwitch } from '../../../Library';

const Helmet = () => {
    console.log('[file]');

    return(
        <div>
            <h1>Helmet</h1>
            {/*<LocalizaitonSwitch>
                <LocalizationRoute path='/' component={HomePage}/>
                <LocalizationRoute path='/about' component={PureContent}/>
                <LocalizationRoute path='/contact_us' component={CONTACTUS}/>
                <LocalizationRoute path='/hotels_in_ukraine' component={HOTELS}/>
            </LocalizaitonSwitch>*/}
            <Switch>
                <Route path='/' component={HomePage}/>
                <Route path='/about' component={PureContent}/>
                <Route path='/contact_us' component={CONTACTUS}/>
                <Route path='/hotels_in_ukraine' component={HOTELS}/>
            </Switch>

        </div>
    )
}

export default Helmet;
