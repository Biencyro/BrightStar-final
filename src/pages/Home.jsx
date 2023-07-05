import React from 'react';
import '../App.css';
import HeroSection from '../components/HeroSection';
import './Home.css';
import Footer from '../components/Footer';


function Home() {
  return (
   <>
   <HeroSection/>
   <div class="testimonials">
        <div class="inner">
            <h1>Testimonials</h1>
            <div class="border"></div>

            <div class="row">
                <div class="col">
                    <div class="testimonial">
                    <img src="./images/blog1.jpg" alt=""/>
                        <div class="name">Bien Cyr</div>
                        <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star-half checked"></span>

                    <p> <span><i class="fa-solid fa-quote-left"></i></span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore fuga nisi ipsam, adipisci laudantium quia totam tenetur facere eum ex autem delectus qui et voluptatum libero itaque praesentium sint sunt!</p>
                    </div>

                </div>

                <div class="col">
                    <div class="testimonial">
                    <img src="./images/blog2.jpg" alt=""/>
                        <div class="name">Bien Cyr</div>
                        <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>

                        <p><span><i class="fa-solid fa-quote-left"></i></span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore fuga nisi ipsam, adipisci laudantium quia totam tenetur facere eum ex autem delectus qui et voluptatum libero itaque praesentium sint sunt!</p>
                    </div>

                </div>

                <div class="col">
                    <div class="testimonial">
                    <img src="./images/blog3.jpg" alt=""/>
                        <div class="name">Bien Cyr</div>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star-half checked"></span>

                        <p><span><i class="fa-solid fa-quote-left"></i></span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore fuga nisi ipsam, adipisci laudantium quia totam tenetur facere eum ex autem delectus qui et voluptatum libero itaque praesentium sint sunt!</p>
                    </div>

                </div>

                <div class="col">
                    <div class="testimonial">
                    <img src="./images/blog4.jpg" alt=""/>
                        <div class="name">Bien Cyr</div>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star "></span>

                        <p><span><i class="fa-solid fa-quote-left"></i></span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore fuga nisi ipsam, adipisci laudantium quia totam tenetur facere eum ex autem delectus qui et voluptatum libero itaque praesentium sint sunt!</p>
                    </div>

                </div>

                <div class="col">
                    <div class="testimonial">
                        <img src="./images/blog2.jpg" alt=""/>
                        <div class="name">Bien Cyr</div>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <p> <span><i class="fa-solid fa-quote-left"></i></span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore fuga nisi ipsam, adipisci laudantium quia totam tenetur facere eum ex autem delectus qui et voluptatum libero itaque praesentium sint sunt!</p>
                    </div>

                </div>
            </div>
        </div>
    </div>

      <Footer/>

   </>
  );
}

export default Home;