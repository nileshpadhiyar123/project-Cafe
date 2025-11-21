import React from "react";
import '../layout/Footer1.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Coffee Corner</h3>
        <p>© 2025 Coffee Corner. All rights reserved.</p>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            Facebook
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
