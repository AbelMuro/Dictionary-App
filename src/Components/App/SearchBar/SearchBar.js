import React, {useState, useEffect, useRef, memo} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import MakeAsyncCall from './MakeAsyncCall';
import searchIcon from './Icons/icon-search.svg';
import './styles.css';

function SearchBar() {
    const [word, setWord] = useState("");
    const navigate = useNavigate();
    const invalidMessage = useRef();
    const searchBar = useRef();
    const dispatch = useDispatch();

    const handleChange = (e) => {
        searchBar.current.setCustomValidity("");
        invalidMessage.current.style.display = "";
        setWord(e.target.value);
    }

    useEffect(() => {
        const keyboard = (e) => {
            const keyPressed = e.key;
            if(keyPressed != "Enter") return;
            if(word){
                navigate("/definition");
                dispatch(MakeAsyncCall(word))           //using Thunk middleware for api calls
            }
                
            else{
                searchBar.current.setCustomValidity("error");
                invalidMessage.current.style.display = "block";  
            }          
        }
        document.addEventListener("keydown", keyboard);

        return () => {
            document.removeEventListener("keydown", keyboard);
        }
    }, [word])


    return(
        <section className="wrapper">
            <input ref={searchBar} placeholder="Search for any word..." type="search" className="searchBox" value={word} onChange={handleChange}/>
            <p ref={invalidMessage} className="invalidMessage">Whoops, can't be empty...</p>
            <img src={searchIcon} className="searchIcon"/>
        </section>
    )
}

export default memo(SearchBar);