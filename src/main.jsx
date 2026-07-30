import { StrictMode } from "react";

import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { router } from "./config/router.jsx";
import { CartProvider } from "./context/CartContext";
import { ProductProvider } from "./context/ProductContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProductProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </ProductProvider>
  </StrictMode>,
);
