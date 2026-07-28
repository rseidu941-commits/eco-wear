 
import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import products from "../../data/products"; 
import "./ProductGrid.scss";

function ProductGrid() {
  return (
    <section className="product-grid">
      <div className="product-grid__container">
        <h2 className="product-grid__title">Our Collection</h2>
        
        <div className="product-grid__list">
          {products.map((item) => (
           
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductGrid;