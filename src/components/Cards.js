import React from 'react'
import CardItem from './CardItem'
import './Cards.css';


function Cards() {
    return (
        <div className='cards'>
            <h1 className= 'cards__project'>Check out my Projects!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                        src=''
                        alt=''
                        text=""
                        label= 'ProjectName'
                        path='/Projects' 
                        />
                        <CardItem
                        src=''
                        alt=''
                        text=""
                        label= 'ProjectName'
                        path='/Projects' 
                        />
                        <CardItem
                        src=""
                        text=""
                        label= 'ProjectName'
                        path='/Projects' 
                        />
                        <CardItem
                        src=""
                        text=""
                        label= 'ProjectName'
                        path='/Projects' 
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards
