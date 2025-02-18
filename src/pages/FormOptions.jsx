import React from "react";
import { useNavigate } from "react-router-dom";
import './css/form-options.css';

function FormOptions() {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/signup");
  };

  const handleLogIn = () => {
    navigate("/login");
  };

  return (
    <div className="form-options-container">
      <h2>Welcome! Please choose an option:</h2>
      <button className="form-options-button" onClick={handleSignUp}>
        Sign Up
      </button>
      <button className="form-options-button" onClick={handleLogIn}>
        Log In
      </button>
    </div>
  );
}

export default FormOptions;