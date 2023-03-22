import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaRegUser, FaCaretLeft, FaCaretUp } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const SliderWrapper = styled.div`
  display: flex;

  .slider {
    height: 100vh !important;
    overflow-y: hidden;
    width: 211px;
    background-color: #50535e;
  }
  .logo {
    z-index: 4;
    width: 211px;
    height: 45px;
    background: none rgb(54, 161, 173);
    font-size: 14px;
    font-weight: 700;
    color: rgb(255, 255, 255);
    letter-spacing: 2px;
    line-height: 1;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
  }
  .menu {
    z-index: 3;
    width: 211px;
    height: 45px;
    cursor: pointer !important;
    background: none rgb(89, 119, 122);
    text-align: center;
    font-size: 14px;
    font-weight: 700;
    color: rgb(255, 255, 255);
    letter-spacing: 2px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }
  .menu:active {
    background-color: #009eb0;
  }
  .last_menu {
    background-color: #636869 !important;
    position: absolute;
    bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .last_menu:hover {
    background-color: #009eb0 !important;
  }
  .active {
    z-index: 3;
    width: 211px;
    height: 45px;
    cursor: pointer !important;
    background-color: #009eb0;
    text-align: center;
    font-size: 14px;
    font-weight: 700;
    color: rgb(255, 255, 255);
    letter-spacing: 2px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }
  .subactive {
    z-index: 3;
    width: 211px;
    height: 45px;
    cursor: pointer !important;
    background-color: #009eb0;
    text-align: center;
    font-size: 14px;
    font-weight: 700;
    color: rgb(255, 255, 255);
    letter-spacing: 2px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .visible_data {
    position: absolute;
    bottom: 80px;
    .menu {
      margin-bottom: 0px !important;
    }
  }
`;

const Slider = ({ value, visibleflag }) => {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState("cluster");

  const userName = useSelector((state) => state?.auth?.name);

  useEffect(() => {
    setActive(value);
    setVisible(visibleflag);
  }, []);

  return (
    <SliderWrapper>
      <div className="slider">
        <Link to="/cluster-list">
          <div className="logo" id="krea8labs">
            KREA8LABS
          </div>
        </Link>
        <Link to="/cluster-list">
          <div
            // className="menu "
            id="clusters"
            className={`${active === "cluster" ? "active" : "menu"}`}
          >
            Clusters
          </div>
        </Link>
        <Link to="/usage">
          <div
            id="usages"
            className={`${active === "usages" ? "active" : "menu"}`}
          >
            Usage
          </div>
        </Link>
        {visible && (
          <div className="visible_data">
            <Link to="/account">
              <div
                id="account"
                className={`${active === "account" ? "subactive" : "menu"}`}
              >
                Account
              </div>
            </Link>
            <Link to="/billing">
              <div
                className={`${active === "billing" ? "subactive" : "menu"}`}
                id="billing"
              >
                Billing
              </div>
            </Link>
            <Link to="/invoice">
              <div
                id="invoice"
                className={`${active === "invoice" ? "subactive" : "menu"}`}
              >
                Invoice
              </div>
            </Link>
          </div>
        )}
        <div className="menu last_menu">
          <div className="icon">
            <IconContext.Provider
              value={{ className: "shared-class", size: 35 }}
            >
              <FaRegUser />
            </IconContext.Provider>
          </div>
          <div> {userName} </div>
          <IconContext.Provider value={{ className: "shared-class", size: 35 }}>
            {!visible ? (
              <FaCaretLeft onClick={() => setVisible(!visible)} />
            ) : (
              <FaCaretUp onClick={() => setVisible(!visible)} />
            )}
          </IconContext.Provider>
        </div>
      </div>
    </SliderWrapper>
  );
};

export default Slider;
