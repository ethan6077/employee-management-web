import Employee from "../models/Employee";

export default function loadSubordinates(employees: Employee[]) {
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
}
