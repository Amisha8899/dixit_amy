import React from 'react'
import './work.css'
import Mongo from "../../img/mongodb.png";
import Node from "../../img/nodejs.png";
import react from "../../img/react.png";
import Express from "../../img/express.png";
import JS from "../../img/javascript.png";
import HTML from "../../img/html5.png";
import CSS from "../../img/css3.png"
import { themeContext } from "../../context";
import { useContext } from "react";
import {motion} from 'framer-motion';
const Works = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className='works' id='Skills'>
         <div className="awesome">
                <span 
                style={{color: darkMode? 'white':''}} 
                >Skills</span>
                <span>I have learned the following skills
                as a part of my small journey as a web developer 
                that inculede HTML, CSS, Javascript, Bootstrap, 
                JQuery and React for frontend. And MongoDB, NodeJs 
                and ExpressJS for backend. I have worked somewhat with HTML5 canva. I have worked on JWS WebTokens 
                for implementing Login features in website and also libraries
                 like bcrypt, passportJs etc for password hashing and salting. </span>
                <button className="button" style={{marginTop:'30px'}}></button>
                <div className="s-blurl blur" style={{background:"#ABF1FF94"}}></div>
            </div>
        <div className='w-right'>
            <motion.div 
            initial={{rotate:45}}
            whileInView={{rotate:0}}
            viewport={{margin:'-50px'}}
            transition={{duration:3.5, type: 'spring'}}
            className='w-mainCircle'>
                <div className='w-secCircle'>
                    <img src={Mongo} />
                </div>
                <div className='w-secCircle'>
                    <img src={Node} />
                </div>
                <div className='w-secCircle'>
                    <img src={react} />
                </div>
                <div className='w-secCircle'>
                    <img src={Express} />
                </div>
                <div className='w-secCircle'>
                    <img src={JS} />
                </div>
                <div className='w-secCircle'>
                    <img src={HTML} />
                </div>
                <div className='w-secCircle'>
                    <img src={CSS} />
                </div>
            </motion.div>
            <div className='w-backCircle blueCircle'></div>
            <div className='w-backCircle yellowCircle'></div>
        </div>
    </div>
  )
}
export default Works;