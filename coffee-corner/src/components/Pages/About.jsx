import React from "react";
 // Create this CSS file

function Home() {
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

export default Home;
