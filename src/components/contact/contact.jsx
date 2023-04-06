import React, { useState } from 'react'
import './contact.css'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { themeContext } from "../../context";
import { useContext } from "react";
const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ahylwv8', 'template_cpo2z8k', form.current, 'FnzXHPKka4t1G4uvg')
      .then((result) => {
        setDone(true)
          console.log(result.text);
      }, (error) => {
        setDone(true)
          console.log(error.text);
      });
  };

  return (
    <div className='contact-form' id='Contact'>
        <div className='c-left'>
            <div className='awesome c-awesome'>
                <h3
                style={{color: darkMode? 'white':''}}
                >Get in Touch</h3>
                <span>Contact me</span>
                <div className='blur s-blur' style={{background:"#ABF1FF94"}}>

                </div>
            </div>
        </div>
        <div className='c-right'>
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="user_name" className="user" placeholder='Name' />
                <input type="email" name="user_email" className='user' placeholder='Email' />
                <textarea name='message' className='user' placeholder='Message' />
                <input type="submit" value="Send" className='button' />
                <span>{done && "Thanks for contacting me!"}</span>
                <div 
                className='blur c-blur' style={{background:"var(--purple"}}></div>
            </form>
        </div>
    </div>
  )
}

export default Contact