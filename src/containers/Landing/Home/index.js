import React from "react";
import styled from "styled-components";
import home_image from "../../../asset/images/home_image.jpg";

const HomeWrapper = styled.div`
  background-color: #e9ebf1;
  .home-wrapper,
  .card-section {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
  }
  .home-left {
    width: 50%;
  }
  .home-right {
    width: 50%;
  }
  .card-section {
    position: relative;
    top: 43px;
  }
  .card-container {
    background: #ffffff;
    border-radius: 10px;
    padding: 10px 15px;
    border: 1px solid #e9ebf1;
    box-shadow: 0 21px 19px -5px #f2f2f2;
  }
  .card-container img {
    height: 70px;
    width: 71px;
  }
  .header-text {
    font-size: 1.2em;
    font-weight: 600;
  }
  .sub-text {
    width: 266px;
    font-size: 1.2em;
  }

  @media (max-width: 1000px) {
    .home-left, .home-right {
      width: 100%;
      padding: 0 !important;
    }
    .home-wrapper {
      display: block;
    }
    .mobile_img {
      width: 100%;
    }
    .an-50{
      font-size: 42px !important;
      text-align: center;
    }
  }
`;

const index = () => {
  return (
    <HomeWrapper>
      <div className="flex home-wrapper py80 px20">
        <div className="home-left pr60 pt55">
          <h1 className="an-50 semi-bold-text lh-75">
            Dedicated Cloud Services Partner
          </h1>
          <p className="an-16 regular-text lh-25">
            Power your cloud-native applications with a dedicated team of
            professionals. We design, build and develop cloud-based
            infrastructure that meets your business needs.
          </p>
        </div>
        <div className="home-right">
          <img src={home_image} alt="home_image" className="mobile_img" />
        </div>
      </div>
    </HomeWrapper>
  );
};

export default index;
