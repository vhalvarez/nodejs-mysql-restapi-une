import { Router } from "express";
import {
    createDepartment,
    deleteDepartment,
    getDepartmentById,
    getDepartments,
    updateDepartment,
} from "../controllers/departments.controller.js";

const router = Router();

router.get("/departments", getDepartments);
router.get("/departments/:id", getDepartmentById);
router.post("/departments", createDepartment);
router.put("/departments/:id", updateDepartment);
router.delete("/departments/:id", deleteDepartment);

export default router;
