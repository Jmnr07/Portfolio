import React from 'react'
import CardItem from './CardItem'
import './Cards.css';
import ExpenseApp from '../project-media/ExpenseApp.png'


function Cards() {
    return (
        <div className='cards'>
            <h1 className= 'cards__project'>Check out my Project!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                        src={ExpenseApp}
                        text="First Project"
                        label= 'ExpenseApp'
                        path='/Projects' 
                        />                      
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards
