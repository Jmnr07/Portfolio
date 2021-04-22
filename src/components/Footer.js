import React from 'react';
import {Button} from './Button';
import './Footer.css';

function Footer() {
    return (
        <div  className='footer-container'>
            <section 
            className='footer-about'>
                <p 
                className='footer-about-heading'
                path= '/about'
                >
                    JMNR 
                    <i className="fas fa-user-astronaut" />
                </p>
                    <div>
                            <Button buttonStyle='btn--outline'>Contact Me</Button>
                    </div>  
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
