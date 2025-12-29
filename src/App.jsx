import { useEffect, useState } from "react";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [editEmployee, setEditEmployee] = useState(null);

  // Load from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("employees")) || [];
    setEmployees(stored);
  }, []);

  // Sync with localStorage
  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  const addEmployee = (emp) => {
    setEmployees([...employees, emp]);
  };

  const deleteEmployee = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setEmployees(employees.filter(emp => emp.id !== id));
    }
  };

  const startEdit = (id) => {
    const emp = employees.find(e => e.id === id);
    setEditEmployee(emp);
  };

  const updateEmployee = (updatedEmp) => {
    setEmployees(
      employees.map(emp =>
        emp.id === updatedEmp.id ? updatedEmp : emp
      )
    );
    setEditEmployee(null);
  };

  const clearAllEmployees = () => {
    if (window.confirm("Clear all employee records?")) {
      setEmployees([]);
      localStorage.removeItem("employees");
    }
  };

  return (
    <div className="container">
      <h1>Employee Management System</h1>

      <EmployeeForm
        addEmployee={addEmployee}
        updateEmployee={updateEmployee}
        editEmployee={editEmployee}
      />

      <EmployeeList
        employees={employees}
        deleteEmployee={deleteEmployee}
        startEdit={startEdit}
        clearAllEmployees={clearAllEmployees}
      />
    </div>
  );
};

export default App;
