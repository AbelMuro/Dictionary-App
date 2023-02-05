import React from 'react';
import FontOptions from './FontOptions';
import LightSwitch from './LightSwitch';
import icons from './Icons';
import "./styles.css";


function NavigationBar() {


    return(
        <nav className="navBar">
            <img src={icons["logo"]} className="logo"/>
            <section className="options">
                <FontOptions/>
                <div className="divisor"></div>
                <LightSwitch/>
                <img src={icons["moon"]} className="moon"/>  
    
            </section>
        </nav>
    )
}

export default NavigationBar;
