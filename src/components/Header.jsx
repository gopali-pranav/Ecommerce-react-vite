import React from "react";
import { Link } from "react-router-dom";
import HeaderSearch from "./HeaderSearch";
import CartButton from "./CartButton";
import LoginButton from "./LoginButton";
import DarkMode from "./DarkMode";

const Header = () => {
  return (
    <header className="flex flex-wrap justify-between items-center py-5 px-5 sm:px-10 shadow-xl dark:bg-slate-900 dark:text-white">
      <div className="flex justify-start items-center w-full sm:w-auto mb-3 sm:mb-0">
        <div className="logo">
          <img src="/vite.svg" alt="Logo" className="h-10" />
        </div>
      </div>
      <div className="flex-grow sm:flex-grow-0 w-full sm:w-auto mb-3 sm:mb-0">
        <div className="headerSearch">
          <HeaderSearch />
        </div>
      </div>
      <nav className="flex-grow sm:flex-grow-0 w-full sm:w-auto mb-3 sm:mb-0">
        <ul className="flex justify-center sm:justify-end space-x-3">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
          <li>
            <Link to="/order">Orders</Link>
          </li>
          <li>
            <Link to="/service">Service</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="mb-3 sm:mb-0">
        <DarkMode />
      </div>
      <div className="flex-grow sm:flex-grow-0 w-full sm:w-auto mb-3 sm:mb-0">
        <CartButton />
      </div>
      <div className="flex-grow sm:flex-grow-0 w-full sm:w-auto">
        <div className="buttons">
          <LoginButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
