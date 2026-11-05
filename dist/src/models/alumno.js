import mongoose, { Schema } from "mongoose";
const alumnoSchema = new Schema({
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
export const Alumno = mongoose.model("Alumno", alumnoSchema);
//SE VA A CREAR HASTA QUE HAGAMOS UNA OPERACION CRUD
