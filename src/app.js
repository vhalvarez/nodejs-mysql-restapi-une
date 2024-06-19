import express from "express";
import employeesRoutes from "./routes/employees.routes.js";
import departmentsRoutes from "./routes/departments.routes.js";
import indexRoutes from "./routes/index.routes.js";

const app = express();

app.use(express.json());
app.use(indexRoutes);
app.use("/api", employeesRoutes);
app.use("/api", departmentsRoutes);

export default app;
