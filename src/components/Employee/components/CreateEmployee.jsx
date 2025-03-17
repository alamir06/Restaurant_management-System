import React, { useState } from "react";

const CreateEmployee = ({ onSubmit, initialData, onCancel }) => {
  const [employee, setEmployee] = useState(
    initialData || { id: "", name: "", role: "", salary: "" }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(employee);
  };

  return (
    <form onSubmit={handleSubmit} className="employee-form">
      <h2>{initialData ? "Edit Employee" : "Add Employee"}</h2>
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
        <label>Role:</label>
        <input
          type="text"
          name="role"
          value={employee.role}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Salary:</label>
        <input
          type="number"
          name="salary"
          value={employee.salary}
          onChange={handleChange}
          required
        />
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