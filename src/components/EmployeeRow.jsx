const EmployeeRow = ({ emp, deleteEmployee, startEdit }) => {
  return (
    <tr>
      <td>{emp.name}</td>
      <td>{emp.email}</td>
      <td>{emp.phone}</td>
      <td>{emp.salary}</td>
      <td>{emp.status}</td>
      <td>
        <button onClick={() => startEdit(emp.id)}>Edit</button>
        <button onClick={() => deleteEmployee(emp.id)}>Delete</button>
      </td>
    </tr>
  );
};

export default EmployeeRow;
