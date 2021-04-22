import React from 'react';
import BackgroundVid from '../../project-media/human.mp4'
import './HeroAbout.css'
import ProfilePic from '../../project-media/jm2.jpeg'

function HeroAbout() {
    return (
            <div className='hero-about-container'>
            <video className='hero-about-video' src= {BackgroundVid} autoPlay loop muted />
            <img className='hero-about-img' src={ProfilePic} alt='' />
            <h1 className='hero-about-name'>Jose Mari N. Reasonda</h1>
            </div>
        
    )
}

export default HeroAbout
