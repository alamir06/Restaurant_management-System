import React, { useState } from "react";
import SalesSummary from "./SalesSummery"
import  EmployeeDetails  from "./EmployeeDetails";


const MainDashobred = () => {
  const [view, setView] = useState("sales"); // Tracks which view to display

  // Dummy data
  const totalPrice = 15000;
  const totalSalesPerDay = 120;
  const totalEmployees = 25;

  return (
    <div className="dashboard">
      <h1>Admin Dashboard</h1>
      <div className="metrics">
        <div className="metric">
          <h2>Total Price</h2>
          <p>${totalPrice}</p>
        </div>
        <div className="metric">
          <h2>Total Sales Per Day</h2>
          <p>{totalSalesPerDay}</p>
        </div>
        <div className="metric">
          <h2>Total Employees</h2>
          <p>{totalEmployees}</p>
        </div>
      </div>
      <div className="buttons">
        <button onClick={() => setView("sales")}>Sales Summary</button>
        <button onClick={() => setView("employees")}>Employee Details</button>
      </div>
      <div className="content">
        {view === "sales" ? <SalesSummary /> : <EmployeeDetails />}
      </div>
    </div>
  );
};

export default MainDashobred;