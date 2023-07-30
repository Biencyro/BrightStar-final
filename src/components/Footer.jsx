import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
<>

<footer class="footer">
        <div class="container">
            <div class="row">
                <div class="footer-col">
                    <h4> Company</h4>
                    <ul>
                        <li><a href="/">About Us</a></li>
                        <li><a href="/payment1">Payments</a></li>
                        <li><a href="/">Other Services</a></li>
                        <li><a href="/">Affiliate Programme</a></li>
                    </ul>

                </div>

                <div class="footer-col">
                    <h4> Our Courses</h4>
                    <ul>
                        <li><a href="/lesson1">Academic Writing</a></li>
                        <li><a href="/lesson11">Article Writing</a></li>
                        <li><a href="/lesson18">Blog Writing</a></li>
                        <li><a href="/lesson25">SEO Writing</a></li>
                    </ul>

                </div>
                
                
                <div class="footer-col">
                    <h4> Follow Us</h4>
                    
                    <div class="social-links">
                        <a href="/contact"><i class="fab fa-facebook-f" ></i></a>
                        <a href="/contact"><i class="fab fa-twitter"></i></a>
                        <a href="/contact"><i class="fab fa-instagram"></i></a>
                        <a href="/contact"><i class="fab fa-linkedin-in"></i></a>
                        
                        
                        
                    </div>

                </div>

            </div>

        </div>



    </footer>

</>
  )
}

export default Footer