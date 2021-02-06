import Employee from "./Employee";

test("constructor", () => {
  const employee = new Employee({ id: 1, name: "test name", managerId: 2 });
  expect(employee.id).toBe(1);
  expect(employee.name).toBe("test name");
  expect(employee.managerId).toBe(2);
});

describe("managers & subordinates", () => {
  const manager = new Employee({ id: 1, name: "Jamie", managerId: null });
  const employee1 = new Employee({ id: 2, name: "Alan", managerId: 1 });
  const employee2 = new Employee({ id: 3, name: "Steve", managerId: 1 });
  manager.subordinate = employee1;
  manager.subordinate = employee2;

  test("setter & getter", () => {
    expect(manager.subordinates).toHaveLength(2);
    expect(manager.subordinates).toContain(employee1);
    expect(manager.subordinates).toContain(employee2);
  });

  test("hasManager", () => {
    expect(manager.hasManager()).toBeFalsy();
    expect(employee1.hasManager()).toBeTruthy();
    expect(employee2.hasManager()).toBeTruthy();
  });

  test("hasSubordinates", () => {
    expect(manager.hasSubordinates()).toBeTruthy();
    expect(employee1.hasSubordinates()).toBeFalsy();
    expect(employee2.hasSubordinates()).toBeFalsy();
  });

  test("isReportingTo", () => {
    expect(manager.isReportingTo(employee1.id)).toBeFalsy();
    expect(employee1.isReportingTo(manager.id)).toBeTruthy();
    expect(employee2.isReportingTo(manager.id)).toBeTruthy();
  });
});
