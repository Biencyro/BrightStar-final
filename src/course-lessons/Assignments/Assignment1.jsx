import React, { useRef } from 'react';
import './Assignments.css';
import emailjs from '@emailjs/browser';

const Assignment1 = () => {

  

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      console.log('Sending email...');
  
      emailjs.sendForm('service_c2a8loh', 'template_i2wp6hi', form.current, 'DnowN7neoLGRFKaT5')
        .then((result) => {
            console.log(result.text);
            console.log("Submitted successfuly.");
        }, 
        (error) => {
            console.log(error.text);
        }
        );
    };
  
  return (
    <div className='assignment-page'>

        <h2>Assignment One</h2>
    <p>Using the guidelines from the introduction section write an essay expressing on the long-term effects of COVID-19 <br />
    Format:12pt Times New Roman <br />
    Length: 1 page(275 words) <br />
    </p>


    <form ref={form} onSubmit={sendEmail}>
     
      <label>Email</label>
      <input type="email" name="user_email" placeholder= "Email" required/>

      <label>Assignment</label>
      <input type="text" name="assignment" placeholder= "eg. Assignment 1"required/>

      <br />
      <label>Text</label>
      <div className='txt-box'>
        <textarea name="message"  required/>
      </div>

      <input type="submit" value="Submit" />
      <br />
    </form>
    </div>
  );
};

export default Assignment1





/*
import React from 'react'
import './Assignments.css'

const Assignment1 = () => {
  return (
    <>
    
    <h2>Assignment One</h2>
    <p>Using the guidelines from the introduction section write an essay expressing on the long-term effects of COVID-19 <br />
    Format:12pt Times New Roman <br />
    Length: 1 page(275 words) <br /></p>
    
    </>
  )
}

export default Assignment1
*/