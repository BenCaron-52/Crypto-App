import React from 'react';
import '../styles/Home.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Coin from '../components/Coin.js';
import Label from '../components/Label.js';

function Home() {
    const [listOfCoins, setListOfCoins] = useState([]);
    const [searchWord, setSearchWord] = useState("");

    useEffect(() => {
        axios.get("https://api.coinstats.app/public/v1/coins?skip=0").then(
        (response) => {
            setListOfCoins(response.data.coins);
            console.log(response.data);
        });
    }, []);

    const filteredCoins = listOfCoins.filter((coin) => {
        return coin.name.toLowerCase().includes(searchWord.toLowerCase());
    });


    return (
        <div className="home">
        <div className="cryptoHeader">
            <input type="text" placeholder="Search for a coin" onChange={(event) => setSearchWord(event.target.value)}/>
        </div>
        <div className="cryptoDisplay">
            <Label />
            {filteredCoins.map((coin) => {
                return (
                    <Coin
                        icon={coin.icon}
                        name={coin.name}
                        symbol={coin.symbol}
                        price={coin.price}
                        hourChange={coin.priceChange1h}
                        dayChange={coin.priceChange1d}
                        weekChange={coin.priceChange1w}
                        marketCap={coin.marketCap}
                        volume={coin.volume}
                    />
                );
            })}
        </div>
        </div>
    );
};

export default Home;