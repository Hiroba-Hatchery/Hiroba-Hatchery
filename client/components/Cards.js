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
              text='Ponder'
              label='OS Labs'
              path='/services'
            />
            <CardItem
              src='https://github.com/open-source-labs/obsidian/raw/master/assets/logoSilver.jpg'
              text='Obsidian'
              label='OS Labs'
              path='/services'
            />
            <CardItem
              src='https://github.com/open-source-labs/Svelvet/raw/main/src/assets/banner.png'
              text='Svelvet'
              label='OS Labs'
              path='/services'
            />
            <CardItem
              src='https://github.com/open-source-labs/Chronos/raw/master/app/assets/Chronos-Demo-poster.png'
              text='Chronos'
              label='OS Labs'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://github.com/oslabs-beta/RediScope/raw/main/src/components/images/RediScope%203.png'
              text='RediScope'
              label='OS Labs'
              path='/services'
            />
            <CardItem
              src='https://github.com/oslabs-beta/ZusTime/raw/main/src/zustime_banner.png'
              text='ZusTime'
              label='OS Labs'
              path='/services'
            />
            <CardItem
              src='https://github.com/oslabs-beta/Hearth/raw/main/src/logo.png'
              text='Hearth'
              label='OS Labs'
              path='/services'
            />
            <CardItem
              src='https://github.com/open-source-labs/reactime/raw/master/assets/readme-logo-300-no-version.png'
              text='Reactime'
              label='OS Labs'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://github.com/oslabs-beta/Ponder/raw/main/assets/small-ponder.png'
              text='Ponder'
              label='OS Labs'
              path='/services'
            />
            <CardItem
              src='https://github.com/open-source-labs/obsidian/raw/master/assets/logoSilver.jpg'
              text='Obsidian'
              label='OS Labs'
              path='/services'
            />
            <CardItem
              src='https://github.com/open-source-labs/Svelvet/raw/main/src/assets/banner.png'
              text='Svelvet'
              label='OS Labs'
              path='/services'
            />
            <CardItem
              src='https://github.com/open-source-labs/Chronos/raw/master/app/assets/Chronos-Demo-poster.png'
              text='Chronos'
              label='OS Labs'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://github.com/oslabs-beta/RediScope/raw/main/src/components/images/RediScope%203.png'
              text='RediScope'
              label='OS Labs'
              path='/services'
            />
            <CardItem
              src='https://github.com/oslabs-beta/ZusTime/raw/main/src/zustime_banner.png'
              text='ZusTime'
              label='OS Labs'
              path='/services'
            />
            <CardItem
              src='https://github.com/oslabs-beta/Hearth/raw/main/src/logo.png'
              text='Hearth'
              label='OS Labs'
              path='/services'
            />
            <CardItem
              src='https://github.com/open-source-labs/reactime/raw/master/assets/readme-logo-300-no-version.png'
              text='Reactime'
              label='OS Labs'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
