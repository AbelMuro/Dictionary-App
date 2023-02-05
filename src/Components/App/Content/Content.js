import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import Header from './Header';
import './styles.css';

function Content() {
    const state = useSelector(state => state.word);
    const [word, setWord] = useState(null);

    useEffect(() => {
        if(!state) return;
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${state}`)
            .then((response) => {
                return response.json();
            })
            .then((results) => {
              console.log(results[0])
              setWord(results[0]);
            })            
    }, [state])

    return word ? (
        <article className="content">
            <Header word={word}/>
        </article>
    ) : (<></>)
}

export default Content;