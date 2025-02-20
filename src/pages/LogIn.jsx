import React, { useState } from 'react';
import './css/form.css';
import Header from "../components/header";
import Footer from "../components/footer";

function LogIn() {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [formErrors, setFormErrors] = useState({});
  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const errors = {};

    if (!loginData.email) {
      errors.email = "*Email is required.";
    }

    if (!loginData.password) {
      errors.password = "*Password is required.";
    }

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      const user = users.find(
        (user) => user.email === loginData.email && user.password === loginData.password
      );
      if (user) {
        alert("Login successful");
      } else {
        alert("Invalid email or password");
      }
    }
  };

  return (
    <div className="form-wrapper">
      <Header />
      <div className="login-container">
        <div className="login-form-section">
          <form onSubmit={handleLogin}>
            <h2>Login to your account</h2>
            <label>
              *Email
              <input
                type="email"
                name="email"
                placeholder="Type Your Email Address"
                value={loginData.email}
                onChange={handleChange}
                className={formErrors.email ? "error" : ""}
                maxLength="25"
              />
              {formErrors.email && <span className="error-message">{formErrors.email}</span>}
            </label>

            <label>
              *Password
              <input
                type="password"
                name="password"
                placeholder="Type Your Password"
                value={loginData.password}
                onChange={handleChange}
                className={formErrors.password ? "error" : ""}
                maxLength="25"
              />
              {formErrors.password && <span className="error-message">{formErrors.password}</span>}
            </label>

            <button type="submit" className="submit-button">Login</button>
          </form>
        </div>
        <div className="signup-section">
          <h2>New Here?</h2>
          <p>Create an account to unlock new possibilities!</p>
          <button className="signup-button">Sign Up</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LogIn;