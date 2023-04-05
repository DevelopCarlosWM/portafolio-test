import React from 'react';
import './header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className='header-main'>
        <div className="header-image--container">
          <img alt="Logo" src={require('../assets/brand.png')} />
        </div>
        <div className="header-nav-list--container">
          <ul>
            <li>
              <span>About me</span>
            </li>
            <li>
              <span>Contact</span>
            </li>
            <li>
              <span>Projects</span>
            </li>
            <li>
              <span>Education</span>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;