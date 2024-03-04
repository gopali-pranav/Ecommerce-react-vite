import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="p-10 bg-gray-800 text-white flex justify-center">
      <div className="foot flex justify-center items-start space-x-20">
        <div className="links">
          <h3>Get to Know Us</h3>
          <ul className="flex flex-col gap-2 my-5">
            <Link to="/about">Careers</Link>
            <Link to="/about">Blog</Link>
            <Link to="/about">About</Link>
            <Link to="/about">Investor Relations</Link>
          </ul>
        </div>
        <div className="links">
          <h3>Make Money with Us</h3>
          <ul className="flex flex-col gap-2 my-5">
            <Link to="/about">Sell products</Link>
            <Link to="/about">Sell on Amazon BUsiness</Link>
            <Link to="/about">Sell apps on Amazon</Link>
            <Link to="/about">Become an Affiliate</Link>
          </ul>
        </div>
        <div className="links">
          <h3>Amazon Payment Products</h3>
          <ul className="flex flex-col gap-2 my-5">
            <Link to="/about">Amazon Business Card</Link>
            <Link to="/about">Shop with Points</Link>
            <Link to="/about">Reload Your Balance</Link>
          </ul>
        </div>
        <div className="links">
          <h3>Let Us Help You</h3>
          <ul className="flex flex-col gap-2 my-5">
            <Link to="/about">Amazon and COVID-19</Link>
            <Link to="/about">Your Account</Link>
            <Link to="/about">Your Orders</Link>
            <Link to="/about">Shipping Rates & Policies</Link>
            <Link to="/about">Return & Replacements</Link>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
