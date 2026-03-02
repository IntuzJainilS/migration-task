import { Request, Response } from "express";
import { employee } from "../models/employee_model";
import { v4 as uuidv4 } from "uuid";
import { Department } from "../models/department_model";
import { Op } from "sequelize";

// get employee
export const getAllemployee = async (req: Request, res: Response) => {
    try {
        const {
            page = 1,
            limit = 10,
            department,
            designation,
            is_active,
            search,
            sort_by = 'createdAt',
            order = 'DESC'
        } = req.query;

        // pagination code
        const offset = (Number(page) - 1) * Number(limit);

        const whereClause: any = {};

        if (designation) whereClause.designation = designation;
        // if (is_active) whereClause.is_active = is_active === 'true';

        // search filtering code
        if (search) {
            whereClause[Op.or] = [
                { first_name: { [Op.like]: `%${search}%` } },
                { last_name: { [Op.like]: `%${search}%` } },
                { email: { [Op.like]: `%${search}%` } },
            ];
        }

        const includeClause: any[] = [
            {
                model: Department,
                as: "department", 
                attributes: ['name'],
                where: department ? { name: department } : {}, 
                required: department ? true : false, 
            }
        ];

        const { count, rows } = await employee.findAndCountAll({
            where: whereClause,
            include: includeClause,
            distinct: true,
            limit: Number(limit),
            offset: offset,
            order: [[sort_by as string, order as string]],
        });

        return res.status(200).json({
            success: true,
            pagination: {
                totalItems: count,
                totalPages: Math.ceil(count / Number(limit)),
                currentPage: Number(page),
            },
            data: rows,
        });



        // const employees = await employee.findAll();
        // return res.status(200).json({
        //     success: true,
        //     data: employees,
        // })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Failed to fetch employees",
            error,
        });
    }
}

// get single employee
export const getEmployeeDetail = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const employeeDetail = await employee.findByPk(id as string)
        return res.status(200).json({
            success: true,
            data: employeeDetail,
        })
    } catch (error) {
        return res.status(500).json({
            succee: false,
            message: 'failed to fetch the detail of employee',
            error,
        })

    }
}

// create new employee
export const createEmployee = async (req: Request, res: Response) => {
    try {
        const { first_name, last_name, email, phone, designation, salary, department_id, manager_id, is_active } = req.body;

        if (!first_name || !last_name || !email || !designation || !salary || !department_id || !is_active) {
            return res.status(404).json({
                message: "provide every field",
            })
        }
        
        const findemployee = await employee.findOne({ where: { email: email } });
        if (findemployee) {
            return res.status(500).json({
                message: "user already exist"
            })
        }

        const createEmployee = await employee.create(req.body)
        return res.status(201).json({
            message: "user created successfully",
            data: createEmployee,
        })
    } catch (error) {
        return res.status(500).json({
            succee: false,
            message: 'failed to add employee',
            error,
        })
    }
}

// update employee
export const updateemployee = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        // const { first_name, last_name, email, phone, designation, salary, department_id, manager_id, is_active } = req.body;

        // if (!first_name || !last_name || !email || !designation || !salary || !department_id || !is_active) {
        //     return res.status(404).json({
        //         message: "provide every field",
        //     })
        // }

        const findemployee = await employee.findByPk(id as string);
        if (!findemployee) {
            return res.status(404).json({
                success: false,
                message: "Employee not found",
            });
        }
        await findemployee.update(req.body);
        return res.status(200).json({
            success: true,
            message: "Employee updated successfully",
            data: findemployee,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Failed to update employee",
            error,
        });
    }
}

// delete employee
export const deleteEmployee = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        console.log("id:", id);

        const findemployee = await employee.findByPk(id as string)

        if (!findemployee) {
            return res.status(404).json({
                success: false,
                message: "Employee not found",
            });
        }

        await findemployee.destroy();
        return res.status(201).json({
            success: true,
            message: "employee deleted successfully",
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Failed to delete employee",
            error,
        });
    }
}