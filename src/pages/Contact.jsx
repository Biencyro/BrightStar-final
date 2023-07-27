import React, { useRef } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {

  

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

    <>
    
    <div className='contact-page'>

         
        <div className='deets'>
        <h2>Contact us via:</h2> <br />
        <ul>
            <li>Email:</li> 
            <a href="/"><i class="fas fa-envelope"></i>brightstarwritingacademy@gmail.com</a><br /> <br />

            <li>Facebook:</li> 
            <a href="/"><i class="fab fa-facebook-f" ></i>Brightstar Writing Academy</a><br /> <br />
            
            <li>LinkedIn:</li> 
            <a href="/"><i class="fab fa-linkedin-in"></i>BrightstarAcademy</a> <br />
        
        </ul>
        </div>
        
      <div>
    <form ref={form} onSubmit={sendEmail}>

    <label>Name</label>
      <input type="text" name="assignment" placeholder= "Name"required/> 

      
     
      <label>Email</label>
      <input type="email" name="user_email" placeholder= "Email" required/>

      
      <label>Message</label>
      
        <textarea name="message" className='txt' required/>
      

      <input type="submit" value="Submit" />
      
    </form>

    </div>
    </div>
    </>
  );
};

export default Contact




