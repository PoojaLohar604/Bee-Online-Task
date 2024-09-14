import React from 'react';
import './Hero.css';
import heroimage from '../../assets/heroimage.png';

const Hero = () => {
  return (
    <div className='hero-page-content'>
        <div className='hero-page-main-content'>
            <div className='hero-left-content'>
            <h5>Welcome</h5>
            <h2>Best Learning Opportunities</h2>
            <p>Our goal is to make online education work for everyone</p>
            <div className='left-both-button'>
                <button>Join Us</button>
                <button>Learn More</button>
            </div>
            </div>
            <div className='hero-right-content'>
              <img src={heroimage}/>
            </div>
        </div>
    </div>
  )
}

export default Hero