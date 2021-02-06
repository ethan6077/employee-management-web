import React from "react";
import data from "./data";
import Employee from "./models/Employee";
import EmployeeBlock from "./views/EmployeeBlock";

import "./App.css";

function App() {
  let employees = data.map(
    d => new Employee({ id: d.id, name: d.name, managerId: d.manager_id })
  );

  // load subordinates
  for (let employee of employees) {
    if (employee.hasManager()) {
      let manager = employees.find(manager =>
        employee.isReportingTo(manager.id)
      );
      if (!manager) {
        // This employee has a manager, but the manager is not existing in our db
        throw new Error(`Invalid Employee: ${employee.name}`);
      }
      manager.subordinate = employee;
    }
  }

  const topTieManagers = employees.filter(m => !m.hasManager());

  return (
    <div className="App">
      <h1>Welcome to Employee Management App</h1>
      <div className="container">
        {topTieManagers.map(e => <EmployeeBlock key={e.id} employee={e} />)}
      </div>
    </div>
  );
}

export default App;
