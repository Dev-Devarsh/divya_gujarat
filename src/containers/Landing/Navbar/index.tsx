import { useNavigate, Link } from "react-router-dom";
// import { Dropdown, Menu, Row, Col } from "antd";
// import { AiFillCaretDown } from "react-icons/ai";
// import { Logo } from "../../../helper/constant";
// import { AiOutlineMenu } from "react-icons/ai";
// import { NavLink } from "react-router-dom";
import './navbar.css';
// import { Fade as Hamburger } from 'hamburger-react'

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log('jkjbvkjbkjv');
    
    navigate("/cart");
  }

  // const handleToggle = (isToggled: boolean) => {
  //   console.log(`isToggled ${isToggled}`);
  //   if (isToggled) {

  //   } else {

  //   }
  // };
  return (
    <div className="navbar">
      {/* <div className="navbar"> <Hamburger size={22} direction="right" onToggle={handleToggle} /> </div> */}
      <div className="navLink-wrapper">
      {/* <div className= "navLink"> Logo </div> */}
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
      </div>

      <div className="sigin-in-btn" onClick={handleLogin}>
        SIGN IN
      </div>


    </div>

  );
};

export default Navbar;
