import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video
        src='https://www.pexels.com/video/a-starry-night-sky-9341381'
        autoPlay
        loop
        muted
      />
      <h1>Hatching Your Ideas Starts Here</h1>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Get started
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
