import React from 'react'
import '../lessons.css'
import { Link } from 'react-router-dom'
import Header2 from '../../components/Header2'
import Scrollbar from '../../components/Scrollbar'
import Footer from '../../components/Footer'
import HamburgerMenu2 from '../../components/HamburgerMenu2'
import Vidd9 from './../../components/embedded-videos/Vidd9'

const Lesson9 = () => {
  return (
    <>
    <body>

        <HamburgerMenu2/>


        <Header2/>
        <Scrollbar/>
        
        <div className='video-emb maxWidth-100% margin-auto padding-20px position-relative'>
    <div class="display-image">
            <Vidd9/>
    </div>
    </div>

        <section class="content">

        <h1>Lesson Nine (9): Academic Writing Jobs</h1>
        <p>
            The main purpose of offering this training is to help you fit in the academic writing industry and earn like other writers do. <br /> <br />
            In this lesson you will learn how to <b>set your profile</b> as a writer, <b>apply for jobs</b> in the various <b>writing accounts</b> and join <b>academic writing forums</b>.
        </p>

        <h3>Setting up your profile</h3>
        <p>With so many writing gurus out there, it can be difficult for new writers to stay in the spotlight and survive. <br />
            As a writer, you should create a good profile to attract the attention of the best customers in your market. <br />
        </p> <br />

        <ul>
            <b><u>Resume</u></b> <br />
        <li>A resume is your first impression when you ask a client for a job. </li>
        <li>Be sure to include all your credentials, including your writing skills. <br /> </li>
        <li>Including a certificate in your profile is also important. </li>
        <li>If you're not good at writing a good resume, you can hire someone instead. </li>
        <li>We offer resume writing services like this for far less, and you can benefit from enthusiastic reviews as a student. 
        <br />Click <a href="mailto:brightstarwritingacademy@gmail.com?&subject= Hello I would like you to write a resume for me.">HERE</a> to send your request. </li>
            <br />
            <b><u>Pricing</u></b> <br />
            <li>As a new writer entering the market, you need to offer your services at a lower price point than the current one.</li>
            <li>However, don't underestimate your work or expose yourself to exploitation. Remember, it's all about getting the customer's attention.</li>
            <li> As your workflow stabilizes, you should adjust your rates according to your progress.</li>
            <li>Do not mind taking a sample test essay from a potential client.</li>
            
        </ul>
        

        <h3>Applying for jobs</h3>
        <p>When applying for jobs, consider the basic strategies you've learned in self-marketing, crafting a good resume and strategic pricing.
        <br /><br />
        The second step is to find a legit platform or website where you can get customers. 
        There are unscrupulous sites that you should absolutely avoid and sites that you can trust. <br /><br />

        Below are some of the sites where you can land your first writing job.
        </p>
        <br />
        <ul>
           
            <li><a href="https://www.academia-research.com">Academia Research</a></li>
            
            <li><a href="https://edusson.com">Edusson</a></li>
            <li><a href="https://essaypro.com">EssayPro</a></li>
            <li><a href="https://www.essaywriters.net">Essay Writers</a></li>
            <li><a href="https://essayshark.com">EssayShark</a></li>

            <li><a href="https://www.fiverr.com">Fiverr</a></li>
            <li><a href="https://www.freelancer.com">Freelancer</a></li>
            
        
            
            <li><a href="https://www.uvocorp.com">Uvorcorp</a></li>
            <li><a href="https://www.upwork.com">Upwork</a></li>
            <li><a href="https://www.writerbay.com">Writerbay</a></li>
            <li><a href="https://www.writershub.org">Writers Hub</a></li>
            <li><a href="https://writedom.com">WriteDom</a></li>
            <li><a href="http://writerslabs.com">Writers Labs</a></li>

            </ul>
            <br />

            <p>
            Signing up for these accounts is free. In some you can get instant approval but in others, the chances of approval for your application are narrow.
             That does not mean you should not try. <br /> <br />
             The short-cut that many people take is to buy the account from a merchant and then work under the pseudo profile of the original owner. <br /> <br />
             This may land you into trouble since most of the marketplaces do not allow selling/buying of accounts. It could be terminated anytime in case of suspicion. <br /> <br />
             You should trade carefully before investing your money on an account. Consult widely and purchase from trusted merchants.
            <br /> <br />
            <b>Note: Do not rush to buy an account without experience. It will be closed. And you will lose your money, earnings and time.</b>
            <br />
            Once you land an opportunity or buy an account, deliver pure gold, and you will reap the benefits of working online. <br /> <br />
            In our last lesson we shall cover how to deal with clients once you land a gig. See you there!!!

        
        
            </p>
            <div class="btns">
        <button class="prv">
        <Link to='/lesson8'><i class="fa-solid fa-chevron-left"></i>  Previous</Link> 
        </button>

        <button class="nxt">
            <Link to='/lesson10'>Next  <i class="fa-solid fa-chevron-right"></i></Link>
        </button>

     </div>
     <br /> <br />

        </section>

        

        <Footer/>
    </body>
    </>
  )
}

export default Lesson9