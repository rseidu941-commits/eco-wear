import products from "../../data/products";
import ProductCard from "../ProductCard/ProductCard";
import Button from "../Button/Button";
import "./FeaturedProducts.scss";

function FeaturedProducts() {

  const featuredProducts = products.slice(0, 4);

  return (
    <section className="featured-products">

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

      <Button>
        View All Products
      </Button>

    </section>
  );
}

export default FeaturedProducts;