import React from "react";
import './home.css'
import Floating from "../floating/floating";
import Github from '../../img/github.png';
import Linkedin from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import Me from '../../img/myPhoto.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesemogi from '../../img/glassesimoji.png';
import Skills from '../skills/skills'
import { themeContext } from "../../context";
import { useContext } from "react";
import { motion } from "framer-motion";
const Home = ()=>{
    const transition = {duration:2, type: 'spring'}
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return(
        <div className="home">
            <div className="i-left">
                <div className="i-name">
                    <span
                    style={{color: darkMode? 'white':''}}
                    >Hy! I am </span>
                    <span>Amisha Dixit</span>
                    <span>A coding enthusiast, who is passionate about 
                    learning new technologies and building web applications.
                    Currently, I am focusing on imporoving my skills in 
                    Data Structure and Algorithms(DSA) actively working on 
                    Web Development projects using MERN stack to put 
                    my skills into practice. I have strong foundation in 
                    programming languages such as C++, python and JavaScript
                    and I like exploring different libraries and frameworks 
                    to build web applications. My interest in coding started 
                    when I was in school, but got deepened in college. Since
                    then I am continuosly learning and experimenting. Looking for 
                    opportunities to collaborate with others who share the same 
                    interest as mine. Always open to explore new opportunities!!  
                    </span>
                </div>
                <a href="https://www.linkedin.com/in/amisha-dixit-13078a251/"><button className="i-button button">Hire me</button></a>
                <div className="i-icons">
                    <a href="https://github.com/Amisha8899" ><img src={Github} /></a>
                    <a href="https://www.linkedin.com/in/amisha-dixit-13078a251/"><img src={Linkedin} /></a>
                    <a href="https://www.instagram.com/dixit_ami" ><img src={Instagram} /></a>
                </div>
            </div>
            <div className="i-right">
            <img src={Vector1} />
            <img src={Vector2} />
            <img src={Me} style={{transform:'scale(0.9)' ,top:'-7rem', left:'5rem'}}/>
            <motion.img
            initial={{left:'-36%'}}
            whileInView={{left:'-24% '}}
            transition={transition}
            src={glassesemogi}
            className="floating-div" />
            <motion.div 
            initial={{top:'-4%', left:'74%'}}
            whileInView={{left: '55%'}}
            transition={transition}
            style={{top:'-4%', left:'55%'}}
            className="floating-div"
            >
            <Floating image={Crown} text1="Web" text2="Development"/>
            </motion.div>
            <motion.div 
            initial={{left:'9rem', top:'18rem'}}
            whileInView={{left:'0rem'}}
            transition={transition}
            style={{top:'18rem', left:'0rem'}}
            className="floating-div"
            >
            <Floating image={thumbup} text1="Competitive" text2="Programming"/>
            </motion.div>
            <div className="blur" style={{background:"rgb(238 210 255)", top: "-18%", left: "56%"}}></div>
            <div className="blur" style={{background:"#C1F5FF", top:'17rem', left:'-20rem', width:'21rem', height:'11rem'}}></div>
            </div>
        </div>
    )
};
export default Home;