import React from "react";
import styled from "styled-components";
// import { Input, Button, Form, message } from "antd";
// import { Link, useNavigate } from "react-router-dom";
// import { googleIcon, githubIcon } from "../../helper/constant";
// import { useSignupMutation } from "../../redux/services/auth";
// import { BeatLoader } from "react-spinners";
// import ButtonCom from "./ButtonCom";

const SignupWrapper = styled.div`
  img {
    width: 40px;
    height: 40px;
  }
  .header_div {
    height: 200px;
  }
  .container {
    width: 6 0%;
    margin-inline: auto;
  }
  .form-div {
    width: 60%;
  }
  .title {
    height: 66px;
    font-size: 50px;
    font-weight: 800;
    line-height: 1.3;
    color: rgb(9, 23, 71);
  }
  .description {
    height: 75px;
    font-size: 20px;
    font-weight: 600;
    color: rgb(3, 180, 198);
    line-height: 1.5;
    margin-left: 15px;
  }
  .button {
    width: 215px;
    height: 45px;
    cursor: pointer;
    background: none rgb(3, 180, 198);
    font-size: 14px;
    font-weight: 700;
    color: rgb(255, 255, 255);
    letter-spacing: 2px;
    border-radius: 5px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
  }

  .right_part {
    width: 50%;
    justify-content: center;
    align-items: center;
    display: flex;
    /* border-left: 2px solid rgb(58, 77, 143); */
    .ant-form-item {
      margin-bottom: 0px !important;
    }
    .ant-form-item-label {
      padding: 0px !important;
    }
  }
  .left_part {
    width: 100%;
  }
  .signup_div {
    width: 100%;
  }
  .bottom_side {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .ant-form-item-label > label.ant-form-item-required:before {
    content: unset;
  }
  .ant-form-item-label > label.ant-form-item-required:before {
    content: unset;
  }
  @media (max-width: 1000px) {
    overflow: hidden;
    .bottom_side {
      flex-direction: column-reverse;
    }
    .right_part {
      width: 100%;
      border-left: none;
    }
    .form-div {
      width: 100%;
    }
    .ant-col-offset-1 {
      margin-left: 0;
    }
    .button {
      width: 100%;
    }
    .left_part {
      width: 100%;
      border-top: 1px solid rgb(58, 77, 143);
      margin-top: 25px;
      padding-top: 25px;
    }
    .title {
      text-align: center;
      font-size: 34px;
    }
    .description {
      width: 100%;
      text-align: center;
    }
    .bottom_side {
      padding: 24px;
    }
  }
`;

const Signup = () => {
  return (
    <div></div>
  )
};

export default Signup;
