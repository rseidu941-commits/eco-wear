import "./Products.scss";
import Header from "./components/Header/Header";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import Footer from "./components/Footer/Footer";
function Products() {
  return (
    <main className="products">
     <Header/>
      <ProductGrid />
      <Footer/>
    </main>
  );
}

export default Products;