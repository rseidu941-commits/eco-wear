import { useState } from "react";
import "./ProductGrid.scss";

import products from "../../data/products";

import CategoryFilter from "../CategoryFilter/CategoryFilter";
import SearchBar from "../SearchBar/SearchBar";
import ProductCard from "../ProductCard/ProductCard";

function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState("Products");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "Products" ||
      product.category === selectedCategory;

    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <section className="product-grid">
      <div className="product-grid__container">

        <h2 className="product-grid__title">
          Our Collection
        </h2>

        <div className="product-grid__controls">

          <CategoryFilter
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />

          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />

        </div>

        <div className="product-grid__list">

          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))
          ) : (
            <p className="product-grid__empty">
              No products found.
            </p>
          )}

        </div>

      </div>
    </section>
  );
}

export default ProductGrid;