import "./FeaturedProducts.scss";
import products from "../../data/products";
import ProductCard from "../ProductCard/ProductCard";
import Button from "../Button/Button";

function FeaturedProducts() {
  const featuredProducts = products.slice(0, 4);

  return (
    <section className="featured-products">
      <div className="featured-products__container">

        <h2 className="featured-products__title">
          Featured Products
        </h2>

        <div className="featured-products__grid">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

        <div className="featured-products__button">
          <Button>
            View All Products
          </Button>
        </div>

      </div>
    </section>
  );
}

export default FeaturedProducts;