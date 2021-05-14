import React  from 'react';

import '../../App.css';
import HeroAbout from './HeroAbout'
import Footer from '../Footer'
import AboutMe from '../AboutMe'


export default function About() {
    return (
    <div>
        <HeroAbout />
        <AboutMe />
        <Footer />
    </div>
        )
}