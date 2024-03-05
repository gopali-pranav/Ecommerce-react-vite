import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HeaderSearch from "./HeaderSearch";

const Header = () => {
  const [filteredItems, setFilteredItems] = useState([]);

  const handleSearch = (query) => {
    // Perform the search/filter logic here
    const filteredItems = inputSearch.filter((item) => {
      // Convert item title and description to lowercase for case-insensitive comparison
      const title = item.title.toLowerCase();
      const description = item.description.toLowerCase();

      // Check if the search query is present in either the title or description
      return (
        title.includes(query.toLowerCase()) ||
        description.includes(query.toLowerCase())
      );
    });

    // Update the state with the filtered items
    setFilteredItems(filteredItems);
  };

  return (
    <header className="flex justify-between shadow-xl items-center py-5 px-10">
      <div className="logo">
        <img src="/vite.svg" alt="" />
      </div>
      <div className="headerSearch">
        <HeaderSearch onSearch={handleSearch} />
      </div>
      <nav className="space-x-3">
        <Link to="/home">Home</Link>
        <Link to="/product">Product</Link>
        {/* <Link to="/about">About</Link> */}
        <Link to="/service">Service</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <div className="buttons">
        <button className="bg-blue-700 text-white px-5 py-2 rounded">
          Login
        </button>
      </div>

      {/* Render the filtered items */}
      <div className="filtered-items">
        {Array.isArray(filteredItems) ? (
          filteredItems.map((item) => (
            <div key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              {/* Add other item details as needed */}
            </div>
          ))
        ) : (
          <p>No items found.</p>
        )}
      </div>
    </header>
  );
};

export default Header;
