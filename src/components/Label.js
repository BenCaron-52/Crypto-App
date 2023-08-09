import React from "react";
import '../styles/Home.css';

function Label() {
    return (
        <div className="label">
            <h3> </h3>
            <h3 id="left-label">Name</h3>
            <h3>Price</h3>
            <h3>1h</h3>
            <h3>24h</h3>
            <h3>7d</h3>
            <h3>Market Cap</h3>
            <h3>Volume</h3>
        </div>
    );
}

export default Label;