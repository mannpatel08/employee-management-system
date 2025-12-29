import { useEffect, useState } from "react";

const EmployeeForm = ({ addEmployee, updateEmployee, editEmployee }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    salary: "",
    status: "Active"
  });

  useEffect(() => {
    if (editEmployee) {
      setForm(editEmployee);
    }
  }, [editEmployee]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email.includes("@")) {
      alert("Invalid email");
      return;
    }

    if (form.phone.length !== 10) {
      alert("Phone must be 10 digits");
      return;
    }

    if (form.salary <= 0) {
      alert("Salary must be positive");
      return;
    }

    if (editEmployee) {
      updateEmployee(form);
    } else {
      addEmployee({ ...form, id: Date.now() });
    }

    setForm({
      name: "",
      email: "",
      phone: "",
      salary: "",
      status: "Active"
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{editEmployee ? "Edit Employee" : "Add Employee"}</h2>

      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
      <input name="email" value={form.email} onChange={handleChange} placeholder="Email" required />
      <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" required />
      <input name="salary" value={form.salary} onChange={handleChange} placeholder="Salary" required />

      <select name="status" value={form.status} onChange={handleChange}>
        <option>Active</option>
        <option>Inactive</option>
      </select>

      <button type="submit">
        {editEmployee ? "Update Employee" : "Add Employee"}
      </button>
    </form>
  );
};

export default EmployeeForm;
