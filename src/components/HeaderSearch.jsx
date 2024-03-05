import React, { useEffect } from "react";
import { useState } from "react";

import axios from "axios";

const HeaderSearch = () => {
  return (
    <div className="flex items-center">
      <input
        type="text"
        placeholder="Search"
        className="border-2 w-80 h-8 rounded-md p-2 hover:border-blue-700 border-gray-500"
      />
      <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">
        Search
      </button>
    </div>
  );
};

export default HeaderSearch;
