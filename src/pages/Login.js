import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/adminLogin.css";

import Background from "../components/Background";

function Admin({ setIsAdminLoggedIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username.trim() === "Yathish @123" && password === "password") {
      alert("Login Successful ✅");
      setIsAdminLoggedIn(true);
      navigate("/admin");
    } else {
      alert("Invalid Credentials ❌");
    }
  };

  return (
    <div className="admin-login-page">
        <Background blur={true} />
      <div className="admin-login-card">
        <h2>Admin Login</h2>

        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Admin;
