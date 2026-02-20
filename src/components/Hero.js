import React from "react";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <div className="hero-container">
      <video autoPlay loop muted className="bg-video">
        <source src="/gym-video.mp4" type="video/mp4" />
      </video>

      <div className="hero-content">
        <h1>Train Like A Champion</h1>
        <p>"Luxury Fitness Designed For Winners"</p>
        <button onClick={() => navigate("/register")} className="gold-btn">
          Start Now
        </button>
      </div>
    </div>
  );
}

export default Hero;
