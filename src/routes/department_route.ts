import { Router } from "express";
import { DepartmentDetails, getAllDepartments, getDepartmentEmployees } from "../controllers/department_controller";

const router = Router();

router.get("/department", getAllDepartments)
router.get("/department/:id", DepartmentDetails )
router.get("/department/:id/employees", getDepartmentEmployees)

export default router