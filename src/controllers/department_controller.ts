import { Request, Response } from "express";
import { Department } from "../models/department_model";

export const getAllDepartments = async (req: Request, res: Response) => {
  try {
    const departments = await Department.findAll();
    
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

// export const createDepartments = async(req:Request, res:Response) => {
//     const {department_id, name, description} = req.body

//     if (!department_id || !name || !description) {
//         res.status(404).json({
//             message:"provide all details"
//         })
//     }
//     const finddepartment = 
// }