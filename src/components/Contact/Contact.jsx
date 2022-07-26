import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from'react-icons/md'
import{BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_lab8ifm', 'template_cxe9c3c', form.current, 'd7n5B6hk2AH0i5HND')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container container_contact">
        <div className="options">
          <article className='contact_option'>
            <MdOutlineEmail className='ico'/><h4>Email</h4>
            <h5>vigneshkumarit4@gmail.com</h5>
            <a href='mailto:vigneshkumarit4@gmail.com'>Send a message</a>
          </article>

          <article className='contact_option'>
            <BsWhatsapp className='ico'/><h4>WhatsApp</h4>
            <h5>+91 6381541226</h5>
            <a href="https://api.whatsapp.com/send?phone=+916381541226" target="_blank">Send a message</a>
          </article>
        </div>
        <form action=''>
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type="submit" className='btn btn-1'>Send Message</button>
        </form>

      </div>
    </section>
  )

}

export default Contact