import { pool } from "../db.js";

//* Obtener todos los departamentos
export const getDepartments = async (req, res) => {
    try {
        const [rows] = await pool.query(
            "SELECT * FROM department",
        );
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

//* Obtener un departamento por ID
export const getDepartmentById = async (req, res) => {
    try {
        const [rows] = await pool.query(
            "SELECT * FROM department WHERE id = ?",
            [req.params.id],
        );
        if (rows.length === 0)
            return res.status(404).json({
                error: "Department not found",
            });
        res.json(rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

//* Crear un nuevo departamento
export const createDepartment = async (req, res) => {
    try {
        const {
            name,
            location,
            phone_number,
            budget,
        } = req.body;
        const [result] = await pool.query(
            "INSERT INTO department (name, location, phone_number, budget) VALUES (?, ?, ?, ?)",
            [name, location, phone_number, budget],
        );
        res.status(201).json({
            id: result.insertId,
            ...req.body,
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

//* Actualizar un departamento
export const updateDepartment = async (req, res) => {
    try {
        const {
            name,
            location,
            phone_number,
            budget,
        } = req.body;
        await pool.query(
            "UPDATE department SET name = ?, location = ?, phone_number = ?, budget = ? WHERE id = ?",
            [
                name,
                location,
                phone_number,
                budget,
                req.params.id,
            ],
        );
        res.json({ id: req.params.id, ...req.body });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

//* Eliminar un departamento
export const deleteDepartment = async (req, res) => {
    try {
        await pool.query(
            "DELETE FROM department WHERE id = ?",
            [req.params.id],
        );
        res.status(204).end();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
