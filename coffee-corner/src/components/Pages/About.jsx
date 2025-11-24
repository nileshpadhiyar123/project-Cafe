import React from "react";
import '../Pages/About.css'

function About() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Welcome to Coffee Corner ☕</h1>
        <p>Your perfect place to relax, sip, and enjoy delicious brews.</p>

        <a href="/about" className="home-btn">
          Explore More
        </a>
      </div>
    </div>
  );
}

export default About;
