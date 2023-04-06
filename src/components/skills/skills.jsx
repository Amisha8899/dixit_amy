import React, { useContext } from "react";
import './skills.css'
import { themeContext } from "../../context";
import Hackerrank from '../../img/hackerrank.png'
import Leetcode from '../../img/leetcode.png'
import codechef from '../../img/codechef.png'
const Skills =()=>{
    const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
    return(
        <div className="skills">
            <div className="lang">
            <div  className='s-heading'>
            <span style={{color: darkMode?'white':''}}>Apart from</span> <span>Web-Dev</span>
            </div>
            {/* <span>I learned web-development from an online Udemy course. I have also taken DSA and ML courses as minor and open elective respectively.</span> */}
            <div className="CPlink">
            <div className="CP">
            <a href="https://www.hackerrank.com/amishadixit39">
                <div className="circle"><img src={Hackerrank} /></div></a>
                <span  style={{color: darkMode?'white':''}}>Hackerrank</span>
            </div>
                
            <div className="CP">
            <a href="https://www.codechef.com/users/amishadixit">
                <div className="circle"><img src={codechef} /></div></a>
                <span  style={{color: darkMode?'white':''}}>CodeChef</span>
            </div>
                
            <div className="CP">
            <a href="https://leetcode.com/AmishaDixit/">
                <div className="circle"><img src={Leetcode} /></div> </a>
                <span  style={{color: darkMode?'white':''}}>Leetcode</span>
            </div>
                
            </div> 
            </div>
        </div>
    )
}
export default Skills;