import Navbar from "./Navbar/index";
import Footer from "./Footer/index";
import News from './newsCard/news_card';
import './landing.css';
import GAds from "../ad/ad";

const index = () => {
  return (
    <div >
      <Navbar />
      <News />
      <Footer />
      {/* <GAds/> */}
    </div>
  )
}

export default index;