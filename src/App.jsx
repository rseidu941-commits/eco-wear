import "./App.scss";
import Button from "./Components/Button/Button";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import ProductGrid from "./Components/ProductGrid/ProductGrid"
import WhyChoose from "./Components/WhyChoose/WhyChoose";
import JoinOurCommunity from "./Components/JoinOurCommunity/JoinOurCommunity";
import Footer from "./Components/Footer/Footer";




function App() {
  return (
    <>
      

      <Header />

      <Hero />
       <Button />
      <ProductGrid/>
       
       <WhyChoose/>
       <JoinOurCommunity/>
       <Footer/>
       
    </>
  );
}

export default App;
