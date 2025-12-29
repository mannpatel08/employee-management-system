import EmployeeRow from "./EmployeeRow";

const EmployeeList = ({
  employees,
  deleteEmployee,
  startEdit,
  clearAllEmployees,
}) => {
  if (employees.length === 0) {
    return <p>No Employees Found</p>;
  }

  return (
    <>
      <div className="list-header">
        <h2>Employee List</h2>
        <button className="clear-all" onClick={clearAllEmployees}>
          Clear All
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Salary</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((emp) => (
            <EmployeeRow
              key={emp.id}
              emp={emp}
              deleteEmployee={deleteEmployee}
              startEdit={startEdit}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default EmployeeList;
