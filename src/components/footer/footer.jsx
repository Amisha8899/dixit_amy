import React from 'react'
import './footer.css'
import wave from '../../img/wave.png'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'
import Github from '@iconscout/react-unicons/icons/uil-github'
const Footer = () => {
  return (
    <div className='footer'>
        <img src={wave} style={{width:'100%'}} />
        <div className='f-content' >
            <span>amishadixit39@outlook.com</span>
            <div className='f-icons'>
            <a href="https://www.instagram.com/dixit_ami"><Insta color='white' size='3rem'/></a>
            <a href="https://github.com/Amisha8899"><Github color='white' size='3rem'/></a>
            <a href="https://www.linkedin.com/in/amisha-dixit-13078a251/"><Linkedin color='white' size='3rem' /></a>
            </div>
            <span>Made with ❤️ by Amisha Dixit</span>
        </div>
    </div>
  )
}

export default Footer