import React, { useRef } from 'react';
import './Assignments.css';
import emailjs from '@emailjs/browser';

const Assignment3 = () => {

  

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

        <h2>Assignment Three</h2>
    <p>Create a references list of 5 sources in APA and their corresponding in-text citations
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

export default Assignment3

/*import React from 'react'

const Assignment3 = () => {
  return (
    <>
    Create a references list of 5 sources in APA and their corresponding in-text
citations
    </>
  )
}

export default Assignment3 */