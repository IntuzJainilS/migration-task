import { Router } from "express";
import { createEmployee, deleteEmployee, getAllemployee, getEmployeeDetail, updateemployee } from "../controllers/employee_controller";

const router = Router();

router.get("/employees", getAllemployee);
router.get("/employees/:id", getEmployeeDetail);
router.post("/employees", createEmployee);
router.put("/employees/:id", updateemployee);
router.delete("/employees/:id", deleteEmployee)

export default router;