import React from "react";
import '../styles/Home.css';

function Coin({name, icon, price, hourChange, dayChange, weekChange, marketCap, volume, symbol}) {
    return (
        <div className="coin">
            <img src={icon} alt="icon"/>
            <h3>{name}</h3>
            <h3>${price < 0.1 ? price : Math.round(price * 100) / 100}</h3>
            <h3 style={{color: hourChange >= 0 ? "green" : "red"}}>{hourChange >= 0 ? "+" : ""}{hourChange}%</h3>
            <h3 style={{color: dayChange >= 0 ? "green" : "red"}}>{dayChange >= 0 ? "+" : ""}{dayChange}%</h3>
            <h3 style={{color: weekChange >= 0 ? "green" : "red"}}>{weekChange >= 0 ? "+" : ""}{weekChange}%</h3>
            <h3>{Math.round(price * 100) / 100}</h3>
            <h3>{Math.round(volume * 100) / 100}</h3>
        </div>
    );
};

export default Coin;