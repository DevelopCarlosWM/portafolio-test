import React from 'react';
import AboutMeSectionSection from '../AboutMe';
import Info from '../Info';
import NestedImages from '../NestedImages';
import ScreenContainer from '../ScreenContainer';

const img1 = require('../assets/me1.png');
const img2 = require('../assets/me2.png');
const backgroundImage = require('../assets/BackgroundBrand.png');
const AboutMeScreen = () => {
  return (
    <React.Fragment>
      <ScreenContainer>
        <AboutMeSectionSection
          customImagesComponet={<NestedImages src1={img1} src2={img2} />}
          title="I AM SANDRE, A DEVELOPER AND DESIGNER."
          content="sasdjas djask jdhajs dhjasdha jsdjas dhkjs adask dhakshd"
          hideButton
          infoWrapperClassName="custom-info-wrapper"
        />
        <AboutMeSectionSection
          customImagesComponet={
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
              <Info title="DEVELOPER" content="Lorem ipsum dolor sit amet, consectetuer adipi-
                scing elit, sed diam nonummy nibh euismod tinci-
                dunt ut laoreet dolore maana aliquam erat volut-" />
              <Info title="WEB DESIGN" content="Lorem ipsum dolor sit amet, consectetuer adipi-
                scing elit, sed diam nonummy nibh euismod tinci-
                dunt ut laoreet dolore maana aliquam erat volut-" />
              <Info title="MOTION GRAPHICS" content="Lorem ipsum dolor sit amet, consectetuer adipi-
                scing elit, sed diam nonummy nibh euismod tinci-
                dunt ut laoreet dolore maana aliquam erat volut-" />
            </div>
          }
          title="I AM SANDRE, A DEVELOPER AND DESIGNER."
          content="As a designer and developer
          Ican help you in projects oriented to Front-end
          programming, as well as
          generate solutions to problems (most of the time)."
          hideButton
          infoWrapperClassName="custom-info-wrapper"
          customBackgroundImage={backgroundImage}
          customTitleComponent={
            <h1>MY <span style={{ color: '#AB8844' }}>SERVICES</span></h1>
          }
          customContentClassName="small-content-text"
        />
      </ScreenContainer>
    </React.Fragment>
  );
};

export default AboutMeScreen;
