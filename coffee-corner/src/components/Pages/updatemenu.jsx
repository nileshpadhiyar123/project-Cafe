import React, { useState, useEffect } from "react";
import '../Pages/updatemenu.css'

const Updatemenu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const [editedName, setEditedName] = useState("");
  const [editedPrice, setEditedPrice] = useState("");
  const [editedImage, setEditedImage] = useState("");

  // Load items
  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem("menuItems")) || [];
    setMenuItems(savedItems);
  }, []);

  // Open edit modal
  const handleEditClick = (item, index) => {
    setSelectedItem(index);
    setEditedName(item.name);
    setEditedPrice(item.price);
    setEditedImage(item.image);
  };

  // Image change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setEditedImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  // Save updates
  const handleUpdate = () => {
    const updatedList = [...menuItems];
    updatedList[selectedItem] = {
      name: editedName,
      price: editedPrice,
      image: editedImage,
    };

    setMenuItems(updatedList);
    localStorage.setItem("menuItems", JSON.stringify(updatedList));
    setSelectedItem(null);
  };

  // Delete
  const handleDelete = (index) => {
    const updated = menuItems.filter((_, i) => i !== index);
    setMenuItems(updated);
    localStorage.setItem("menuItems", JSON.stringify(updated));
  };

  return (
    <div className="update-menu-container">
      <h2>Update Menu Items</h2>

      {/* MENU DISPLAY */}
      <div className="menu-list">
        {menuItems.map((item, i) => (
          <div className="menu-card" key={i}>
            <img src={item.image} alt={item.name} className="menu-img" />
            <h3>{item.name}</h3>
            <p>${item.price}</p>

            <button className="edit-btn" onClick={() => handleEditClick(item, i)}>
              Edit
            </button>
            <button className="delete-btn" onClick={() => handleDelete(i)}>
              Delete
            </button>
          </div>
        ))}
      </div>

      {/* EDIT MODAL */}
      {selectedItem !== null && (
        <div className="edit-modal">
          <div className="modal-box">
            <h3>Edit Menu Item</h3>

            <input
              type="text"
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
              placeholder="Item Name"
            />

            <input
              type="number"
              value={editedPrice}
              onChange={(e) => setEditedPrice(e.target.value)}
              placeholder="Price"
            />

            <input type="file" accept="image/*" onChange={handleImageChange} />

            {editedImage && (
              <img src={editedImage} alt="preview" className="preview-img" />
            )}

            <div className="modal-actions">
              <button className="save-btn" onClick={handleUpdate}>Save</button>
              <button className="cancel-btn" onClick={() => setSelectedItem(null)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Updatemenu;
