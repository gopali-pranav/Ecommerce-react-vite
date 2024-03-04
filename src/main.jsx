import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutPages from "./pages/AboutPages.jsx";
import ContactPages from "./pages/ContactPages.jsx";
import BlogPages from "./pages/BlogPages.jsx";
import HomePages from "./pages/HomePages.jsx";
import ServicePages from "./pages/ServicePages.jsx";
import RootLayout from "./layout/RootLayout.jsx";
import ProductPages from "./pages/ProductPages.jsx";
import ProductDetailPages from "./pages/ProductDetailPages.jsx";

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
        path: "/about",
        element: <AboutPages />,
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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={myRouter} />
  </React.StrictMode>
);
