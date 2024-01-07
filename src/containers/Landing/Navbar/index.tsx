import { useNavigate, Link } from "react-router-dom";
import { Dropdown, Menu, Row, Col } from "antd";
// import { AiOutlineMenu } from "react-icons/ai";
// import { NavLink } from "react-router-dom";
// import { Fade as Hamburger } from 'hamburger-react'
import { useState, useLayoutEffect } from "react";
import './navbar.css';
import Hamburger from "hamburger-react";


const Navbar = (props: { isMobile: boolean }) => {
  const [isMenuOpen, setHamburderState] = useState(false);

  const MenuToogleHandler = (isOn: boolean) => {
    setHamburderState(isOn)
  }
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/cart");
  }
  console.log(`nav reloaded ${props.isMobile}`)

  return (

    <div className="navbar">
      <div className="navLink-wrapper">
        {props.isMobile
          ?
          <Hamburger size={25} onToggle={MenuToogleHandler} />
          :
          <>
            <Link className='sigin-in-btn' to='/'>
              LATEST NEWS
            </Link>
            <Link className='sigin-in-btn' to='/india'>
              INDIA
            </Link>
            <Link className='sigin-in-btn' to='/cricket'>
              CRICKET
            </Link>
            <Link className='sigin-in-btn' to='/world  '>
              WORLD
            </Link>
            <Link className='sigin-in-btn' to='/cart'>
              TECHNOLOGY
            </Link>
          </>
        }

      </div>
      {props.isMobile ?
        <div style={{ paddingInline: "20px" }}>Logo</div>
        : <div className="sigin-in-btn" onClick={handleLogin}>
          SIGN IN
        </div>}

    </div>

  );
};

export default Navbar;
