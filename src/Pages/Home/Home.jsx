import "./Home.scss";

import Header from "../../Components/Header/Header";
import Hero from "../../Components/Hero/Hero";
import FeaturedProduct from "../../Components/FeaturedProduct/FeaturedProduct";
import WhyChoose from "../../Components/WhyChoose/WhyChoose";
import JoinOurCommunity from "../../Components/JoinOurCommunity/JoinOurCommunity";
import Footer from "../../Components/Footer/Footer";


function Home() {
  return (
    <main className="home">
      <Header/>
      <Hero/>
      <FeaturedProduct/>
      <WhyChoose/>
      <JoinOurCommunity/>
      <Footer/>
      </main>
  )
}

export default Home;