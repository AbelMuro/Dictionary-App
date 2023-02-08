import React from 'react';
import Container from './Container';
import NavigationBar from './NavigationBar';
import SearchBar from './SearchBar';
import Content from './Content';
import Store from './Store';
import {Provider} from 'react-redux';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import "./styles.css";

function App() {

    return(
        <BrowserRouter>
            <Provider store={Store}>
                <Container className="app">
                    <NavigationBar/>
                    <SearchBar/>
                    <Routes>
                        <Route path="/definition" element={<Content/>}/> 
                    </Routes>
                </Container>
            </Provider>          
        </BrowserRouter>
 
    )
}

export default App;