import React from 'react';
import Header from './Header';
import PartsOfSpeech from './PartsOfSpeech';
import Source from './Source';
import './styles.css';

function Definitions({word}) {
    return(
        <article className="content">
            <Header word={word}/>
            <PartsOfSpeech word={word} partOfSpeech="noun"/>
            <PartsOfSpeech word={word} partOfSpeech="verb"/>
            <PartsOfSpeech word={word} partOfSpeech="adjective"/>
            <Source word={word} />
        </article>
    )
}

export default Definitions;