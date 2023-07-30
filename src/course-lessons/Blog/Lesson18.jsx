import React from 'react'
import '../lessons.css'
import Header from '../../components/Header'
import Scrollbar from '../../components/Scrollbar'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import HamburgerMenu from '../../components/HamburgerMenu'
import Vidd18 from './../../components/embedded-videos/Vidd18'

const Lesson18 = () => {
  return (
          <>
            <body>

            <HamburgerMenu/>


            <Header/>
            <Scrollbar/>

            <div className='video-emb maxWidth-100% margin-auto padding-20px position-relative'>
    <div class="display-image">
            <Vidd18/>
    </div>
    </div>

            <section class="content">

            <h1>Lesson Eighteen (18): Introduction to Blog Writing</h1>

            <h3>Introduction to Blog Writing</h3>

            <center><h4>What is a blog?</h4> </center>

            <p>A blog is a type of website or online platform where individuals or groups regularly publish informal, often personal, and frequently updated content. 
              The term "blog" is a contraction of "weblog." Blogs typically consist of written entries called "posts" that are displayed in reverse chronological order, 
              meaning the most recent post appears at the top of the page, while older posts are archived and accessible through navigation menus or search functions.
              </p>


                      <center><h4>Types of blogs</h4></center>
                      <p>Here are some common types of blogs:</p>

                      <ul>
                      <li><u>Personal blogs</u></li> 
                      These are online journals or diaries where individuals share their thoughts, experiences, hobbies, and interests with readers. <br /><br />

                      <li><u>Corporate blogs</u></li>
                      Company websites may host blogs to interact with customers, share news, and provide valuable content to their target audience. <br />

                      <li><u>Niche blogs</u></li> 
                      These focus on a specific subject or industry, catering to a particular audience. Examples include fashion blogs, technology blogs, food blogs, travel blogs, etc. <br /><br />

                      <li><u>News blogs</u></li>
                      Some blogs function as online news outlets, offering regular updates on current events, politics, entertainment, or other topics. <br /><br />

                      <li><u>Professional blogs</u></li> 
                      Often created by businesses, professionals, or experts, these blogs aim to share knowledge, insights, and updates related to their respective industries. <br /><br />

                      </ul>

                      <h3>Benefits of blogging</h3>
                      <p>
              
                  
                      <li>Blogging provides a platform for individuals to express their thoughts, ideas, and creativity. 
                        It allows writers to share their unique perspectives and voice their opinions on various topics.</li>
                      <li>Blogging enables individuals to share their expertise and knowledge with a wider audience. 
                        By providing valuable and informative content, bloggers can educate and help readers seeking information on specific subjects.</li>
                      <li>Blogging helps individuals and professionals establish their online presence and personal brand. 
                        It allows them to showcase their skills, interests, and achievements, which can be beneficial for career advancement or attracting opportunities.</li>
                      <li>Blogs can foster a sense of community and create connections with like-minded individuals. 
                        By engaging with readers through comments and social media, bloggers can build a loyal audience and establish a supportive community around their content.</li>
                      <li> Blogging can lead to networking opportunities and collaboration with other bloggers, professionals, or businesses in related fields. 
                        It allows for the exchange of ideas, partnerships, guest posting, and cross-promotion, expanding reach and visibility.</li>
                      <li>Consistent blogging requires discipline, research, and organization. 
                        It helps improve writing skills, critical thinking, and knowledge acquisition in the chosen subject area.</li>
                      <li>Blogging can be a powerful marketing tool for businesses. 
                        It allows them to engage with their target audience, establish expertise, drive traffic to their website, and promote products or services.</li>
                      The most important benefit of blogging for a writer is earning. Therefore, in this course we will take you through the various ways you can earn as a blogger including: <br />
                       <ul>
                        <li>advertisements,</li>
                        <li>sponsored content,</li>
                        <li>affiliate marketing,</li> 
                        <li>selling digital products,</li>
                        <li>freelance writing,</li>
                        <li>selling Ad space,</li>
                        <li>consulting or coaching, </li>
                        <li>membership or subscription, and</li>
                        <li>physical products marketplace among others.</li>
                       </ul>

                      </p>

                      <div class="btns">
      

        <button class="nxt">
            <Link to='/lesson19'>Next <i class="fa-solid fa-chevron-right"></i></Link>
        </button>

     </div>
     <br /> <br /> 
            </section>

            
            <Footer/>
  </body>
  
    
    </>
    
  )
}

export default Lesson18