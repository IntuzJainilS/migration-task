import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/db";
import {v4 as uuidv4} from "uuid";

interface employeeattributes {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    designation: string;
    salary: number;
    department_id: string;
    is_active: boolean;
    createdAt?: Date;
    updatedAt?: Date;
    deleted_at?: Date;
}

interface EmployeeCreationAttributes
    extends Optional<employeeattributes, "id"> { }

export const employee = sequelize.define<Model<employeeattributes, EmployeeCreationAttributes>>("employee", {
    id: {
        type: DataTypes.INTEGER,
        // type: Sequelize.UUID,
        primaryKey: true,
        autoIncrement: true,
        // defaultValue: DataTypes.UUIDV4
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    designation: {
        type: DataTypes.STRING,
    },
    salary: {
        type: DataTypes.DECIMAL,
    },
    department_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "Departments",
            key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
    },
    is_active: {
        type: DataTypes.BOOLEAN,
    },
    deleted_at: {
        type: DataTypes.DATE,
        allowNull: true,
    }
},
    {
        tableName: "Employees",
        timestamps: true,
        paranoid: true,
        deletedAt: "deleted_at",
    }
)