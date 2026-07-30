import "./Home.scss";

import Hero from "../../Components/Hero/Hero";
import FeaturedProduct from "../../Components/FeaturedProduct/FeaturedProduct";
import WhyChoose from "../../Components/WhyChoose/WhyChoose";
import JoinOurCommunity from "../../Components/JoinOurCommunity/JoinOurCommunity";

function Home() {
  return (
    <main className="home">
      <Hero />
      <FeaturedProduct />
      <WhyChoose />
      <JoinOurCommunity />
    </main>
  );
}

export default Home;