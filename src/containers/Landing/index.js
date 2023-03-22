import React from 'react';
import Navbar from "./Navbar/index";
import Footer from "./Footer/index";
import Loader from '../spinner/spinner';
import News from './newsCard/news_card';

const index = () => {
  return (
    <div className="">
      <Navbar />
      {/* <Loader /> */}
      <News />
      <Footer />
    </div>
  )
}

export default index;