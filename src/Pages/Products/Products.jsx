import "./Products.scss";
import Header from "../../Components/Header/Header";
import ProductGrid from "../../Components/ProductGrid/ProductGrid";
import Footer from "../../Components/Footer/Footer";
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