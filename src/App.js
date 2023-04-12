import React from 'react';
import './App.css';
import NavScrollExample from "../src/Components/Navbar";


function App(){
    return(
        <div className='App'>
            <NavScrollExample />
            <div className='wrapper'>
                <div className='poke'>
                    <div><img src='./mpuzzle.png' alt="poke" className='pok'/></div>
                    <div><img src='./charm.png' alt="poke" className='pok'/></div>
                    <div><img src='./charm.png' alt="poke" className='pok'/></div>
                    <div><img src='./mpuzzle.png' alt="poke" className='pok'/></div>
                    <div><img src='./charm.png' alt="poke" className='pok'/></div>
                    <div><img src='./charm.png' alt="poke" className='pok'/></div>
                    <div><img src='./mpuzzle.png' alt="poke" className='pok'/></div>
                    <div><img src='./charm.png' alt="poke" className='pok'/></div>
                    <div><img src='./mpuzzle.png' alt="poke" className='pok'/></div>
                    <div><img src='./charm.png' alt="poke" className='pok'/></div>
                </div>
            <header className='header'>

            </header>
            <div id="one">
                        <p>
                            <a>We Are Buying Your Magic The Gathering Bulk</a><br />
                            <a>Common/Uncommon</a><br />
                            <a>7usd per 1K cards</a><br />
                            <a>Rares/Mythics</a><br />
                            <a>.07 cents per card</a><br />

                        </p>
                    </div>
                    <div id="two">
                            <p>
                            <a>We Are Buying Your Pokemon Bulk</a><br />
                            <a>Common/Uncommon</a><br />
                            <a>7usd per 1K cards</a><br />
                            <a>Reverse Holo</a><br />
                            <a>.07 cents per card</a><br />
                            </p>
                    </div>
                    <div id="three">
                            <p>
                            <a>We Are Buying Your Yugioh Bulk</a><br />
                            <a>Common/Uncommon</a><br />
                            <a>7usd per 1K cards</a><br />
                            <a>Super Rares / Ultra Rares</a><br />
                            <a>.07 cents per card</a><br />
                            </p>
                    </div>
                    <div id="contact">
                            <p>
                            <a>Sell your cards </a><br />
                            <a>Email us at</a><br />
                            <a>Geeksandjocks@hotmail.com</a><br />
                            <a>Title your email with: sell inquiry</a><br />
                            </p>
                    </div>

                    <div id='about'>
                            <p>
                                <a>
                                    This company started in 2016
                                </a><br />
                                <a>
                                    we are located in McAllen Tx and we have a small presence abroad 
                                </a><br />
                            </p>
                    </div>
                    </div>
                    <footer>
                        <a>copywrite 2023</a><br />
                        Magic: The Gathering and its respective properties are copyright  Wizards of the Coast.
Yu-Gi-Oh!  and its respective properties are © 2023 Studio Dice/SHUEISHA, TV TOKYO, KONAMI.
                    </footer>
                </div>

    )
}

export default App;