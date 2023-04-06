import React from 'react';
import { useNavigate } from 'react-router-dom';
import './header.scss';

const Header = () => {
  const navigate = useNavigate();
  const goTo = (path) => {
    navigate(path);
  };
  return (
    <header className="header">
      <div className='header-main'>
        <div className="header-image--container">
          <img alt="Logo" src={require('../assets/brand.png')} onClick={() => goTo('/')} />
        </div>
        <div className="header-nav-list--container">
          <ul>
            <li>
              <span onClick={() => goTo('/about')}>About me</span>
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