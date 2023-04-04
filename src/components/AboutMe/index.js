import React from 'react';
import './AboutMe.scss';

const AboutMe = () => {
  const handleClick = () => {
    alert('test');
  };
  return (
    <div className="aboutme-main--container">
      <div className="padding-container">
        <div className="content-container">
          <div className="info-container">
            <div className="info-wrapper">
              <h1>Mauricio Sandre</h1>
              <p>adsjfa asjdajda dhs dh2j3ms dahufr s ajdw dfnasdjf ajf asds dfhq ana da</p>
              <button onClick={handleClick} type="button">Contact</button>
            </div>
          </div>
          <div className="img-container">
            <img alt="Logo" src="https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
