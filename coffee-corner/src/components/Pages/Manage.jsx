import React from "react";
import { Link } from "react-router-dom";
import '../Pages/Manage.css'
const Manage = () => {
  return (
  <section className="features">
        <h2>What We Offer</h2>

         <div className="feature-container">
          <Link to="/addmenu" className="feature-box"> {/* Make entire box clickable */}
            
            <h3>Add Menu</h3>
            
          </Link>

          <div className="feature-box">
           <Link to="/updatemenu">
            <h3>Update Menu</h3>
            
            </Link>
          </div>

          <div className="feature-box">
           <Link to="/viewmenu">
            <h3>View Menu</h3>
            
            </Link>
          </div>
          
        </div>

      </section>
  );
};
export default Manage;