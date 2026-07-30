import { useState } from "react";
import { useLocation } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import SearchBar from "../SearchBar/SearchBar";
import { useProducts } from "../../context/ProductContext";
import "./ProductGrid.scss";

function ProductGrid() {
  const { products } = useProducts();
  const location = useLocation();
  const initialCategory = location.state?.category || "PRODUCTS";
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((item) => {
    const matchesCategory =
      selectedCategory === "PRODUCTS" || item.category === selectedCategory;
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <section className="product-grid">
      <div className="product-grid__container">
        <div className="product-grid__header">
          <h2 className="product-grid__title">Our Collection</h2>

          <div className="product-grid__controls">
            <nav className="product-grid__nav">
              <button
                type="button"
                className={`product-grid__nav-btn ${
                  selectedCategory === "PRODUCTS"
                    ? "product-grid__nav-btn--active"
                    : ""
                }`}
                onClick={() => setSelectedCategory("PRODUCTS")}
              >
                 PRODUCTS
              </button>
              <button
                type="button"
                className={`product-grid__nav-btn ${
                  selectedCategory === "Dresses"
                    ? "product-grid__nav-btn--active"
                    : ""
                }`}
                onClick={() => setSelectedCategory("Dresses")}
              >
                DRESSES
              </button>
              <button
                type="button"
                className={`product-grid__nav-btn ${
                  selectedCategory === "Jewelry"
                    ? "product-grid__nav-btn--active"
                    : ""
                }`}
                onClick={() => setSelectedCategory("Jewelry")}
              >
                JEWELRY
              </button>
            </nav>

            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </div>
        </div>

        <div className="product-grid__list">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))
          ) : (
            <p className="product-grid__empty">
              No products matched your search.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
export default ProductGrid;
