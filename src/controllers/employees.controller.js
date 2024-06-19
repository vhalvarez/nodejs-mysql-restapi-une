import { pool } from "../db.js";

//* Obtener todos los empleados
export const getEmployees = async (req, res) => {
    try {
        const [rows] = await pool.query(
            "SELECT * FROM employee",
        );
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

//* Obtener empleado por ID
export const getEmployeeById = async (req, res) => {
    try {
        const [rows] = await pool.query(
            "SELECT * FROM employee WHERE id = ?",
            [req.params.id],
        );
        if (rows.length === 0)
            return res
                .status(404)
                .json({ error: "Employee not found" });
        res.json(rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

//* Crear un nuevo empleado
export const createEmployee = async (req, res) => {
    try {
        const {
            first_name,
            last_name,
            email,
            hire_date,
            salary,
            department_id,
        } = req.body;
        const [result] = await pool.query(
            "INSERT INTO employee (first_name, last_name, email, hire_date, salary, department_id) VALUES (?, ?, ?, ?, ?, ?)",
            [
                first_name,
                last_name,
                email,
                hire_date,
                salary,
                department_id,
            ],
        );
        res.status(201).json({
            id: result.insertId,
            ...req.body,
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

//* Actualizar un empleado
//! Solo actualiza al empleado cuando se enviando todos los datos, incluyendo el que se va a actualizar
export const updateEmployee = async (req, res) => {
    try {
        const {
            first_name,
            last_name,
            email,
            hire_date,
            salary,
            department_id,
        } = req.body;
        await pool.query(
            "UPDATE employee SET first_name = ?, last_name = ?, email = ?, hire_date = ?, salary = ?, department_id = ? WHERE id = ?",
            [
                first_name,
                last_name,
                email,
                hire_date,
                salary,
                department_id,
                req.params.id,
            ],
        );
        res.json({ id: req.params.id, ...req.body });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// * Eliminar un empleado
export const deleteEmployee = async (req, res) => {
    try {
        await pool.query(
            "DELETE FROM employee WHERE id = ?",
            [req.params.id],
        );
        res.status(204).end();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
