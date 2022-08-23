import './info.css';

import React from 'react';
import mockup from '../../assests/crawen-mockup-pc1.png'

const Header = () => {
  return (
    <div className="crawenOS__header section__padding" id="Information">
      <div className='crawenOS__header-content'>
        <h1 className="gradient__text">
          This is What You Require.
        </h1>
        <p>We are developing our own custom Windows operating system. We are designing an operating system that will make people feel safer while not having to go overboard. People who set up our system will not have to search for videos on YouTube, such as improving or upgrading performance. This will be a magnificent site, open to everyone. We are getting better at supporting more and taking strong action. We expect to publish the toolkit and updates as an open source in future updates. Thus, I believe we can also get your help...</p>
      </div>
      <div className="crawenOS__header-image"> 
        <img src={mockup} alt='mockup'/>
      </div>
    </div>
  )
}

export default Header
