import React from 'react';
import './App.css';
import NavScrollExample from "../src/Components/Navbar";


function App(){
    return(
        <div className='App'>
            <NavScrollExample />
            <header className='header'>
            <div id="one">
                        <p>
                            <a>We Are Buying Your Bulk</a><br />
                            <a>Common/Uncommon</a><br />
                            <a>7usd per 1K cards</a><br />
                            <a>Rares/Mythics</a><br />
                            <a>.07 cents per card</a><br />

                        </p>
                    </div>
                    <div id="two">
                            <a>We Are Buying Your Bulk</a><br />
                            <a>Common/Uncommon</a><br />
                            <a>7usd per 1K cards</a><br />
                            <a>Reverse Holo</a><br />
                            <a>.07 cents per card</a><br />
                    </div>
                    <div id="Three"></div>
            </header>
        </div>

    )
}

export default App;