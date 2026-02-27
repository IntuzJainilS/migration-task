import { NextFunction, Request, Response } from "express";
import { Department } from "../models/department_model";

export const validateEmployee = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { department_id, manager_id, id } = req.body;
    
        if (manager_id === id) {
            return res.status(400).json({ error: "A manager cannot be self." });
        }
    
        const department = await Department.findByPk(department_id);
        if (!department) {
            return res.status(404).json({ error: "Department does not exist." });
        }
        next();
    } catch (error) {
        return res.status(500).json({ 
            error: "Internal Server Error", 
            message: "An error occurred during validation." 
        });
    }
}