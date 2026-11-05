import mongoose, { Schema } from "mongoose";

interface IAlumno {
  nombre: string;
  apellido: string;
  matricula: string;
  edad: number;
}

const alumnoSchema = new Schema<IAlumno>({
  nombre: {
    type: String,
  },
  apellido: {
    type: String,
  },
  matricula: {
    type: String,
  },
  edad: {
    type: Number,
  },
});

export const Alumno = mongoose.model<IAlumno>("Alumno", alumnoSchema);

//SE VA A CREAR HASTA QUE HAGAMOS UNA OPERACION CRUD
