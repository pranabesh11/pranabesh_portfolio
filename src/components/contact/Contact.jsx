import React from 'react';
import './contact.css';
import email from "../../assets/email.png";
import linkedin from "../../assets/linkedin.png";
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
  const form = useRef();
  const email_id = "pranabeshpratiharjgm@gmail.com";
  const copyToClipboard = () => {
    navigator.clipboard.writeText(email_id)
      .then(() => {
        alert('Email copied to clipboard!');
      })
      .catch(err => {
        alert('Failed to copy text: ' + err);
      });
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_3kx6z1i', 'template_7kjiifq', form.current, {
        publicKey: '4e--8fKwxHCZ9DH0i',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          toast.success('Email sent successfully!', {
            position: "top-center",
            autoClose: 5000,
            theme: "colored",
            style: {
              backgroundColor: '#28a745',
              color: 'white'
            }
          });
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error('Send email again. Something went wrong.', {
            position: "top-center",
            autoClose: 5000,
            theme: "colored",
            style: {
              backgroundColor: '#dc3545',
              color: 'white'
            }
          });
        },
      );
  };
  return (
    <section id="contact">
      <p className="section__text__p1">Get in Touch</p>
      <h1 className="title">Contact Me</h1>
      <div className="contact-info-upper-container">
        
        {/* Email Section */}
        <div className="contact-info-container" onClick={copyToClipboard}>
          <img
            src={email}
            alt="Email icon"
            className="icon contact-icon email-icon"
          />
          <p >
            <a href="mailto:pranabeshpratiharjgm@gmail.com">pranabeshpratiharjgm@gmail.com</a>
          </p>
        </div>
        
        {/* LinkedIn Section */}
        {/* <div className="contact-info-container">
          <img
            src={linkedin}
            alt="LinkedIn icon"
            className="icon contact-icon"
          />
          <p>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </p>
        </div> */}
      </div>
      <form ref={form} onSubmit={sendEmail} name='Pranabesh Portfolio Form' id='email_form'>
        <div className='form_div'>
          <label>Name</label>
          <input type="text" name="user_name" placeholder='Enter Your Name ...'/>      
          <label>Email</label>
          <input type="email" name="user_email"  placeholder='Enter Your Email ...'/>      
          <label>Message</label>
          <textarea name="message" placeholder='Leave Your Valuable Message ...'/>
        </div>
        <div className='btn'>
          <input type="submit" value="Send" class="button-91"/>
        </div>
      </form>
    </section>
  );
};

export default Contact;
