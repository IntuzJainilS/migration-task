import { Request, Response } from "express";
import { Department } from "../models/department_model";
import { employee } from "../models/employee_model";

// get all departments
export const getAllDepartments = async (req: Request, res: Response) => {
  try {
    const departments = await Department.findAll();
    
    if (departments.length === 0) {
      return res.status(400).json({
        success: false,
        message:"no departments found"
      })
    }

    return res.status(200).json({
      success: true,
      data: departments,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch departments",
      error,
    });
  }
};

// get departments by id 
export const DepartmentDetails = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const singleDepartment = await Department.findByPk(id as string);
    return res.status(200).json({
      success: true,
      data: singleDepartment,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch departments",
      error,
    })
  }
}

// List employee by department
export const getDepartmentEmployees = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    // find the department and "Include" the associated employees
    const departmentWithEmployees = await Department.findByPk(id as string, {
      include: [
        {
          model: employee,
          as: "employees",
          // through: {attributes: [id as string]},
          attributes: ["id", "first_name", "last_name"],
          include: [
            {
              model: employee,
              as: "manager",
              attributes: ["first_name", "last_name"] 
            }
          ]
        },
      ],
    });

    if (!departmentWithEmployees) {
      return res.status(404).json({
        success: false,
        message: "Department not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: departmentWithEmployees,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch department employees",
      error: error instanceof Error ? error.message : error,
    });
  }
};