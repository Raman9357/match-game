import React, { useState } from 'react';
import './css/form.css';

function LogIn() {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [formErrors, setFormErrors] = useState({});
  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = JSON.parse(e.target.result);
      setUsers([data]);
    };
    reader.readAsText(file);
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
      const user = users.find(user => user.email === loginData.email && user.password === loginData.password);
      if (user) {
        alert("Login successful");
      } else {
        alert("Invalid email or password");
      }
    }
  };

  return (
    <div className="form-container">
      <h2>Log In</h2>
      <form onSubmit={handleLogin}>
        <label>
          *Email:
          <input type="email" name="email" placeholder="Email" value={loginData.email} onChange={handleChange} className={formErrors.email ? "error" : ""} />
          {formErrors.email && <span className="error-message">{formErrors.email}</span>}
        </label>

        <label>
          *Password:
          <input type="password" name="password" placeholder="Password" value={loginData.password} onChange={handleChange} className={formErrors.password ? "error" : ""} />
          {formErrors.password && <span className="error-message">{formErrors.password}</span>}
        </label>

        <button type="submit" className="submit-button"> Log In </button>
      </form>
    </div>
  );
}

export default LogIn;