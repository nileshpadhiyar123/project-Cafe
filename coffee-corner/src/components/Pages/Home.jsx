import React from "react";
import '../Pages/Home.css'
import menu from '../../assets/images/menuicon.png'
import track from '../../assets/images/trackorder.png'
import reserv from '../../assets/images/reservation.png'
import  Link  from 'react-router-dom'
function Home() {
  return (
    <div>
      <h1>Welcome to Coffee Corner</h1>
      <p>Your one-stop shop for the best coffee in town!</p>
    
    <section className="features">
        <h2>What We Offer</h2>

         <div className="feature-container">
          <Link to="/addmenu" className="feature-box"> {/* Make entire box clickable */}
            <img src={menu} alt="Menu Icon" />
            <h3>Manage Menu</h3>
            <p>Easily update, add, and manage your café menu items.</p>
          </Link>

          <div className="feature-box">
            <img src={track} alt="Orders Icon" />
            <h3>Track Orders</h3>
            <p>Handle customer orders smoothly and efficiently.</p>
          </div>

          <div className="feature-box">
            <img src={reserv} alt="Reservations Icon" />
            <h3>Reservations</h3>
            <p>Manage table bookings and customer reservations.</p>
          </div>
        </div>

      </section>
      
      </div>
  );
}
export default Home;