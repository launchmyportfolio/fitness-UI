import React from "react";
import "../styles/Background.css";

const Background = ({ blur }) => {
  return (
    <div className="background-container">
      <div className={`background-image ${blur ? "blur" : ""}`} />
      <div className="background-overlay" />
    </div>
  );
};

export default Background;
