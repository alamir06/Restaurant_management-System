import React, { useState, useEffect } from "react";
import CreateMenu from "./CreateMenu";

const ManageMenu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [editingMenuItem, setEditingMenuItem] = useState(null);

  // Fetch menu items from the backend
  useEffect(() => {
    fetchMenuItems();
  }, []);

  const fetchMenuItems = async () => {
    try {
      const response = await fetch("http://localhost:4000/menu");
      const data = await response.json();
      setMenuItems(data);
    } catch (error) {
      console.error("Error fetching menu items:", error);
    }
  };

  const addMenuItem = async (menuItem) => {
    try {
      const url = menuItem.id
        ? `http://localhost:4000/menu/${menuItem.id}`
        : "http://localhost:4000/menu";
      const method = menuItem.id ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(menuItem),
      });
      const data = await response.json();
      fetchMenuItems(); // Refresh the list
      setEditingMenuItem(null);
    } catch (error) {
      console.error("Error adding/updating menu item:", error);
    }
  };

  const deleteMenuItem = async (id) => {
    try {
      await fetch(`http://localhost:4000/menu/${id}`, { method: "DELETE" });
      fetchMenuItems(); // Refresh the list
    } catch (error) {
      console.error("Error deleting menu item:", error);
    }
  };

  return (
    <div className="menu-list">
      <h1>Restaurant Menu Management</h1>
      <CreateMenu
        onSubmit={addMenuItem}
        initialData={editingMenuItem}
        onCancel={() => setEditingMenuItem(null)}
      />
      <div className="menu-grid">
        <div className="grid-header">
          <div>Food Name</div>
          <div>Food Type</div>
          <div>Food Description</div>
          <div>Price</div>
          <div>Actions</div>
        </div>
        {menuItems.map((menuItem) => (
          <div key={menuItem.id} className="grid-row">
            <div>{menuItem.food_name}</div>
            <div>{menuItem.food_type}</div>
            <div>{menuItem.food_description}</div>
            <div>${menuItem.price}</div>
            <div>
              <button onClick={() => setEditingMenuItem(menuItem)}>Edit</button>
              <button onClick={() => deleteMenuItem(menuItem.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageMenu;