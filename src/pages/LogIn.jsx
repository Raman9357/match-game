import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/form.css';
import { saveAs } from "file-saver";

function LogIn() {
    const [loginData, setLoginData] = useState({ email: "", password: "" });
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
        const user = users.find(user => user.email === loginData.email && user.password === loginData.password);
        if (user) {
            alert("Login successful");
        } else {
            alert("Invalid email or password");
        }
    };

    return (
        <div>
            <h2>Log In</h2>
            <form onSubmit={handleLogin}>
                <input type="email" name="email" placeholder="Email" value={loginData.email} onChange={handleChange} />
                <input type="password" name="password" placeholder="Password" value={loginData.password} onChange={handleChange} />
                <button type="submit">Log In</button>
            </form>
            <input type="file" accept="application/json" onChange={handleFileChange} />
        </div>
    );
}

export default LogIn;