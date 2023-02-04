import React, {useRef, useState, useEffect} from 'react';
import icons from './Icons';
import "./styles.css";


function NavigationBar() {
    //i may have to use a state variable for this
    const [turnSwitch, setTurnSwitch] = useState(false);
    const displayPopup = useRef(false);
    const [font, setFont] = useState("Sans Serif");

    const handleSwitch = () => {
        const head = document.querySelector(".head");

        if(!turnSwitch)
            head.style.left = "20px";
        else
            head.style.left = "";

            setTurnSwitch((prevState) => {
                return !prevState
            })
    }

    const handlePopup = () => {
        const popup = document.querySelector(".popup");
        if(!displayPopup.current)
            popup.style.display = "flex";
        else 
            popup.style.display = "";

        displayPopup.current = !displayPopup.current;
    }

    const handleFontChoice = (e) => {
        const choosenFont = e.target.innerHTML;
        setFont(choosenFont);
        handlePopup()
    }

    useEffect(() => {

    }, [font])

    return(
        <nav className="navBar">
            <img src={icons["logo"]} className="logo"/>
            <section className="options">
                <div className="fontOptions" onClick={handlePopup}>
                    <p className="fontChoosen">
                        {font}
                    </p>
                    <img src={icons["arrowDown"]} className="arrowDown"/>                 
                </div> 
                <div className="divisor"></div>
                <div className="lightSwitch" onClick={handleSwitch}>
                    <div className="head"></div>
                </div>  
                <img src={icons["moon"]} className="moon"/>  
                <div className="popup">
                    <p onClick={handleFontChoice}>Sans Serif</p>
                    <p onClick={handleFontChoice}>Serif</p>
                    <p onClick={handleFontChoice}>Mono</p>
                </div>            
            </section>
        </nav>
    )
}

export default NavigationBar;
