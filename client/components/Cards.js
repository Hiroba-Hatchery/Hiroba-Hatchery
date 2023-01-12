import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h2>Check out these Epic Projects!</h2>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://github.com/oslabs-beta/Ponder/raw/main/assets/small-ponder.png'
              text='Ponder'
              desc='A simple ORM in PostgreSQL built for Deno'
              label='OS Labs'
              path='/services'
            />
            <CardItem
              src='https://github.com/open-source-labs/obsidian/raw/master/assets/logoSilver.jpg'
              text='Obsidian'
              desc='GraphQL caching client and server module for Deno'
              label='OS Labs'
              path='/services'
            />
            <CardItem
              src='https://github.com/open-source-labs/Svelvet/raw/main/src/assets/banner.png'
              text='Svelvet'
              desc='A lightweight svelte componeny library'
              label='OS Labs'
              path='/services'
            />
            <CardItem
              src='https://github.com/open-source-labs/Chronos/raw/master/app/assets/Chronos-Demo-poster.png'
              text='Chronos'
              desc='Monitors server health and web traffic in real time'
              label='OS Labs'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://github.com/oslabs-beta/RediScope/raw/main/src/components/images/RediScope%203.png'
              text='RediScope'
              desc='displays relevant Redis cache performance metrics that are the most important to developers'
              label='OS Labs'
              path='/services'
            />
            <CardItem
              src='https://github.com/oslabs-beta/ZusTime/raw/main/src/zustime_banner.png'
              text='ZusTime'
              desc='A time travel debugger for Zustand'
              label='OS Labs'
              path='/services'
            />
            <CardItem
              src='https://github.com/oslabs-beta/Hearth/raw/main/src/logo.png'
              text='Hearth'
              desc='An application to help prevent cold starts in AWS Lambda functions.'
              label='OS Labs'
              path='/services'
            />
            <CardItem
              src='https://github.com/open-source-labs/reactime/raw/master/assets/readme-logo-300-no-version.png'
              text='Reactime'
              desc='A Chrome developer tool for time travel debugging & performance monitoring.'
              label='OS Labs'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://github.com/oslabs-beta/GraphQuill/raw/main/DOCUMENTATION/graphquill-logo.png'
              text='GraphQuill'
              desc='Real-time GraphQL API Exploration in VS Code'
              label='OS Labs'
              path='/services'
            />
            <CardItem
              src='https://github.com/oslabs-beta/DenoGres-4.0/raw/main/public/DenoGresWide.png'
              text='DenoGres'
              desc='Deno + PostgreSQL = DenoGres'
              label='OS Labs'
              path='/services'
            />
            <CardItem
              src='https://github.com/oslabs-beta/protographql/raw/master/public/assets/pictures/ProtoGraphQLLogo.png'
              text='ProtoGraphQL'
              desc='A prototyping tool that empowers developers to build and visualize GraphQL schemas'
              label='OS Labs'
              path='/services'
            />
            <CardItem
              src='https://github.com/oslabs-beta/Realize/raw/master/assets/realizeLogoPNG.png'
              text='Realize'
              desc='A React component tree visualizer'
              label='OS Labs'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://github.com/oslabs-beta/sapling/raw/master/sapling/media/sapling-logo.png'
              text='Sapling'
              desc='A convenient way to traverse your React app in VS Code'
              label='OS Labs'
              path='/services'
            />
            <CardItem
              src='https://github.com/oslabs-beta/Allok8/raw/master/client/assets/allok8.png'
              text='Allok8'
              desc='⚡️A pretty swell Kubernetes visualization tool'
              label='OS Labs'
              path='/services'
            />
            <CardItem
              src='https://github.com/oslabs-beta/Dockter/raw/main/app/assets/DockterLogoSM.png'
              text='Dockter'
              desc='A low-overhead, open-source Docker log management tool'
              label='OS Labs'
              path='/services'
            />
            <CardItem
              src='https://github.com/oslabs-beta/aether/raw/master/aether/assets/AetherLogo01.png'
              text='Aether'
              desc='All-in-One Memory Leak Testing Solution'
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
