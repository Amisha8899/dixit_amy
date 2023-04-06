import React from "react";
import './floating.css'
const Floating = ({image, text1, text2})=>{
    return (
        <div className="floating">
        <img src={image} />
        <span> {text1} <br/> {text2} </span>
        </div>
    )
}
export default Floating;