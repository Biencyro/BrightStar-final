import React, { useRef } from 'react';
import './Assignments.css';
import emailjs from '@emailjs/browser';

const Assignment2 = () => {

  

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

        <h2>Assignment Two</h2>
    <p>Discuss the influence of the UN's sustainable development goal on gender equality. <br />
    Type: Essay <br />
    Length: 500 words <br />
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

export default Assignment2

/*import React from 'react'

const Assignment2 = () => {
  return (
    <>
    Discuss the influence of the UN's sustainable development goal on gender equality.
    Type: Essay
    Length: 500 words


    </>
  )
}

export default Assignment2

*/