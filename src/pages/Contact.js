import React from "react";
import "../styles/contacts.css";

import Background from "../components/Background";
function Contact() {
  return (
    <div className="contact-page">
        <Background blur={true} />
      <div className="contact-card">
        <h2>Contact Us</h2>

        <div className="contact-item">
          <strong>Trainer:</strong> Yathish Fitness
        </div>

        <div className="contact-item">
          <strong>Phone:</strong> +91 9876543210
        </div>

        <div className="contact-item">
          <strong>Email:</strong> yathishfitness@gmail.com
        </div>

        <div className="contact-item">
          <strong>Location:</strong> Hyderabad, Telangana, India
        </div>

        <div className="contact-item">
          <strong>Address:</strong> 2nd Floor, Fitness Hub Gym, Madhapur, Hyderabad
        </div>

        <div className="contact-highlight">
          📲 Available for Online & Offline Training Sessions
        </div>
      </div>
    </div>
  );
}

export default Contact;
