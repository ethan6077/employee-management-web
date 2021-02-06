export default class Employee {
  id: number;
  name: string;
  manager_id: number | null;

  constructor({
    id,
    name,
    manager_id
  }: {
    id: number;
    name: string;
    manager_id?: number;
  }) {
    this.id = id;
    this.name = name;
    this.manager_id = manager_id || null;
  }

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getManagerId() {
    return this.manager_id;
  }

  hasManager() {
    return !this.manager_id;
  }

  isReportingTo(managerId: number) {
    return this.manager_id === managerId;
  }
}
