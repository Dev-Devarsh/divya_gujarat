import React, { useRef } from "react";
import styled from "styled-components";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { BiMapAlt } from "react-icons/bi";
import Navbar from "../Navbar";
import Footer from "../Footer/index";
import emailjs from "@emailjs/browser";
import { message } from "antd";

const ContactWrapper = styled.div`
  .contact-wrapper {
    max-width: 1140px;
    width: 100%;
    margin: 0 auto;
  }
  .contact-info {
    width: 50%;
    color: #fff;
  }
  /* .contact-form label {
    color: #fff;
    font-size: 16px;
    margin-top: 10px;
  } */
  .contact-form {
    width: 50%;
  }
  .contact-form input,
  textarea {
    width: 100%;
    max-width: 100%;
    border: 1px solid #818a91;
    border-radius: 4px;
  }
  .contact-form textarea {
    height: 82px;
  }
  .contact-form button {
    width: 100%;
    max-width: 100%;
    border: none;
    border-radius: 10px;
    height: 42px;
    color: #fff;
    background: #299bf2;
  }
  .contact-form button:hover {
    background: #dde6f3;
    color: #2a4b7c;
  }

  @media (max-width: 1000px) {
    .contact-wrapper {
      display: block;
      padding-left: 15px;
      padding-right: 15px;
    }
    .contact-info,
    .contact-form {
      width: 100%;
      text-align: center;
      margin-bottom: 25px;
    }
    .contact-info div {
      justify-content: center;
    }
  }
`;

const Index = ({ isNavbar }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_7c3x315",
      "template_sy0eq6z",
      form.current,
      "ywoDKBmNfW4fXAkI-"
    );
    message.success("message sent successfully");
    e.target.reset();
  };

  return (
    <>
      {isNavbar === false ? (
        ""
      ) : (
        <div>
          <Navbar />
          <div className="an-42 semi-bold-text text-center py80">
            Contact Us
          </div>
        </div>
      )}
      <ContactWrapper className="bg-color">
        <div className="contact-wrapper py90 flex">
          <div className="contact-info">
            <h1 className="an-40 semi-bold-text white--text">Contact Us</h1>
            <div className="flex an-16 regular-text">
              <div className="pt2">
                <BiMapAlt />
              </div>
              <p className="pl6">Hyderabad, Telangana</p>
            </div>
            <div className="flex an-16 regular-text">
              <div className="pt2">
                <BsFillTelephoneFill />
              </div>
              <p className="pl6">+91 603 215 8874</p>
            </div>
            <div className="flex an-16 regular-text">
              <div className="pt2">
                <HiMail />
              </div>
              <p className="pl6">info@krea8labs.com</p>
            </div>
          </div>
          <form className="contact-form" ref={form} onSubmit={sendEmail}>
            <input
              placeholder="Name"
              name="name"
              className="an-16 regular-text pa10 mb10"
            />
            <br />
            <input
              placeholder="Email"
              name="email"
              type="email"
              className="an-16 regular-text pa10 mb10"
            />
            <br />
            <textarea
              placeholder="Message"
              name="message"
              className="an-16 regular-text pa10 mb10"
            />
            <br />
            <button className="an-16 regular-text cursor-pointer">Send</button>
          </form>
        </div>
      </ContactWrapper>
      {isNavbar === false ? "" : <Footer />}
    </>
  );
};

export default Index;
