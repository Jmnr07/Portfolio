import React from 'react';
import '../App.css';
import {Button} from './Button';
import './HeroSection.css';
import BackgroundVid from '../project-media/stars.mp4'

function HeroSection() {
    return (
        <div className='hero-section-container'>
            <video className='hero-section-video' src= {BackgroundVid} autoPlay loop muted />
            <h1 className='hero-section-title'>Welcome to JM's World</h1>
            <p>What are you waiting for?</p>
            <div className='hero-section-btns'>
                <Button 
                className='hero-section-btns' 
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                Get Started
                </Button>
                
            </div>
        </div>
    )
}

export default HeroSection
