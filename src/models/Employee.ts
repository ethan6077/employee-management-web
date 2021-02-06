export default class Employee {
  private _id: number;
  private _name: string;
  private _managerId: number | null;
  private _subordinates: Employee[];

  constructor({
    id,
    name,
    managerId
  }: {
    id: number;
    name: string;
    managerId: number | null;
  }) {
    this._id = id;
    this._name = name;
    this._managerId = managerId;
    this._subordinates = [];
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get managerId() {
    return this._managerId;
  }

  get subordinates() {
    return this._subordinates;
  }

  set subordinate(e: Employee) {
    if (e.isReportingTo(this._id)) {
      this._subordinates = [...this._subordinates, e];
    } else {
      throw new Error("Failed to set subordinate!");
    }
  }

  hasManager() {
    return !!this._managerId;
  }

  isReportingTo(managerId: number) {
    return this._managerId === managerId;
  }
}
