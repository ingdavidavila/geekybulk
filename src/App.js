import React from 'react';
import './App.css';
import NavScrollExample from "../src/Components/Navbar";
import Mana from "./pics/mana.png"
import Charm from "./pics/charm.png"
import Mpuzzle from "./pics/mpuzzle.png"


function App(){
    return(
        <div className='App'>
            <NavScrollExample />
            <div className='wrapper'>
                <div className='poke'>
                    <div><img src={Mana} alt="poke" className='pok'/></div>
                    <div><img src={Mana} alt="poke" className='pok'/></div>
                    <div><img src={Charm} alt="poke" className='pok'/></div>
                    <div><img src={Mpuzzle} alt="poke" className='pok'/></div>
                    <div><img src={Mana} alt="poke" className='pok'/></div>
                    <div><img src={Charm} alt="poke" className='pok'/></div>
                    <div><img src={Mpuzzle} alt="poke" className='pok'/></div>
                    <div><img src={Charm} alt="poke" className='pok'/></div>
                    <div><img src={Mpuzzle} alt="poke" className='pok'/></div>
                    <div><img src={Charm} alt="poke" className='pok'/></div>
                    <div><img src={Mpuzzle} alt="poke" className='pok'/></div>
                    <div><img src={Mana} alt="poke" className='pok'/></div>
                    <div><img src={Charm} alt="poke" className='pok'/></div>
                </div>
            <header className='header'>

            </header>
            <div id="one">
                        <p>
                            <a>We Are Buying Your Magic The Gathering Bulk</a><br />
                            <a>Bulk Commons & Uncommons</a>
                            <a>7 usd per 1K cards</a><br />
                            <a>Rares/Mythics</a>
                            <a>.10 cents per card</a><br />
                            <a>Bulk Foil Commons & Uncommons</a>
                            <a>.02 cents per card</a><br />
                            <a>Bulk Foil Rares/Mythics</a>
                            <a>.14 cents per card</a><br />

                        </p>
                    </div>
                    <div id="two">
                            <p>
                            <a>We Are Buying Your Pokemon Bulk</a><br />
                            <a>Common/Uncommon</a><a>7usd per 1K cards</a><br />
                            <a>Bulk Rares</a>
                            <a>.04 cents per card</a><br />
                            <a>Bulk Holo Rares</a>
                            <a>.05 cents per card</a><br />
                            <a>Reverse Holo C/U</a>
                            <a>.04 cents per card</a><br />
                            <a>Reverse Holo Rares</a>
                            <a>.06 cents per card</a><br />
                            <a>Bulk V </a>
                            <a>.50 cents per card</a><br />
                            <a>Bulk VMax</a>
                            <a>.75 cents per card</a><br />
                            <a>Bulk VStar</a>
                            <a>.75 cents per card</a><br />
                            <a>Bulk VUnion</a>
                            <a>.25 cents per card</a><br />
                            <a>Bulk EX</a>
                            <a>.50 cents per card</a><br />
                            <a>Bulk GX</a>
                            <a>.50 cents per card</a><br />
                            <a>Bulk BREAK</a>
                            <a>.25 cents per card</a><br />
                            <a>Bulk Hyper/Secret Rares</a>
                            <a>.50 cents per card</a><br />
                            <a>Bulk Radiant Rares</a>
                            <a>.10 cents per card</a>
                            </p>
                    </div>
                    <div id="three">
                            <p>
                            <a>We Are Buying Your Yugioh Bulk</a><br />
                            <a>Bulk Common</a>
                            <a>7 usd per 1K cards</a><br />
                            <a>Bulk Rares</a>
                            <a>20 usd per 1K cards</a><br />
                            <a>Bulk Super Rares</a>
                            <a>.03 cents per card</a><br />
                            <a>Bulk Ultra Rares</a>
                            <a>.04 cents per card</a><br />
                            <a>Bulk Secret Rares</a>
                            <a>.03 cents per card</a><br />
                            <a>Bulk Ultimate Rares</a>
                            <a>.10 cents per card</a><br />
                            </p>
                    </div>
                    <div id="contact" className='contact'>
                            <p>
                            <a>Sell your cards! </a><br />
                            <a>Email us at</a><br />
                            <a>Geeksandjocks@hotmail.com</a><br />
                            <a>Title your email with: sell inquiry</a><br />
                            </p>
                    </div>

                    <div id='about' className='about'>
                            <p>
                                <a>
                                    This company started in 2016
                                </a><br />
                                <a>
                                    But the dream started in '99 with the release of Base Set
                                </a><br />
                                <a>
                                    We are located in McAllen Tx and we have a small presence abroad 
                                </a><br />
                                <a>
                                    We started collecting buying Base Set Booster packs
                                </a><br />
                                <a>
                                    Opening Yu-Gi-Oh and Seto Kaiba Starter Decks
                                </a><br />
                                <a>
                                    And the rest was history
                                </a><br />
                                <a>
                                    Special Thanks to Daniel Avila. 
                                    
                                </a><br />
                                <a>
                                "little Brother you have always been the inspiration. lets never grow up together"
                                </a><br/>
                            </p>
                    </div>
            </div>
                    <footer>
                        <a className='foot'>copywrite 2023</a><br />
                        Magic: The Gathering and its respective properties are copyright  Wizards of the Coast.
Yu-Gi-Oh!  and its respective properties are © 2023 Studio Dice/SHUEISHA, TV TOKYO, KONAMI.
                    </footer>
        </div>
    )
}

export default App;