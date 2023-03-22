import { Button } from "antd";

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LogoutWrapper = styled.div`
  overflow-y: hidden;
  .header_div {
    height: 400px;
  }
  .container {
    width: 60%;
    margin-inline: auto;
  }
  .logout_container {
    text-align: center;
    margin-top: 50px;
  }
  .title {
    font-size: 50px;
    font-weight: 800;
    line-height: 1.3;
    color: rgb(9, 23, 71);
  }
  .description {
    font-size: 20px;
    font-weight: 600;
    color: rgb(3, 180, 198);
    line-height: 1.5;
    margin-top: 50px;
  }
  .button {
    width: 205px;
    height: 45px;
    cursor: pointer;
    background: none rgb(3, 180, 198);
    font-size: 14px;
    font-weight: 700;
    color: rgb(255, 255, 255);
    letter-spacing: 2px;
    border-radius: 5px;
    margin-top: 20px;
  }
`;

const Logout = () => {
  return (
    <LogoutWrapper>
      <div className="container logout_container">
        <div className="title">Krea8Labs</div>
        <div className="description">You have successfully logged out!!</div>
        <Link to="/signin">
          <Button htmlType="submit" className="button">
            Login
          </Button>
        </Link>
      </div>
    </LogoutWrapper>
  );
};

export default Logout;
