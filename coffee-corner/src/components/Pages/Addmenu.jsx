import React, { useState, useEffect } from "react";
import '../Pages/AddMenu.css';

const AddMenu = () => {
  const [itemName, setItemName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(""); // store base64 image
  const [menuItems, setMenuItems] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null); // track editing

  // Load saved menu from localStorage
  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem("menuItems")) || [];
    setMenuItems(savedItems);
  }, []);

  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result); // base64 string
    };
    reader.readAsDataURL(file);
  };

  // Add or Update item
  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { name: itemName, price, image };

    let updatedMenu = [...menuItems];
    if (editingIndex !== null) {
      // Update existing item
      updatedMenu[editingIndex] = newItem;
      setEditingIndex(null);
    } else {
      // Add new item
      updatedMenu.push(newItem);
    }

    setMenuItems(updatedMenu);
    localStorage.setItem("menuItems", JSON.stringify(updatedMenu));

    // Reset form
    setItemName("");
    setPrice("");
    setImage("");
  };

  // Edit item
  const handleEdit = (index) => {
    const item = menuItems[index];
    setEditingIndex(index);
    setItemName(item.name);
    setPrice(item.price);
    setImage(item.image);
  };

  // Delete item
  const handleDelete = (index) => {
    const updatedMenu = menuItems.filter((_, i) => i !== index);
    setMenuItems(updatedMenu);
    localStorage.setItem("menuItems", JSON.stringify(updatedMenu));
  };

  return (
    <div className="add-menu-container">
      <h2>{editingIndex !== null ? "Update Menu Item" : "Add Menu Item"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Item Name"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Price ($)"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <button type="submit">{editingIndex !== null ? "Update Item" : "Add Item"}</button>
      </form>

      <h3>Menu List</h3>
      <ul>
        {menuItems.map((item, i) => (
          <li key={i}>
            {item.image && <img src={item.image} alt={item.name} width="100" />} <br />
            <strong>{item.name}</strong> - ${item.price} <br />
            <button onClick={() => handleEdit(i)}>Edit</button>
            <button onClick={() => handleDelete(i)} style={{marginLeft: '10px', background: 'red', color: 'white'}}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddMenu;
