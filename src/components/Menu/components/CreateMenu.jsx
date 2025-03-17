import React, { useState } from "react";

const CreateMenu = ({ onSubmit, initialData, onCancel }) => {
  const [menuItem, setMenuItem] = useState(
    initialData || { id: "", name: "", description: "", price: "" }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMenuItem({ ...menuItem, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(menuItem);
  };

  return (
    <form onSubmit={handleSubmit} className="menu-form">
      <h2>{initialData ? "Edit Menu Item" : "Add Menu Item"}</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={menuItem.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          name="description"
          value={menuItem.description}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Price:</label>
        <input
          type="number"
          name="price"
          value={menuItem.price}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">{initialData ? "Update" : "Add"}</button>
      {initialData && (
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      )}
    </form>
  );
};

export default CreateMenu;