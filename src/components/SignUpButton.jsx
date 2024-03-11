import React from "react";
import { Link } from "react-router-dom";

const SignUpButton = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      <Link to="/signUp">Sign Up</Link>
    </button>
  );
};

export default SignUpButton;
