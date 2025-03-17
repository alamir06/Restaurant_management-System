import React from "react";

const SalesSummary = () => {
  // Dummy data for sales per day
  const salesData = [
    { day: "Monday", sales: 50, price: 5000 },
    { day: "Tuesday", sales: 70, price: 7000 },
    { day: "Wednesday", sales: 90, price: 9000 },
    { day: "Thursday", sales: 60, price: 6000 },
    { day: "Friday", sales: 120, price: 12000 },
  ];

  return (
    <div className="sales-summary">
      <h2>Sales Summary</h2>
      <table>
        <thead>
          <tr>
            <th>Day</th>
            <th>Total Sales</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          {salesData.map((data, index) => (
            <tr key={index}>
              <td>{data.day}</td>
              <td>{data.sales}</td>
              <td>${data.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SalesSummary;