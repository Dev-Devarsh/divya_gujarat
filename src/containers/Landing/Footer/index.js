import React from "react";
// import styled from "styled-components";
import { Col, Row } from "antd";
import { useNavigate } from "react-router-dom";
import useDevice from "../../../hooks/useDevice";
import './footer.css';
import faceBook from "../../../asset/images/facebook.png"
import instagram from "../../../asset/images/instagram.png"
import youTube from "../../../asset/images/youtube.png"


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
              <center className="social-media-icon"> <img src={faceBook} alt="logo" className="icon-wrapper-facebook" /> </center>
              <center className="social-media-icon"> <img src={instagram} alt="logo" className="icon-wrapper-instagram" /> </center>
              <center className="social-media-icon"> <img src={youTube} alt="logo" className="icon-wrapper-youtube" /> </center>
            </div>

          </div>
          <center>
            <div className="copy-right-container">
              <h5>Copyright © 2023 Divya Gujarat. All Rights Reserved.</h5>
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
