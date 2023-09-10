import Navbar from "./Navbar/index";
import Footer from "./Footer/index";
import News from './newsCard/news_card';
import './landing.css';

const Landing = () => {
  return (
    <div >
      <Navbar />
      <News />
      <Footer />
    </div>
  )
}

export default Landing;