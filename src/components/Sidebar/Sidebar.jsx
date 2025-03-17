import React from "react";

const Sidebar = ({ onItemClick }) => {
  return (
    <div className="sidebar">
      <h2>Admin Profile</h2>
      <ul>
        <li onClick={() => onItemClick("Dashboards")}>Dashboard</li>
        <li onClick={() => onItemClick("Employee")}>Employee</li>
        <li onClick={() => onItemClick("Menu")}>Menu</li>
      </ul>
    </div>
  );
};

export default Sidebar;