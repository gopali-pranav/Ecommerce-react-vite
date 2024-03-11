import React from "react";
import { Link } from "react-router-dom";

const LoginButton = ({ onClick }) => {
  return (
    <button
      className="bg-blue-700 text-white px-5 py-2 rounded"
      onClick={onClick}
    >
      <Link to="/login">Login</Link>
    </button>
  );
};

export default LoginButton;
