import React, { useState } from "react";
import CreateMenu from "./CreateMenu";

const ManageMenu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [editingMenuItem, setEditingMenuItem] = useState(null);

  const addMenuItem = (menuItem) => {
    if (menuItem.id) {
      // Update existing menu item
      setMenuItems(
        menuItems.map((item) => (item.id === menuItem.id ? menuItem : item))
      );
    } else {
      // Add new menu item
      setMenuItems([...menuItems, { ...menuItem, id: Date.now() }]);
    }
    setEditingMenuItem(null);
  };

  const deleteMenuItem = (id) => {
    setMenuItems(menuItems.filter((item) => item.id !== id));
  };

  const editMenuItem = (menuItem) => {
    setEditingMenuItem(menuItem);
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
          <div>Food_Name</div>
          <div>Food_Type</div>
          <div>Food_Description</div>
          <div>Price</div>
          <div>Actions</div>
        </div>
        {menuItems.map((menuItem) => (
          <div key={menuItem.id} className="grid-row">
            <div>{menuItem.food_name}</div>
            <div>{menuItem.Food_Type}</div>
            <div>{menuItem.Food_Description}</div>
            <div>${menuItem.price}</div>
            <div>
              <button onClick={() => editMenuItem(menuItem)}>Edit</button>
              <button onClick={() => deleteMenuItem(menuItem.id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageMenu;