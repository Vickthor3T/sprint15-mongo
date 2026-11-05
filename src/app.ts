import express, { Request, Response } from "express";
import { connectDB } from "./config/database.js";
import alumnoRoutes from "./routes/alumnoRoutes.js";
import cors from "cors";
import jwt from "jsonwebtoken";
//import directivoRoutes from "./routes/directivoRoutes.js";
//CORS ES UNA PROTECCION, PARA QUE NO CUALQUIERA UTILICE EL BACKEND

const app = express();
const PORT = 443;

app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "API FUNCIONANDO",
  });
});

app.get("/generar-token", (req: Request, res: Response) => {
  const token = jwt.sign(
    {
      id: 1,
      nombre: "Victor",
    },
    "ESTONOSEDEBEDESUBIR",
    {
      expiresIn: "1h",
    },
  );

  res.json({
    token: token,
  });
});

app.use("/rutaalumnos", alumnoRoutes);
//app.user("rutadirectivos", directivoRoutes);

const startServer = async () => {
  // await connectDB();

  app.listen(PORT, () => {
    console.log(`Servidor ejecutandose en http://localhost:${PORT}`);
  });
};

startServer();
