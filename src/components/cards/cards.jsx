import React from "react";
import './cards.css'
const Card = ({emogi, heading, detail, More}) =>{
    return (
        <div className="card">
            <img src={emogi} />
            <span>{heading}</span>
            <span>{detail}</span>
            <span className="c-button">{More}</span>
        </div>
    )
}
export default Card;