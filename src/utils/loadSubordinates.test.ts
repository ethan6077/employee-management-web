import Employee from "../models/Employee";
import loadSubordinates from "./loadSubordinates";

test("loadSubordinates", () => {
  const manager = new Employee({ id: 1, name: "Jamie", managerId: null });
  const employee1 = new Employee({ id: 2, name: "Alan", managerId: 1 });
  const employee2 = new Employee({ id: 3, name: "Steve", managerId: 1 });
  const employees = [manager, employee1, employee2];
  loadSubordinates(employees);

  expect(manager.subordinates).toHaveLength(2);
  expect(manager.subordinates).toContain(employee1);
  expect(manager.subordinates).toContain(employee2);

  expect(employee1.hasSubordinates()).toBeFalsy();
  expect(employee2.hasSubordinates()).toBeFalsy();
});
