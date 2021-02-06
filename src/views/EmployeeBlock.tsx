import { FC } from "react";
import Employee from "../models/Employee";

import "./EmployeeBlock.css";

interface EmployeeBlockProps {
  employee: Employee;
}

const EmployeeBlock: FC<EmployeeBlockProps> = ({ employee }) => {
  const getBackGroundColor = () => {
    if (!employee.hasManager()) {
      return "#FC707B";
    }

    if (!employee.hasSubordinates()) {
      return "#ded7d7";
    }

    return "#58E1C8";
  };

  return (
    <div
      className="employee-block"
      style={{ backgroundColor: getBackGroundColor() }}
    >
      <span>{" - " + employee.name}</span>
      <ul>
        {employee.subordinates.map(sub => (
          <EmployeeBlock key={sub.id} employee={sub} />
        ))}
      </ul>
    </div>
  );
};

export default EmployeeBlock;
