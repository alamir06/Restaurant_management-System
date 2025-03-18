import React, { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Employee from "./components/Employee/Employee.jsx";
import Dashboards from "./components/Dashbored/Dashbored.jsx";
import Menu from "./components/Menu/Menu.jsx";
import Settings from "./components/Settings/Settings.jsx";
import "./App.css";

const App = () => {
  const [activeComponent, setActiveComponent] = useState("Dashboards");

  const renderComponent = () => {
    switch (activeComponent) {
      case "Dashboards":
        return <Dashboards />;
      case "Employee":
        return <Employee />;
      case "Menu":
        return <Menu />;
        case "Settings":
          return <Settings />;
      default:
        return <Dashboards />;
    }
  };

  return (
    <div className="app">
      <Sidebar onItemClick={setActiveComponent} />
      <div className="main-content">{renderComponent()}</div>
    </div>
  );
};

export default App;