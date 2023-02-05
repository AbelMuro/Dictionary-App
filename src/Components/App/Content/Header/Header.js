import React from 'react';
import playIcon from './Icons/icon-play.svg';
import './styles.css';

function Header({word}) {


    const handleAudio = async () => {
        const audioFiles =  word.phonetics[0].audio;
        const audio = new Audio(audioFiles);
        audio.type = "audio/wav";

        try{
            await audio.play();
        }
        catch(err){
            console.log("failed to play")
        }
    }

    return(
        <section className="header">
            <div className="title_phonetic">
                <h1 className="title">
                    {word.word}
                </h1>
                <h3 className="phonetic">
                    {word.phonetic}
                </h3>                
            </div>
            <img src={playIcon} className="playIcon" onClick={handleAudio}/>

        </section>
    )
}

export default Header;