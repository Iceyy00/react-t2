import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className='hero-container'>
      <h1>ADVENTURE AWAITS..</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <button 
        className='btns' 
        buttonStyle='btn--outline' 
        buttonSize='btn--large'>
            GET STARTED
        </button>
        <button 
        className='btns' 
        buttonStyle='btn--primary' 
        buttonSize='btn--large'>
            WATCH TRAILER <i className='far fa-play-circle' />
        </button>
      </div>
    </div>
  )
}

export default HeroSection
