import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import FloatingContact from "./components/FloatingContact";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import { Navigate } from "react-router-dom";


function App() {
  const [clients, setClients] = useState([]);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        {/* Client Registration */}
        <Route
          path="/register"
          element={
            <Register
              clients={clients}
              setClients={setClients}
            />
          }
        />

        {/* Client Services Page */}
        <Route
          path="/services"
          element={<Services />}
        />
        <Route path="/contact" element={<Contact />} />

        {/* Admin Login */}
        <Route
          path="/login"
          element={<Login setIsAdminLoggedIn={setIsAdminLoggedIn} />}
        />

        {/* Protected Dashboard */}
        <Route
          path="/admin"
          element={
            isAdminLoggedIn ? (
              <Admin setIsAdminLoggedIn={setIsAdminLoggedIn} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

      </Routes>

      <FloatingContact />
    </Router>
  );
}

export default App;
