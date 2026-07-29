import "./Home.scss";

import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import FeaturedProduct from "../../components/FeaturedProducts/FeaturedProducts";
import WhyChoose from "../../components/WhyChoose/WhyChoose";
import JoinOurCommunity from "../../components/JoinOurCommunity/JoinOurCommunity";
import Footer from "../../components/Footer/Footer";


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