import React, { useState, useEffect } from "react";
import CreateEmployee from "./CreateEmployee";

const ManageEmployee = () => {
  const [employees, setEmployees] = useState([]);
  const [editingEmployee, setEditingEmployee] = useState(null);

  // Fetch employees from the backend
  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await fetch("http://localhost:4000/employees");
      const data = await response.json();
      setEmployees(data);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  const addEmployee = async (employee) => {
    try {
      const url = employee.id
        ? `http://localhost:4000/employees/${employee.id}`
        : "http://localhost:4000/employees";
      const method = employee.id ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(employee),
      });
      const data = await response.json();
      fetchEmployees(); // Refresh the list
      setEditingEmployee(null);
    } catch (error) {
      console.error("Error adding/updating employee:", error);
    }
  };

  const deleteEmployee = async (id) => {
    try {
      await fetch(`http://localhost:4000/employees/${id}`, { method: "DELETE" });
      fetchEmployees(); // Refresh the list
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
  };

  return (
    <div className="employee-list">
      <h1>Employee Management</h1>
      <CreateEmployee
        onSubmit={addEmployee}
        initialData={editingEmployee}
        onCancel={() => setEditingEmployee(null)}
      />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.role}</td>
              <td>
                <button onClick={() => setEditingEmployee(employee)}>Edit</button>
                <button onClick={() => deleteEmployee(employee.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageEmployee;