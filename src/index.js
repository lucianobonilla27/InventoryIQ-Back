import express from 'express';
import "dotenv/config";
import cors from 'cors';
import userRouter from "../router/userRouter.js";
import productsRouter from "../router/productsRouter.js";
import contactRouter from "../router/contactRouter.js";
import connectDB from "../dataBase/db.js"

const app = express();

app.use(cors());

const PORT = process.env.PORT || 3000;

//Rutas
app.use(express.json());

// Endpoint de prueba

//http://localhost:8080/api/contact ---------------------->Traer las consultas
//http://localhost:8080/api/consultaById/:id ------------->Ver una consulta
//http://localhost:8080/api/newConsulta ------------------>Agregar una consulta
//http://localhost:8080/api/respConsulta/:id ------------->Responder una consulta
//http://localhost:8080/api/deleteConsulta/:id ----------->Eliminar una consulta

app.use("/api", userRouter)
app.use("/api", productsRouter)
app.use("/api", contactRouter)


const initApp = () => {
    try {
        connectDB();
        app.listen(PORT, () => {
            console.log(`Servidor iniciado en puerto ${PORT}`)
        });
    } catch (error) {
        console.log(error)
    }
}


initApp();