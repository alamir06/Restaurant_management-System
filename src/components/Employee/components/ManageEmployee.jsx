import React, { useState } from "react";
import CreateEmployee from "./CreateEmployee";

const ManageEmployee = () => {
  const [employees, setEmployees] = useState([]);
  const [editingEmployee, setEditingEmployee] = useState(null);

  const addEmployee = (employee) => {
    if (employee.id) {
      // Update existing employee
      setEmployees(
        employees.map((emp) => (emp.id === employee.id ? employee : emp))
      );
    } else {
      // Add new employee
      setEmployees([...employees, { ...employee, id: Date.now() }]);
    }
    setEditingEmployee(null);
  };

  const deleteEmployee = (id) => {
    setEmployees(employees.filter((emp) => emp.id !== id));
  };

  const editEmployee = (employee) => {
    setEditingEmployee(employee);
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
            <th>Role</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.role}</td>
              <td>${employee.salary}</td>
              <td>
                <button onClick={() => editEmployee(employee)}>Edit</button>
                <button onClick={() => deleteEmployee(employee.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageEmployee;