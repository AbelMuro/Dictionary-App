import React, {memo} from 'react';
import {useSelector} from 'react-redux';
import Definitions from './Definitions';
import Message from './Message';

function Content() {
    const state = useSelector(state => state.word);

    return state ? (state?.message ?
        <Message word={state}/> : <Definitions word={state}/>
    ) : <></>
}

export default memo(Content);