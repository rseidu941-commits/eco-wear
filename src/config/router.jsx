import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Products from "../Pages/Products/Products";
import Home from "../Pages/Home/Home";
import Cart from "../Pages/Cart/Cart";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import CreateProduct from "../Pages/CreateProduct/CreateProduct";
import EditProduct from "../Pages/EditProduct/EditProduct";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/products/:id",
    element: <ProductDetails />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/create",
    element: <CreateProduct />,
  },
  {
    path: "/edit/:id",
    element: <EditProduct />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);