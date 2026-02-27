import { DataTypes, Model, Optional } from "sequelize";

export interface employeeattributes {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    phone:string;
    designation: string;
    salary: number;
    joining_date:Date;
    department_id: string;
    manager_id: string;
    is_active: boolean;
    created_by: string;
    updated_by: string;
    createdAt?: Date;
    updatedAt?: Date;
    deleted_at?: Date;
}

export interface EmployeeCreationAttributes
    extends Optional<employeeattributes, "id"> { }