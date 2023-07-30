import React, { useRef } from 'react';
import './Assignments.css';
import emailjs from '@emailjs/browser';

const Assignment5 = () => {

  

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

        <h2>Assignment Five</h2>
    <p>What are the key ethical challenges posed by the rapid development and deployment of artificial intelligence, 
        and how do these challenges intersect with the social, economic, and political dimensions of our modern world? <br />
        Type: Essay <br />
    Length: 550 words <br />
    Format: Harvard, 12pt Times New Roman <br />
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

export default Assignment5