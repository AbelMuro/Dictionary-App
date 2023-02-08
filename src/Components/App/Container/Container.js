import React from 'react';
import "./styles.css";

function Container({children}){
    return(
        <main className='app'>
            {children}
        </main>
    )
}

export default Container;