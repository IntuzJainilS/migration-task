import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/db";
import { v4 as uuidv4 } from "uuid";
import { EmployeeCreationAttributes, employeeattributes } from "../interface/employee_interface";
import { Department } from "./department_model";


export const employee = sequelize.define<Model<employeeattributes, EmployeeCreationAttributes>>("Employee", {
    id: {
        type: DataTypes.UUID,
        // type: Sequelize.UUID,
        primaryKey: true,
        // autoIncrement: true,
        defaultValue: DataTypes.UUIDV4
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
        validate : {
            isEmail: true
        }  
    },
    phone: {
        type: DataTypes.STRING
    },
    designation: {
        type: DataTypes.ENUM('developer', 'tester', 'manager', 'hr'),
    },
    salary: {
        type: DataTypes.DECIMAL(10, 2),
        validate: {
            min: { args: [1], msg: "salary must be greater than 0" }
        }
    },
    joining_date: {
        type: DataTypes.DATE,
        validate: {
            isNotFuture(value: string) {
                if (new Date(value) > new Date()) {
                    throw new Error("Joining date cannot be in the future");
                }
            }
        }
    },
    department_id: {
        type: DataTypes.UUID,
        references: {
            model: "Departments",
            key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
    },
    manager_id: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
            model: 'Employees',
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
    },
    is_active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
    created_by: {
        type: DataTypes.STRING,
    },
    updated_by: {
        type: DataTypes.STRING,
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
// Employee to Department
employee.belongsTo(Department, {
    foreignKey: "department_id",
    as: "department"
});

// Department has many Employees
Department.hasMany(employee, {
    foreignKey: "department_id",
});

// Self reference (Manager)
employee.belongsTo(employee, {
    as: "manager",
    foreignKey: "manager_id",
});

employee.hasMany(employee, {
    as: "subordinates",
    foreignKey: "manager_id",
});