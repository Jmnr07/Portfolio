import React  from 'react';
import '../../App.css';
import HeroAbout from './HeroAbout'
import Footer from '../Footer'

export default function About() {
    return (
    <div>
        <h1 className='about'>
            <HeroAbout />
        </h1>
        
        <Footer />
    </div>
        )
}