import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these Epic Projects!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://github.com/oslabs-beta/Ponder/raw/main/assets/small-ponder.png'
              text='The Ponder logo, which depicts Deno looking at two databases'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='../images/obsidianLogo.webp'
              text='From__image__2'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='../images/img-2.jpg'
              text='From__image__2'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='../images/img-2.jpg'
              text='From__image__2'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='../images/img-2.jpg'
              text='From__image__2'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='../images/img-2.jpg'
              text='From__image__2'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='../images/img-2.jpg'
              text='From__image__2'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='../images/img-2.jpg'
              text='From__image__2'
              label='Adventure'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
