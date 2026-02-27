import { Router } from "express";
import { createEmployee, deleteEmployee, getAllemployee, getEmployeeDetail, updateemployee } from "../controllers/employee_controller";
import { validateEmployee } from "../middleware/managerIdValidator";
const router = Router();

router.get("/employees", getAllemployee);
router.get("/employees/:id", getEmployeeDetail);
router.post("/employees", validateEmployee, createEmployee);
router.put("/employees/:id", validateEmployee, updateemployee);
router.delete("/employees/:id", deleteEmployee)

export default router;