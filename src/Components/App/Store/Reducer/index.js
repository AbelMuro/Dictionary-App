import {WordReducer, LoadingReducer} from './Reducer.js';
import {combineReducers} from 'redux';

const Reducer = combineReducers({
    word: WordReducer,
    isLoading: LoadingReducer
})

export default Reducer;