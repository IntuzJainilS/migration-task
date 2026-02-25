import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/db";

interface DepartmentAttributes {
  department_id: string;
  name: string;
  description: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

interface DepartmentCreationAttributes
  extends Optional<DepartmentAttributes, "department_id"> {}

interface DepartmentInstance
  extends Model<DepartmentAttributes, DepartmentCreationAttributes>,
    DepartmentAttributes {}

export const Department = sequelize.define<DepartmentInstance>(
  "Department",
  {
    department_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.STRING,
    },
    deleted_at:{
      type: DataTypes.DATE,
      allowNull: true,
    }
  },
  {
    tableName: "departments",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    paranoid:true,
    deletedAt: "deleted_at",
  }
);