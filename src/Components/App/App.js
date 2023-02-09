import React from 'react';
import Container from './Container';
import NavigationBar from './NavigationBar';
import SearchBar from './SearchBar';
import Store from './Store';
import {Provider} from 'react-redux';
import "./styles.css";

function App() {

    return(
            <Provider store={Store}>        
                <Container className="app">
                    <NavigationBar/>
                    <SearchBar/>
                </Container>
            </Provider>          
    )
}

export default App;