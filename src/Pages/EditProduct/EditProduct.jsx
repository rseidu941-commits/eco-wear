import "./EditProduct.scss";

import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { useProducts } from "../../context/ProductContext";

function EditProduct() {
  const { products, updateProduct, deleteProduct } = useProducts();
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((item) => item.id === Number(id));

  const [name, setName] = useState(product ? product.name : "");
  const [category, setCategory] = useState(product ? product.category : "Dresses");
  const [price, setPrice] = useState(product ? String(product.price) : "");
  const [image, setImage] = useState(product ? product.image : "");
  const [description, setDescription] = useState(product ? product.description : "");

  function handleSubmit(event) {
    event.preventDefault();

    const updatedProduct = {
      name,
      category,
      price: Number(price),
      image,
      description,
    };

    updateProduct(id, updatedProduct);
    navigate("/products");
  }

  if (!product) {
    return (
      <main className="edit-product">
        <section className="edit-product__container">
          <h1 className="edit-product__title">Product Not Found</h1>
          <p>The product you are trying to edit does not exist.</p>
        </section>
      </main>
    );
  }

  return (
    <main className="edit-product">
      <section className="edit-product__container">
        <h1 className="edit-product__title">Edit Product</h1>

        <form className="edit-product__form" onSubmit={handleSubmit}>
          <div className="edit-product__group">
            <label className="edit-product__label">Product Name</label>
            <input
              className="edit-product__input"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </div>

          <div className="edit-product__group">
            <label className="edit-product__label">Category</label>
            <select
              className="edit-product__input"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
            >
              <option>Dresses</option>
              <option>Jewelry</option>
            </select>
          </div>

          <div className="edit-product__group">
            <label className="edit-product__label">Price (€)</label>
            <input
              className="edit-product__input"
              type="number"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
              required
            />
          </div>

          <div className="edit-product__group">
            <label className="edit-product__label">Image Path</label>
            <input
              className="edit-product__input"
              type="text"
              value={image}
              onChange={(event) => setImage(event.target.value)}
              required
            />
            <p className="edit-product__hint">Example: /images/dress1.jpg</p>
          </div>

          <div className="edit-product__group">
            <label className="edit-product__label">Description</label>
            <textarea
              className="edit-product__textarea"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </div>

          <button className="edit-product__button" type="submit">
            Save Changes
          </button>

          <button
            type="button"
            className="edit-product__delete-btn"
            onClick={() => {
              if (window.confirm("Are you sure you want to delete this product?")) {
                deleteProduct(id);
                navigate("/products");
              }
            }}
          >
            Delete Product
          </button>
        </form>
      </section>
    </main>
  );
}

export default EditProduct;
