import React, {useState} from 'react';
import arrow from './Icons/icon-arrow-down.svg';
import "./styles.css";

function FontOptions() {
    const [option, setOption] = useState("Sans Serif");
    const [font, setFont] = useState("Inter-variable-font");
    const [openPopup, setOpenPopup] = useState(false);


    const handlePopup = () => {
        const popup = document.querySelector(".popup");
        if(!openPopup)
            popup.style.display = "flex";
        else 
            popup.style.display = "";

        setOpenPopup((prevState) => {
            return !prevState;
        })
    }

    const handleFontChoice = (e) => {
        const lastChoosen = document.querySelector("#choosen");
        lastChoosen.id = "";
        e.target.id = "choosen";

        const choosenOption = e.target.getAttribute("data-option"); 
        const choosenFont = e.target.getAttribute("data-font");
        setOption(choosenOption);
        setFont(choosenFont);
        handlePopup();
    }



    return(
        <>
            <div className="fontOptions" onClick={handlePopup}>
                <p className="fontChoosen">
                    {option}
                </p>
                <img src={arrow} className="arrowDown"/>                 
            </div>        
            <div className="popup">
                <div className="content">
                    <p onClick={handleFontChoice} id="choosen" data-option="Sans Serif" data-font="Inter-variable-font" >Sans Serif</p>
                    <p onClick={handleFontChoice} data-option="Serif" data-font="Lora-Variable">Serif</p>
                    <p onClick={handleFontChoice} data-option="Mono" data-font="Inconsolata">Mono</p>                        
                </div>
            </div>   
        </>

    )

}

export default FontOptions;