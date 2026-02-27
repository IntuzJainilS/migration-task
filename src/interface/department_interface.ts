import { DataTypes, Model, Optional } from "sequelize";

export interface DepartmentAttributes {
  id: string;
  name: string;
  description: string;
  location: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export interface DepartmentCreationAttributes
  extends Optional<DepartmentAttributes, "id"> { }

export interface DepartmentInstance
  extends Model<DepartmentAttributes, DepartmentCreationAttributes>,
  DepartmentAttributes { }