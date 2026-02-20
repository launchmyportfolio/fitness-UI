import React from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import "../styles/FloatingContact.css";

const FloatingContact = () => {
  return (
    <div className="floating-contact">

      {/* WhatsApp */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
      >
        <FaWhatsapp />
      </a>

      {/* Instagram */}
      <a
        href="https://instagram.com/yourtrainername"
        target="_blank"
        rel="noopener noreferrer"
        className="instagram-btn"
      >
        <FaInstagram />
      </a>

    </div>
  );
};

export default FloatingContact;
