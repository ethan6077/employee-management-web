import React from "react";
import data from "./utils/data";
import Employee from "./models/Employee";
import EmployeeBlock from "./views/EmployeeBlock";
import loadSubordinates from "./utils/loadSubordinates";

import "./App.css";

function App() {
  let employees = data.map(
    d => new Employee({ id: d.id, name: d.name, managerId: d.manager_id })
  );

  loadSubordinates(employees);

  const topTieManagers = employees.filter(m => !m.hasManager());

  return (
    <div>
      <h1>Welcome to Employee Management App</h1>
      <div className="main-content">
        <ul>
          {topTieManagers.map(e => <EmployeeBlock key={e.id} employee={e} />)}
        </ul>
      </div>
    </div>
  );
}

export default App;
