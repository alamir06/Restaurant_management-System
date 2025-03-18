import React, { useState } from "react";

const CreateEmployee = ({ onSubmit, initialData, onCancel }) => {
  const [employee, setEmployee] = useState(
    initialData || { id: "", name: "", password: "", email: "", role: "" }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(employee);
    resetForm(); 
  };
  const resetForm = () => {
    setEmployee({ id: "", name: "", password: "", email: "", role: "" });
  };
  return (
    <form onSubmit={handleSubmit} className="employee-form">
      <h2>{initialData ? "Edit Employee" : "Add Employee"}</h2>
      <div className="employee-add">
        <div className="left">
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={employee.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={employee.password}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="right">
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={employee.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Role:</label>
            <input
              type="text"
              name="role"
              value={employee.role}
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

export default CreateEmployee;