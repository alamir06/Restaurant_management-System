import React from "react";
import pimage from "../../assets/image/p1.jfif";
const Sidebar = ({ onItemClick }) => {
  return (
    <div className="sidebar">
    <div >
    <div></div>
    <img src={pimage} alt="profile image"/>
    <div className="profile">
    <p>Alamirew Wagaw</p>
    </div>
    </div>
      <ul>
        <li onClick={() => onItemClick("Dashboards")}>Dashboard</li>
        <li onClick={() => onItemClick("Employee")}>Employee</li>
        <li onClick={() => onItemClick("Menu")}>Menu</li>
        <li onClick={() => onItemClick("Settings")}>Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;