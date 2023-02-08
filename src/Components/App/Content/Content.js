import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import LoadingScreen from './LoadingScreen';
import Definitions from './Definitions';
import Message from './Message';

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
                if(results?.message)
                    setWord(results)
                else
                    setWord(results[0]);
            })
            .catch((err) => {
                console.error(err);
            })            
    }, [state])

    return word ? ( word?.message ?
        <Message word={word}/> : <Definitions word={word}/>
    ) : state == "" ? <></> : (<LoadingScreen/>)
}

export default Content;