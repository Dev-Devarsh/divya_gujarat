import React from "react";
import styled from "styled-components";
import { IoIosNotifications } from "react-icons/io";
import { BiExit } from "react-icons/bi";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";
import { useLazyLogoutQuery } from "../../redux/services/auth";

const HeaderWrapper = styled.div`
  .header {
    float: right;
  }
  .shared-class {
    margin-right: 10px;
  }
`;

const Header = () => {
  const [logout] = useLazyLogoutQuery();

  const logoutHandler = async () => {
    const response = await logout();
  };

  return (
    <HeaderWrapper>
      <div className="header">
        <IconContext.Provider
          value={{ className: "shared-class", size: 45, color: "#03B4C6" }}
        >
          <IoIosNotifications />
        </IconContext.Provider>
        <Link to="/logout">
          <IconContext.Provider
            value={{ className: "shared-class", size: 45, color: "#03B4C6" }}
          >
            <BiExit onClick={logoutHandler} />
          </IconContext.Provider>
        </Link>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
