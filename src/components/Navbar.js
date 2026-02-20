import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="brand">YATHISH FITNESS</div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/Services">Services</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/register">Join</Link>
        <Link to="/login">Admin</Link>
      </div>
    </nav>
  );
}

export default Navbar;
