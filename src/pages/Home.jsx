import React from 'react'

import HeroSection from '../components/HeroSection'
import './Home.css'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'


function Home() {
  return (
   <>
   
   <HeroSection/>

   <div class="intro">
   <h1>Get To Know Us</h1>
   <div class="border"></div>

    <p>
    Welcome to BrightStar Writing Academy, a leading self-paced online academy dedicated to providing comprehensive training in the art of writing. <br />
    Whether you're a student, professional, or anyone seeking to refine their writing skills, our academy offers a specialized course in academic writing, article writing, blog writing, and SEO writing. <br /><br />

    With the freedom of self-paced learning, you have the flexibility to take control of your education and study at your own convenience. <br />
    Our courses are designed to accommodate your busy lifestyle while ensuring you receive the highest quality of instruction. 
     <br /><br />

     <div class="divider"></div>

    <h2>Here's what you expect from each of our specialized programs:</h2>
    

    <br />

    <li>Academic Writing</li>
    <ul>
        You will gain the expertise to produce well-structured and academically sound papers. 
        Learn how to conduct research effectively, cite sources properly, and construct compelling arguments to excel in your academic writing pursuits.
    </ul>
    <br />

    <li>Article Writing</li>
    <ul>
    Here we explore the art of crafting engaging and informative articles that captivate readers. 
    Our course will teach you how to develop unique content, maintain a clear voice, and tailor your writing to various platforms.
    </ul>
    <br />

    <li>Blog Writing</li>
    <ul>
    You will discover the secrets to writing captivating blog posts that keep audiences coming back for more. 
    Learn how to connect with readers, create shareable content, and effectively express your ideas through blogging. 
    You will also learn how to incorporate affiliate marketing in your blogs.
    </ul>
    <br />

    <li>SEO Writing</li>
    <ul>
    We will help you develop the skills to write content that not only appeals to readers but also ranks high in search engine results. 
    Our SEO writing training covers keyword research, on-page optimization, and strategies to improve online visibility among other principles.
    </ul>
    <br />

    Here at At BrightStar Writing Academy, we believe in the power of feedback and support. 
    Throughout your learning journey, you'll receive personalized guidance and constructive critiques from our experienced instructors, helping you refine your writing skills and build confidence in your abilities. <br /> <br />

    Join BrightStar Writing Academy today and embark on a learning adventure that will elevate your writing to new heights!!

    </p>
    <div class="divider"></div>

   </div>
   <div class="testimonials">
        <div class="inner"> 
            <h1>Testimonials</h1>
            <div class="border"></div>

            <div class="row">
                <div class="col">
                    <div class="testimonial">
                    <img src="./images/vc.jpg" alt=""/>
                        <div class="name">Charles O.W</div>
                        <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star-half checked"></span>

                    <p> <span><i class="fa-solid fa-quote-left"></i></span> 
                    BrightStar Writing Academy's courses transformed my writing skills! 
                    I now feel more confident in my academic and professional writing. Highly recommended!
                    </p>
                    </div>

                </div>

                <div class="col">
                    <div class="testimonial">
                    <img src="./images/ab.jpeg" alt=""/>
                        <div class="name">Alice W.</div>
                        <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>

                        <p><span><i class="fa-solid fa-quote-left"></i></span>
                        I loved the flexibility of self-paced learning at BrightStar Writing Academy. 
                        The blog writing course helped me launch my blog successfully and I'm now making a living from it.
                        </p>
                    </div>

                </div>

                <div class="col">
                    <div class="testimonial">
                    <img src="./images/bn.jpg" alt=""/>
                        <div class="name">Ryan Kiprop</div>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star-half checked"></span>

                        <p><span><i class="fa-solid fa-quote-left"></i></span>
                        BrightStar Writing Academy is a game-changer! 
                        After completing their academic writing course, I transitioned from struggling to secure freelance gigs to having a steady stream of clients.
                        </p>
                    </div>

                </div>

                <div class="col">
                    <div class="testimonial">
                    <img src="./images/br2.jpeg" alt=""/>
                        <div class="name">Odiwuor Jack</div>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star "></span>

                        <p><span><i class="fa-solid fa-quote-left"></i></span> 
                        The academic writing course elevated my skills to a professional level, and I now work as a freelance academic writer. 
                        It's incredible to see how far I've come and how much I can earn doing what I love!
                        </p>
                    </div>

                </div>

                <div class="col">
                    <div class="testimonial">
                    <img src="./images/user.jpg" alt=""/>
                        <div class="name">Olivia Ganson</div>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <p> <span><i class="fa-solid fa-quote-left"></i></span>
                        The article writing course was exactly what I needed to improve my freelance writing career. 
                        Thanks, BrightStar, for the valuable insights!
                        </p>
                    </div>

                </div>
            </div>
        </div>
                <br /><br />

        <h4>Check out our course lessons <Link className='underline' to='/homepage'>HERE.</Link></h4>

    </div>

                         

      <Footer/>

   </>
  )
}

export default Home;