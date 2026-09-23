//import dotenv from 'dotenv';
//dotenv.config();
import "dotenv/config";
import express from "express";
import routes from "./v1/v1.routes.js";
import notFoundMiddleware from "./v1/middlewares/notFound.middleware.js";
import cors from 'cors';
import connectDB from "./v1/config/db.config.js";
import { errorMiddleware } from "./v1/middlewares/error.middleware.js";


connectDB();
const app = express();
app.use(cors());
// app.use(cors({ origin: "http://localhost:5500",
//     allowedHeaders:["Content-Type", "Authorization"],
//     methods: ["GET", "POST", "PUT", "DELETE"]
// }));

//app.use(express.json()) es un middleware que nos permite parsear el body de la peticion 
// y convertirlo en un objeto JSON, para ello utilizamos express.json()
app.use(express.json());
//esto nos permite recibir la informacion de un formulario HTML, para ello utilizamos express.urlencoded()
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Respuesta del servidor a la raiz");
});

app.use("/v1", routes);
//app.use("/v1", routes) es un middleware que nos permite definir las rutas de nuestra API, para ello utilizamos express.Router() y definimos las rutas en un archivo aparte, en este caso v1.routes.js
app.use(notFoundMiddleware);
app.use(errorMiddleware);
 
export default app;