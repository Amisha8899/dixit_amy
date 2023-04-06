import React from "react";
import './navbar.css'
import Toggle from "../toggle/toggle";
import { Link } from "react-scroll";
const Navbar = () =>{
    return (
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">Amisha</div>
                <Toggle />
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul>
                    <Link activeClass="active" to="Navbar" spy={true} smooth={true}><li>Home</li></Link>
                    <Link activeClass="active" to="Education" spy={true} smooth={true}><li>Education</li></Link>
                    <Link activeClass="active" to="Skills" spy={true} smooth={true}><li>Skills</li></Link>
                    <Link activeClass="active" to="Projects" spy={true} smooth={true}><li>Projects</li></Link>
                    </ul>
                </div>
                <Link to="Contact" spy={true} smooth={true}>
                <button className="button n-button">Contact Us</button></Link>
            </div>
        </div>
    )
}
export default Navbar;