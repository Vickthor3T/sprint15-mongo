import { Request, Response } from "express";
import { Alumno } from "../models/alumno.js";

export const crearAlumno = async (req: Request, res: Response) => {
  console.log(req.body);
  const alumno = await Alumno.create(req.body);
  res.status(201).json(alumno);
};

export const getAlumnos = async (req: Request, res: Response) => {
  const alumnos = await Alumno.find();
  res.status(200).json(alumnos);
};
