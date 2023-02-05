import React, {useState, useEffect, useRef} from 'react';
import {useDispatch} from 'react-redux';
import searchIcon from './Icons/icon-search.svg';
import './styles.css';

function SearchBar() {
    const [word, setWord] = useState("");
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
        
            if(word)
                dispatch({type: "set", word: word})
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

export default SearchBar;