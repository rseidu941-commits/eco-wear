import { createBrowserRouter } from "react-router-dom";
import App from  "../App";
import Products from "../Pages/products/Products";
import Home from "../Pages/Home/Home";

export const router =  createBrowserRouter([
    {
        path:'/',
        element: <App/>
    },
    {
        path: '/products',
        element: <Products/>
    },

    {
        path: '/Home',
        element: <Home/>
    },

    {
    },
    
    
    
])