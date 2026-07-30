import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
import Cart from "../Pages/Cart/Cart";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import CreateProduct from "../Pages/CreateProduct/CreateProduct";
import EditProduct from "../Pages/EditProduct/EditProduct";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/products", element: <Products /> },
      { path: "/products/:id", element: <ProductDetails /> },
      { path: "/cart", element: <Cart /> },
      { path: "/create", element: <CreateProduct /> },
      { path: "/edit/:id", element: <EditProduct /> },
    ],
  },
]);
