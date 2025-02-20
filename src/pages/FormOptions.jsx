import React from "react";
import { useNavigate } from "react-router-dom";
import './css/form.css';
import Header from "../components/header";
import Footer from "../components/footer";

function FormOptions() {
  const navigate = useNavigate();

  const handleSignUp = () => navigate("/signup");
  const handleLogIn = () => navigate("/login");

  return (
    <div className="form-container">
      <Header />
      <h2>Welcome! Please choose an option:</h2>
      <div className="button-group">
        <button className="form-options-button" onClick={handleSignUp}>
          Sign Up
        </button>
        <button className="form-options-button" onClick={handleLogIn}>
          Log In
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default FormOptions;