import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HeaderSearch from "./HeaderSearch";
import CartButton from "./CartButton";

const Header = () => {
  return (
    <header className="flex justify-between shadow-xl items-center py-5 px-10">
      <div className="logo">
        <img src="/vite.svg" alt="" />
      </div>
      <div className="headerSearch">
        <HeaderSearch />
      </div>
      <nav className="space-x-3">
        <Link to="/home">Home</Link>
        <Link to="/product">Product</Link>
        <Link to="/service">Service</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <CartButton />
      <div className="buttons">
        <button className="bg-blue-700 text-white px-5 py-2 rounded">
          Login
        </button>
      </div>
    </header>
  );
};

export default Header;
