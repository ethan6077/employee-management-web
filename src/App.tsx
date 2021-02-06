import React from "react";
import Employee from "./models/Employee";

function App() {
  const employee = new Employee({ id: 1, name: "Ethan Zhang" });

  return (
    <div className="App">
      <h1>Welcome to Employee Management App</h1>
      <p>{employee.getName()}</p>
    </div>
  );
}

export default App;
