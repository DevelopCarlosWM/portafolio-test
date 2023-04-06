import React from 'react';
import './AboutMe.scss';

const AboutMeSectionSection = ({
  backgroundColor,
  img,
  title,
  content,
  onClick,
  buttonTitle,
  titleColor,
  contentColor,
  customImagesComponet,
  hideButton,
  infoWrapperClassName,
  customTitleComponent,
  customBackgroundImage,
  customContentClassName,
}) => {
  return (
    <div className="aboutme-main--container" style={{ backgroundImage: `url(${customBackgroundImage})`, backgroundColor: backgroundColor }}>
      <div className="padding-container">
        <div className="content-container">
          <div className="info-container">
            <div className={`info-wrapper ${infoWrapperClassName}`}>
              {customTitleComponent ? customTitleComponent : (
                <h1 style={titleColor ? { color: titleColor } : undefined}>
                  {title}
                </h1>
              )}
              <p style={{ color: contentColor }} className={customContentClassName}>
                {content}
              </p>
              {hideButton ? null : 
                <button onClick={onClick} type="button">{buttonTitle}</button>
              }
            </div>
          </div>
          <div className="img-container">
            {customImagesComponet ? customImagesComponet : (
              <img alt="Logo" src={img} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSectionSection;
