import React from 'react';
import './HeroSection.css';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/brightstar-vid5.mp4' autoPlay loop muted />
      
      <div className='hero-btn'>

        <Link to='/homepage'>
          <button>GET STARTED</button>
        </Link>
        
      </div>
    </div>
  );
}

export default HeroSection;
