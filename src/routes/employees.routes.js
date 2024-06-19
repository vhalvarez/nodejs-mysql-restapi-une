import { Router } from "express";
import {
    createEmployee,
    deleteEmployee,
    getEmployeeById,
    getEmployees,
    updateEmployee,
} from "../controllers/employees.controller.js";

const router = Router();

router.get("/employees", getEmployees);
router.get("/employees/:id", getEmployeeById);
router.post("/employees", createEmployee);
router.put("/employees/:id", updateEmployee);
router.delete("/employees/:id", deleteEmployee);

export default router;
