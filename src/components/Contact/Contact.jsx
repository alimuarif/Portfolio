import React from 'react'
import "./Contact.css"
import {MdOutlineEmail} from "react-icons/md"
import {PiMessengerLogoBold} from "react-icons/pi"
import {BsWhatsapp} from "react-icons/bs"
import { useRef } from 'react';
// import emailjs from 'emailjs-com';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_eutq40u', 'template_qzbhu48', form.current, 'uyykt9SOvtHKCorGR')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container container__contact">
        <div className="contact_options">
          <article className='contact_option'>
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>mralistudy@gmail.com</h5>
            <a target='_blank' href="mailto:mralistudy@gmail.com">Send a message</a>
          </article>
          <article className='contact_option'>
            <PiMessengerLogoBold className='contact_option-icon'/>
            <h4>Messenger</h4>
            <h5>علی معارف</h5>
            <a target='_blank' href="https://m.me/mshahroz.ashraf">Send a message</a>
          </article>
          <article className='contact_option'>
            <BsWhatsapp className='contact_option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+92 303 4132480</h5>
            <a target='_blank' href="https://api.whatsapp.com/send?phone=03034132480">Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" id="" placeholder='Your Full Name' required/>
          <input type="email" name="email" id="" placeholder='Enter Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact