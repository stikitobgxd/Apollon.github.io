import './brand.css';

import { buymeacoffe, discord, facebook, telegram, youtube } from './imports';

import React from 'react';

const Brand = () => {
  return (
    <div className='crawenOS__brand section__padding'>
      <div>
        <img src={youtube} alt="youtube"/>
      </div>
          <div>
        <img src={facebook} alt="facebook"/>
      </div>
            <div>
        <a href="https://discord.com/invite/crawenos">           
        <img src={discord} alt="discord"/>
        </a>   
      </div>
            <div>
        <img src={telegram} alt="telegram"/>
      </div>
            <div>
        <a href="https://buymeacoffee.com/crawenOS">                 
        <img src={buymeacoffe} alt="buymeacoffe"/>
        </a>
      </div>
    </div>
  )
}

export default Brand