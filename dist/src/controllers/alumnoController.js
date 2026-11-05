import { Alumno } from "../models/alumno.js";
export const crearAlumno = async (req, res) => {
    console.log(req.body);
    const alumno = await Alumno.create(req.body);
    res.status(201).json(alumno);
};
export const getAlumnos = async (req, res) => {
    const alumnos = await Alumno.find();
    res.status(200).json(alumnos);
};
