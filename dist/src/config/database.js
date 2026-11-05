import mongoose from "mongoose";
export const connectDB = async () => {
    try {
        const mongoUri = "mongodb+srv://vmsolis27:0dB459lCPGkJmvvf@cluster0.hgd9grg.mongodb.net/escuela";
        await mongoose.connect(mongoUri);
        console.log("MongoDB Conectado Correctamente!!!!");
    }
    catch (error) {
        console.error("Error al conectar con Mongo:", error);
        process.exit(1);
    }
};
