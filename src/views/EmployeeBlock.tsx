import { FC } from "react";
import Employee from "../models/Employee";

interface EmployeeBlockProps {
  employee: Employee;
}

const EmployeeBlock: FC<EmployeeBlockProps> = ({ employee }) => (
  <div>
    <span>{employee.name}</span>
    <ul>
      {employee.subordinates.map(sub => (
        <EmployeeBlock key={sub.id} employee={sub} />
      ))}
    </ul>
  </div>
);

export default EmployeeBlock;
