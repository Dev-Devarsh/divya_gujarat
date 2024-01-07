import React from "react";
// import styled from "styled-components";
import useDevice from "../../../hooks/useDevice";
import './footer.css';


const Footer = () => {
  // const navigate = useNavigate();
  const { isMobile, isTablet } = useDevice();

  return (
    <div>
      {!isMobile && !isTablet ? (
        <div className="footer-wapper-web">

          <div className="footer-details">

            <div className="LinksWrapper">
              <div className="footer-link"> About Us</div>
              <div className="footer-link"> Contact Us  </div>
              <div className="footer-link"> Privacy Policy </div>
            </div>

            <div className="social-media-icon-wrapper">
              <a href="www.instagram.com" className="icon icon--instagram">
                <i class="ri-instagram-line"></i>
              </a>
              <a href="www.instagram.com" className="icon icon--facebook">
                <i class="ri-facebook-line"></i>
              </a>
              <a href="www.instagram.com" className="icon icon--youtube">
                <i class="ri-youtube-line"></i>
              </a>
            </div>

          </div>
          <center>
            <div className="copy-right-container">
              <h5>Copyright © 2024 Divya Gujarat. All Rights Reserved.</h5>
            </div>
          </center>

        </div>
      ) : (
        <div className="footer-wrapper">
        </div>
      )}
    </div>
  );
};

export default Footer;
