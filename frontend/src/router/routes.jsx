import { Children } from "react";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
// import Products from "../pages/Products";
// import ProductDetails from "../pages/ProductDetails";
// import Cart from "../pages/Cart";
import Error from "../pages/Error";

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      //   {
      //     path: "products",
      //     element: <Products />,
      //   },
      //   {
      //     path: "products/:id",
      //     element: <ProductDetails />,
      //   },
      //   {
      //     path: "cart",
      //     element: <Cart />,
      //   },
    ],
  },
];

export default routes;
