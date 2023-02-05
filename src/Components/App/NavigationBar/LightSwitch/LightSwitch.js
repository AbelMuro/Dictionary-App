import React, {useState} from 'react';
import './styles.css';

function LightSwitch(){
    const [turnSwitch, setTurnSwitch] = useState(false);

    const handleSwitch = () => {
        const head = document.querySelector(".head");
        const lightSwitch = document.querySelector(".lightSwitch");

        if(!turnSwitch){
            head.style.left = "20px";
            lightSwitch.style.backgroundColor = "#A445ED"
        }
            
        else{
            head.style.left = "";
            lightSwitch.style.backgroundColor = "";
        }
            

        setTurnSwitch((prevState) => {
            return !prevState
        })
    }


    return(
        <>
            <div className="lightSwitch" onClick={handleSwitch}>
                <div className="head"></div>
            </div>  
        </>
    )
}

export default LightSwitch