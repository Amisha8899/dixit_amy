import React, { useContext } from 'react';
import './projects.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css';
import Synergy from '../../img/synergy.png';
import Chat from '../../img/chat.png';
import TextEditor from '../../img/textEditor.png';
import Humanae from '../../img/man.png';
import Canvas from '../../img/code.png';
import Portfolio from '../../img/portfolio.png';
import { themeContext } from "../../context";
const Projects = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const proj = [
        {
            img:Synergy,
            review:"I contributed in the website made for our Departmental Symposium Synergy'23 that was used for a number of registrations (600+) for events , workshops , guestlectures etc all around south India.",
            link:"https://github.com/Amisha8899/Synergy-2021-Website"
        }
        ,
        {
            img:Chat,
            review:"This chat app is made using MERN stack collabed with socket.io for real time messaging. The UI of this app is designed using the ChakraUI library.",
            link:"https://github.com/Amisha8899/Let-s-Chat"
        },
        {
            img:TextEditor,
            review:"Again this is being made using React, mongoose and socket.io .I have made use of quill library for it. It does include the use of socket.io for allowing people to work on the same file from different locations simultaneously.",
            link:"https://github.com/Amisha8899/Inscribe"
        },
        {
            img:Portfolio,
            review:"This is the same Portfolio you are going through that is being made using the React frontend Framework. For the animations in the site framer-motion library is being used.",
            link:"https://github.com/Amisha8899/Portfolio"
        },
        {
            img:Humanae,
            review:"This is my first small frontend project I made for a club inductions. It basically makes use of HTML, CSS, Javascript , Bootsrtrap and Jquery. The Game is named as 'Fortunate-Hmanae'",
            link:"https://github.com/Amisha8899/SPIDER_TASK_1"
        },
        {
            img:Canvas,
            review:"These are few pieces of HTML5 canva codes for contellation effect , physics friction on a ball etc done using javascript for fun.",
            link:"https://github.com/Amisha8899/canvas"
        }
    ]
  return (
    <div className='t-wrapper' id='Projects'>
        <div className='t-heading'>
            <span>Recent </span>
            <span>Projects </span>
            <span>Of Mine</span>
            <div className="blur t-blur1" style={{background:"var(--purple)"}}></div>
            <div className="blur t-blur2" style={{background:"skyblue"}}></div>
     </div>
            <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            pagination={{clickable:true}}
            >
            {proj.map((proj, index)=>{
                return(
                    <SwiperSlide key={index}>
                    <div className='proj'>
                        <a href={proj.link}>
                             <img src={proj.img}/>
                             
                        </a>
                        <span style={{color: darkMode? 'white':''}}>
                                    {proj.review}
                              </span>
                    </div>
                    </SwiperSlide>
                );
            })}
            </Swiper>
    </div>
  )
}

export default Projects