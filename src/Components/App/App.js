import React from 'react';
import NavigationBar from './NavigationBar';
import SearchBar from './SearchBar';
import Content from './Content';
import Store from './Store';
import {Provider} from 'react-redux';
import "./styles.css";

function App() {
    return(
        <Provider store={Store}>
            <main className="app">
                <NavigationBar/>
                <SearchBar/>
                <Content/>
            </main>
        </Provider>   
    )
}

export default App;