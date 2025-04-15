import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check Out These EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
            <ul className="cards__item">
                <CardItem 
                src="images/img-1.jpg"
                text="Explore the hidden waterfall deep
                inside the amazon jungle"
                label='Adventure'
                path='/services'
                />
                <CardItem 
                src="images/img-2.jpg"
                text="Explore the hidden waterfall deep
                inside the amazon jungle."
                label='Luxury'
                path='/services'
                />
                </ul>
                <ul className="cards__item">
                <CardItem 
                src="images/img-7.jpg"
                text="Explore the hidden waterfall deep
                inside the amazon jungle"
                label='Adventure'
                path='/services'
                />
                <CardItem 
                src="images/img-5.jpg"
                text="Explore the hidden waterfall deep
                inside the amazon jungle."
                label='Luxury'
                path='/services'
                />
                </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards