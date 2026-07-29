import { useState } from "react";
import "./EditProduct.scss";

import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

function EditProduct() {
  const [name, setName] = useState("Midnight Silk Dress");
  const [category, setCategory] = useState("Dresses");
  const [price, setPrice] = useState("280");
  const [image, setImage] = useState("/images/dress1.jpg");
  const [description, setDescription] = useState(
    "Elegant silk evening dress."
  );

  function handleSubmit(event) {
    event.preventDefault();

    const updatedProduct = {
      id: 1,
      name,
      category,
      price,
      image,
      description,
    };

    console.log(updatedProduct);
  }

  return (
    <main className="edit-product">
      <Header />

      <section className="edit-product__container">
        <h1 className="edit-product__title">
          Edit Product
        </h1>

        <form
          className="edit-product__form"
          onSubmit={handleSubmit}
        >
          <div className="edit-product__group">
            <label className="edit-product__label">
              Product Name
            </label>

            <input
              className="edit-product__input"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </div>

          <div className="edit-product__group">
            <label className="edit-product__label">
              Category
            </label>

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
            <label className="edit-product__label">
              Price (€)
            </label>

            <input
              className="edit-product__input"
              type="number"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
              required
            />
          </div>

          <div className="edit-product__group">
            <label className="edit-product__label">
              Image Path
            </label>

            <input
              className="edit-product__input"
              type="text"
              value={image}
              onChange={(event) => setImage(event.target.value)}
              required
            />

            <p className="edit-product__hint">
              Example: /images/dress1.jpg
            </p>
          </div>

          <div className="edit-product__group">
            <label className="edit-product__label">
              Description
            </label>

            <textarea
              className="edit-product__textarea"
              value={description}
              onChange={(event) =>
                setDescription(event.target.value)
              }
            />
          </div>

          <button
            className="edit-product__button"
            type="submit"
          >
            Save Changes
          </button>
        </form>
      </section>

      <Footer />
    </main>
  );
}

export default EditProduct;