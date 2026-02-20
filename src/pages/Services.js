import React from "react";
import "../styles/Services.css";

import Background from "../components/Background";

function Services() {
  return (
    <div className="services-page">
    
      <Background blur={true} />
    
      <div className="services-container">

        <h2>Our Services</h2>
    
        <div className="services-grid">
          <div className="service-card">🏋️ Personal Training (1-on-1 Coaching)</div>
          <div className="service-card">💻 Online Training Programs</div>
          <div className="service-card">🤸 Calisthenics Workouts</div>
          <div className="service-card">🥗 Diet Planning & Nutrition Guidance</div>
          <div className="service-card">🔥 Fat Loss Transformation Plans</div>
          <div className="service-card">💪 Muscle Gain Programs</div>
          <div className="service-card">🧠 Lifestyle & Habit Coaching</div>
          <div className="service-card">📋 Customized Workout Plans</div>
        </div>
      </div>
    </div>
  );
}

export default Services;
