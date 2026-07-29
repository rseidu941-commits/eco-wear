import { createBrowserRouter } from "react-router-dom";
import App from  "../App";
import Product from "../Pages/products/Product";
export const router =  createBrowserRouter([
    {
        path:'/',
        element: <App/>
    },

    {
        path: "products",
        element: <Products/>
    },
    
    {
        path: "Home",
        element:<Home/>
    }
])