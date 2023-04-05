import React from 'react';
import './AboutMe.scss';

const AboutMeSectionSection = ({ backgroundColor, img, title, content, onClick, buttonTitle, titleColor, contentColor }) => {
  return (
    <div className="aboutme-main--container" style={backgroundColor ? { backgroundColor } : undefined}>
      <div className="padding-container">
        <div className="content-container">
          <div className="info-container">
            <div className="info-wrapper">
              <h1 style={titleColor ? { color: titleColor } : undefined}>
                {title}
              </h1>
              <p style={contentColor ? { color: contentColor } : undefined}>
                {content}
              </p>
              <button onClick={onClick} type="button">{buttonTitle}</button>
            </div>
          </div>
          <div className="img-container">
            <img alt="Logo" src={img} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSectionSection;
