import React from "react";

const EmployeeDetails = () => {
  // Dummy data for employees
  const employees = [
    { id: 1, name: "John Doe", role: "Manager", salary: 5000 },
    { id: 2, name: "Jane Smith", role: "Developer", salary: 4000 },
    { id: 3, name: "Alice Johnson", role: "Designer", salary: 3500 },
    { id: 4, name: "Bob Brown", role: "Tester", salary: 3000 },
  ];

  return (
    <div className="employee-details">
      <h2>Employee Details</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Role</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.role}</td>
              <td>${employee.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeDetails;