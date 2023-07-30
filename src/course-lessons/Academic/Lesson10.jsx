import React from 'react'
import '../lessons.css'
import { Link } from 'react-router-dom'
import Header2 from '../../components/Header2'
import Scrollbar from '../../components/Scrollbar'
import Footer from '../../components/Footer'
import HamburgerMenu2 from '../../components/HamburgerMenu2'
import Vidd10 from './../../components/embedded-videos/Vidd10'

const Lesson10 = () => {
  return (
    <>
    <body>

        <HamburgerMenu2/>


        <Header2/>
        <Scrollbar/>
        
        <div className='video-emb maxWidth-100% margin-auto padding-20px position-relative'>
    <div class="display-image">
            <Vidd10/>
    </div>
    </div>

            


        <section class="content">

        <h1>Lesson Ten (10): Dealing With Clients</h1>
        <p>
            In the course of your writing journey you will interact with good and bad clients. <br />
            In this lesson you will learn how to deal with each of these categories of clients.
        </p>
        <h3>Who is a good client?</h3>
        
       <p> A good client is a customer who is cooperative, pays in time and even tips you for good work done. <br /> <br />
        When you get such a client your air should be to convert them to regular customers. <br /> 
    
        You can achieve this by <b>meeting deadlines</b>, <b>providing high-quality work</b> and <b>employing good communication skills</b>. <br /><br />

        If you find good clients who pay well, are punctual, and are very supportive, you should build a reputation and deliver quality work on time. 
        In some cases, you can give them discounts on your regular rates, have reliable communication, and reply to all emails they send. <br /> <br />
        If you increase your rates, you should let them know and help them adjust. 
        Sometimes this is very difficult and you may lose customers, but you need to move on to those who will switch to the new plan.  <br /> <br />
        </p>

        <h3>Who is a bad client?</h3>
        
        <p>
            A bad client is a customer who <b>gives wrong instructions</b>, <b>delays or fails to pay</b> or he/she is <b>arrogant</b>. 
            <br /> <br />

            <b><u>Wrong instructions</u></b> <br /> 
            This is when a client gives you a task with wrong or incomplete instructions.
            This is particularly from clients who give last-minute instructions and push you to get the job done. <br /><br />

            Before deciding to take action, you can assess the situation to determine if the client was simply careless and disorganized, or if there was a particular reason for the action. 
            In both cases, you need to promise to do quality work, ask your customer to fix it, and not repeat the same mistakes.  <br /> <br />
            

            <b><u> Delayed payment or failure to pay</u></b> <br />
            Never take more work when customers don't pay for unusually long periods of time or are late with payments. <br />
            You should not accept any further work until all payments have been made. If a client doesn't pay for their work, warn your co-workers amicably and don't let them fall victim too. <br /> <br />

            You can also plagiarise the client's work by posting it online before they submit it to their tutors. <br /> <br />


            <b><u>    Arrogant clients</u></b> <br />
            These types of people are guided by typical misconceptions about others. 
            They believe that certain ethnic groups are unsuitable for quality work. You may make unnecessarily harsh statements in relation to your ethnicity. <br /> <br />
            
            The trick to beating a client like that is to prove them wrong by showing quality work. 
            It can be difficult to convert such customers. So it's up to you to continue working with them as long as it doesn't harm your career.  <br /> <br />

        </p>
        <div class="btns">
        <button class="prv">
        <Link to='/lesson9'><i class="fa-solid fa-chevron-left"></i>  Previous</Link> 
        </button>

        <button class="nxt">
            <Link to='/lesson11'>Next  <i class="fa-solid fa-chevron-right"></i></Link>
        </button>

     </div>
     <br /> <br />
        </section>

        


        <Footer/>
    </body>
    </>
  )
}

export default Lesson10