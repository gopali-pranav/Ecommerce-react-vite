import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomePages from "../pages/HomePages";
import ProductDetailPages from "../pages/ProductDetailPages";
import ProductList from "../components/ProductList";
import BlogPages from "../pages/BlogPages";
import ContactPages from "../pages/ContactPages";
import ServicePages from "../pages/ServicePages";
import { Toaster } from "react-hot-toast";
import CartPages from "../pages/CartPages";

const RootLayout = () => {
  return (
    <>
      <Header />
      <Toaster />
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/home" element={<HomePages />} />
        <Route path="/product" element={<ProductList />} />
        <Route path="/blog" element={<BlogPages />} />
        <Route path="/contact" element={<ContactPages />} />
        <Route path="/service" element={<ServicePages />} />
        <Route path="/:id" element={<ProductDetailPages />} />
        <Route path="/cart" element={<CartPages />} />
      </Routes>
      <Footer />
    </>
  );
};

export default RootLayout;
