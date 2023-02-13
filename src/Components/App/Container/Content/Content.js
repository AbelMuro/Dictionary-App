import React, {memo} from 'react';
import {useSelector} from 'react-redux';
import Definitions from './Definitions';
import Message from './Message';

function Content() {
    const word = useSelector(state => state.word);

    //if the word object has a 'message' key, then there was an error, and we will display a message to the user
    //if the word object has an empty string, then we know that the user has NOT searched anything yet, so we dont display any component
    return word ? 
            (word.hasOwnProperty("message") ? <Message word={word}/> : <Definitions word={word}/>) 
                : 
            (<></>)
}

export default memo(Content);