import React, {memo} from 'react';
import {useSelector} from 'react-redux';
import Definitions from './Definitions';
import LoadingScreen from './LoadingScreen';
import Message from './Message';

function Content() {
    const word = useSelector(state => state.word);
    const loading = useSelector(state => state.isLoading);

    console.log(word);
    console.log(loading);

    return loading ? (<LoadingScreen/>) : (word?.message ?
        <Message word={word}/> : <Definitions word={word}/>) 
}

export default memo(Content);