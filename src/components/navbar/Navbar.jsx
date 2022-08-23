import './navbar.css';

import React, {useState} from 'react';
import {RiCloseLine, RiMenu3Line} from 'react-icons/ri'

import logo from '../../assests/karma2.png'

const Menu = () => (
  <>
  <p><a href="#Information">Information</a></p>
  <p><a href="#wcrawenos">CrawenOS</a></p>
  <p><a href="#Features">Features</a></p>
  </>
)


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='crawenOS__navbar'>
      <div className='crawenOS__navbar-links'>
       <div className='crawenOS__navbar-links_logo'>
         <a href="https://discord.com/invite/crawenos">  
        <img src={logo} alt="logo"/>
        </a>
       </div>
       <div className='crawenOS__navbar-links_container'>
         <Menu/>
      </div>
      <div className="crawenOS__navbar-download">
        <button class="glow-on-hover" type="button">Download</button>
      </div>
      <div className="crawenOS__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="crawenOS__navbar-menu_container scale-up-center">
          <div className="crawenOS__navbar-menu_container-links">
          <Menu/>
          </div>
         <div className="crawenOS__navbar-download">
           <button class="glow-on-hover" type="button">Download</button>
          </div>
        </div>
        )}
      </div>
      </div>
    </div>
  )
}

export default Navbar