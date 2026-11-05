import { Router } from "express";
import { crearAlumno, getAlumnos } from "../controllers/alumnoController.js";

const router = Router();
router.post("/crearalumno", crearAlumno);
router.get("/getalumnos", getAlumnos);

export default router;
