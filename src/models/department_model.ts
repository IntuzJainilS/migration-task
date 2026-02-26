import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/db";

interface DepartmentAttributes {
  id: string;
  name: string;
  description: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

interface DepartmentCreationAttributes
  extends Optional<DepartmentAttributes, "id"> {}

interface DepartmentInstance
  extends Model<DepartmentAttributes, DepartmentCreationAttributes>,
    DepartmentAttributes {}

export const Department = sequelize.define<DepartmentInstance>(
  "Department",
  {
    id: {
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
    tableName: "Departments",
    timestamps: true,
    createdAt: "createdAt",
    updatedAt: "updatedAt",
    paranoid:true,
    deletedAt: "deleted_at",
  }
);