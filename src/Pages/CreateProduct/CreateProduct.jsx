import "./CreateProduct.scss";

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { useProducts } from "../../context/ProductContext";

function CreateProduct() {
  const { products, addProduct } = useProducts();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [category, setCategory] = useState("Dresses");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const newProduct = {
      name,
      category,
      price: Number(price),
      image: image || "/images/midnight-silk-dress.png",
      description,
    };

    addProduct(newProduct);
    navigate("/products");
  }

  return (
    <main className="create-product">
      <section className="create-product__container">
        <h1 className="create-product__title">Create Product</h1>

        <form className="create-product__form" onSubmit={handleSubmit}>
          <div className="create-product__group">
            <label className="create-product__label">Product Name</label>
            <input
              className="create-product__input"
              type="text"
              placeholder="Enter product name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </div>

          <div className="create-product__group">
            <label className="create-product__label">Category</label>
            <select
              className="create-product__input"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
            >
              <option>Dresses</option>
              <option>Jewelry</option>
            </select>
          </div>

          <div className="create-product__group">
            <label className="create-product__label">Price (€)</label>
            <input
              className="create-product__input"
              type="number"
              placeholder="Enter price"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
              required
            />
          </div>

          <div className="create-product__group">
            <label className="create-product__label">Image Path</label>
            <input
              className="create-product__input"
              type="text"
              placeholder="/images/dress1.jpg"
              value={image}
              onChange={(event) => setImage(event.target.value)}
            />
            <p className="create-product__hint">Example: /images/dress1.jpg</p>
          </div>

          <div className="create-product__group">
            <label className="create-product__label">Description</label>
            <textarea
              className="create-product__textarea"
              placeholder="Enter product description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </div>

          <div className="create-product__actions">
            <button type="button" className="create-product__cancel" onClick={() => navigate("/products")}>
              Cancel
            </button>

            <button className="create-product__button" type="submit">
              Create Product
            </button>
          </div>
        </form>
      </section>

      <section className="create-product__existing">
        <div className="create-product__existing-container">
          <h2 className="create-product__subtitle">Existing Products</h2>

          <ul className="create-product__list">
            {products.map((product) => (
              <li key={product.id} className="create-product__item">
                <span className="create-product__item-name">{product.name}</span>
                <Link to={`/edit/${product.id}`} className="create-product__edit-link">
                  Edit
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

export default CreateProduct;
