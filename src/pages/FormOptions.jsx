import React from "react";
import { useNavigate } from "react-router-dom";
import './css/form.css';

function FormOptions() {
  const navigate = useNavigate();

  const handleSignUp = () => navigate("/signup");
  const handleLogIn = () => navigate("/login");

  return (
    <div className="form-container">
      <h2>Welcome! Please choose an option:</h2>
      <div className="button-group">
        <button className="form-options-button" onClick={handleSignUp}>
          Sign Up
        </button>
        <button className="form-options-button" onClick={handleLogIn}>
          Log In
        </button>
      </div>
    </div>
  );
}

export default FormOptions;