import React, { useState } from "react";
import { setSearchQuery } from "../redux/searchQuerySlice";
import { useDispatch } from "react-redux";

const HeaderSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(setSearchQuery(searchTerm)); // Dispatch action to set search query
    setSearchTerm(""); // Clear the search term after submitting the form
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(); // Dispatch search query when the form is submitted
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
        className="border-2 w-full sm:w-80 h-8 rounded-md p-2 hover:border-blue-700 border-gray-500"
        // Adjust width for small screens (w-full) and larger screens (sm:w-80)
      />
      <button
        type="submit"
        className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
      >
        Search
      </button>
    </form>
  );
};

export default HeaderSearch;
