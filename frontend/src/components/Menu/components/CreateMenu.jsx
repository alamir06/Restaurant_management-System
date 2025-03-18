import React, { useState } from "react";

const CreateMenu = ({ onSubmit, initialData, onCancel }) => {
  const [menuItem, setMenuItem] = useState(
    initialData || { id: "", food_name: "", Food_Type: "", Food_Description: "", price: "" }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMenuItem((preValue)=>{
      return{
        ...preValue,
        [name]:value
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(menuItem);
    resetForm(); 
  };
  const resetForm = () => {
    setMenuItem({ id: "", food_name: "", Food_Type: "", Food_Description: "", price: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="menu-form">
      <h2>{initialData ? "Edit Menu Item" : "Add Menu Item"}</h2>
      <div className="menu_add">
        <div className="left">
          <div>
            <label>Food Name:</label>
            <input
              type="text"
              name="food_name"
              value={menuItem.food_name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Food Type:</label>
            <input
              type="text"
              name="Food_Type"
              value={menuItem.Food_Type}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="right">
          <div>
            <label>Food Description:</label>
            <textarea
              name="Food_Description"
              value={menuItem.Food_Description}
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
        </div>
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