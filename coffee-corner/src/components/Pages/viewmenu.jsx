import React, { useEffect, useState } from "react";
import '../Pages/viewmenu.css'

const ViewMenu = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("menuItems")) || [];
    setMenuItems(saved);
  }, []);

  return (
    <div className="view-menu-container">
      <h2>Our Café Menu</h2>

      {menuItems.length === 0 ? (
        <p className="empty-text">No menu items added yet.</p>
      ) : (
        <div className="menu-grid">
          {menuItems.map((item, index) => (
            <div className="menu-card" key={index}>
              <img src={item.image} alt={item.name} className="menu-image" />
              <h3>{item.name}</h3>
              <p className="price">${item.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ViewMenu;
