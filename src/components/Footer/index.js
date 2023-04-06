import React from "react";
import './Footer.scss'

const Footer = () => {
  return(
    <div className="footer-main-container">
      <div className="footer-info">
        <h4>Call</h4>
        <p>
          <a href="tel:+525574043247">55-74-004-32-47</a>
        </p>
      </div>
      <div className="footer-info">
        <h4>Contact</h4>
        <p>
          <a href="mailto:sandre9477@gmail.com">sandre9477@gmail.com</a>
        </p>
      </div>
      <div className="footer-social-media">
        <h4>Folow</h4>
        <div className="icons-container">
        <img alt="instagram" src={require('../assets/instagram-icon.png')}/>
        <img alt="tiktok" src={require('../assets/tiktok-icon.png')}/>
        <img alt="facebook" src={require('../assets/facebook-icon.png')}/>
        </div>
      </div>
    </div>

  )


}
export default Footer;