import Navbar from "./Navbar/index";
import { useState, useLayoutEffect } from "react";

import Footer from "./Footer/index";
import News from './newsCard/news_card';
import './landing.css';

const Landing = () => {
  const [width, setWindowSize] = useState(window.innerWidth);
  let isMobile: boolean = false;
  if (window.innerWidth <= 600) {
    isMobile = true;
  } else {
    isMobile = false;
  };

  useLayoutEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
      if (window.innerWidth <= 600) {
        isMobile = true;
      } else {
        isMobile = false;
      };
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);
  return (
    <div className="landing-wrapper" >
      <Navbar isMobile={isMobile} />
      <News isMobile={isMobile}width={width} />
      <Footer />
    </div>
  )
}

export default Landing;