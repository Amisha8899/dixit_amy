import React from "react";
import './education.css';
import Card from "../cards/cards";
import HeartEmogi from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png"
import { themeContext } from "../../context";
import { useContext } from "react";
import {motion} from 'framer-motion'
import Resume from './Resume.pdf';
const Education = () =>{
    const transition = {duration:2, type: 'spring'}
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return(
        <div className="edu" id="Education">
            <div className="awesome">
                <span
                style={{color: darkMode? 'white':''}}
                >Education</span>
                <span>I have completed my schooling 
                from St. Paul's Sr. Sec. School, Etah-207001 (UP) 
                and currrently pursuing my BTech in 
                Mechanical Engineering from National Institute of Technology, 
                Tiruchirapalli(IInd year UG)</span>
               <a href={Resume} download><button className="button s-button">Download CV</button></a> 
                <div className="s-blurl blur" style={{background:"#ABF1FF94"}}></div>
            </div>
            <div className="cards">
            <motion.div 
            whileInView={{left:'10rem'}}
            initial={{left:'25%'}}
            transition={transition}
            style={{left:'14rem'}}
            >
                <Card 
                    emogi = {HeartEmogi}
                    heading = {'X - (2018-2019)'}
                    detail = {'98.6%'}
                    More={'(CBSE)'}
                />
            </motion.div>
            <motion.div 
             initial={{ left: "-18rem", top: "12rem" }}
             whileInView={{ left: "-8rem" }}
             transition={transition}
            style={{top:'12rem',left:'-4rem'}}>
                <Card 
                    emogi = {Glasses}
                    heading = {'XII - (2020-2021)'}
                    detail = {'97.2%'}
                    More={'(CBSE)'}
                />
            </motion.div>
            <motion.div 
              initial={{ top: "19rem", left: "25rem" }}
              whileInView={{ left: "8rem" }}
              transition={transition}
            style={{top:'19rem', left:'12rem'}}>
                <Card 
                    emogi = {Humble}
                    heading = {'B Tech - (2021-current)'}
                    detail = {'CGPA - 8.68'}
                    More={'NIT-T (First Year)'}
                />
            </motion.div>
            <div className="s-blur2 blur" style={{background:"var(--purple"}}></div>
            </div>
        </div>
    )
}
export default Education;