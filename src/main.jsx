import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContactPages from "./pages/ContactPages.jsx";
import BlogPages from "./pages/BlogPages.jsx";
import HomePages from "./pages/HomePages.jsx";
import ServicePages from "./pages/ServicePages.jsx";
import RootLayout from "./layout/RootLayout.jsx";
import ProductPages from "./pages/ProductPages.jsx";
import ProductDetailPages from "./pages/ProductDetailPages.jsx";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";
import CartPages from "./pages/CartPages.jsx";
import LoginPages from "./pages/LoginPages.jsx";
import SignUpPages from "./pages/SignUpPages.jsx";
import OrdersPages from "./pages/OrdersPages.jsx";

const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/home",
        element: <HomePages />,
      },
      {
        path: "/product",
        element: <ProductPages />,
      },
      {
        path: "/service",
        element: <ServicePages />,
      },
      {
        path: "/blog",
        element: <BlogPages />,
      },
      {
        path: "/contact",
        element: <ContactPages />,
      },
      {
        path: "/:id",
        element: <ProductDetailPages />,
      },
      {
        path: "/cart",
        element: <CartPages />,
      },
      {
        path: "/order",
        element: <OrdersPages />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPages />,
  },
  {
    path: "/signUp",
    element: <SignUpPages />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={myRouter} />
    </Provider>
  </React.StrictMode>
);
