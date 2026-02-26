import { Router } from "express";
import { getAllDepartments } from "../controllers/department_controller";

const router = Router();

router.get("/department", getAllDepartments)
// router.post("/departments", )

export default router