import bg1 from './assets/bg1.jpg';
import bg2 from './assets/bg2.jpg';
import './App.css';
import Header from "./conmponents/Header";
import Layout from "./conmponents/Layout";
import PocemonCard from "./conmponents/PokemonCard";
import Footer from "./conmponents/Footer";

import React from "react";

import logoIMG from './assets/logo.png';
import PokemonCard from "./conmponents/PokemonCard";

// const POKEMONS =

import POKEMON from "./pokemon.json";
console.log(POKEMON);

const App = () => {
    return (
        //<React.Fragment>
        <>
            <Header
                title="title"
                desc="description" />
            <Layout
                id="1"
                title="Перший блок"
                urlBg={bg1}
            />
            <Layout
                id="2"
                title="Другий блок"
                colorBg="#ff0000"
            >
                <p>In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid.
                    Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them into the player's own color of red or blue.</p>
                <p>To win, a majority of the total ten cards played (including the one card that is not placed on the board) must be of the player's card color. To do this, the player must capture cards by placing a card adjacent to an opponent's card whereupon the 'ranks' of the sides where the two cards touch will be compared. If the rank of the opponent's card is higher than the player's card, the player's card will be captured and turned into the opponent's color. If the player's rank is higher, the opponent's card will be captured and changed into the player's color instead. </p>
                <img src={logoIMG} alt="Logo" />
            </Layout>
            <Layout
                id="3"
                title="My Pocemons"
                urlBg={bg2}
            />

            <div className="flex">
                {
                    POKEMON.map((item, index)=> <PocemonCard key={item.id} {...item} />)
                }
            </div>

            <Footer />
        </>
    )
}

export default App;
