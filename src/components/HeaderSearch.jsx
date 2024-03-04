import React, { useEffect } from "react";
import { useState } from "react";

import axios from "axios";

const HeaderSearch = ({ searchQuery }) => {
  const [inputSearch, setSearchInput] = useState();

  async function getSearchInput() {
    let response = await axios.get(
      `https://dummyjson.com/products/search?q=${searchQuery}`
    );
    setSearchInput(response.data);
  }

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearchClick = () => {
    // Trigger the search callback when the button is clicked
    setSearchInput(searchQuery);
  };

  useEffect(() => {
    getSearchInput();
  }, [searchQuery]);

  return (
    <div className="flex items-center">
      <input
        type="text"
        value={inputSearch}
        placeholder="Search"
        onChange={handleInputChange}
        className="border-2 w-80 h-8 rounded-md p-2 hover:border-blue-700 border-gray-500"
      />
      <button
        className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
        onClick={handleSearchClick}
      >
        Search
      </button>
    </div>
  );
};

export default HeaderSearch;
