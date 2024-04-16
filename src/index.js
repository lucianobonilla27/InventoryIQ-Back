import express from 'express';
import "dotenv/config"
import cors from 'cors'
import userRouter from "../router/userRouter.js"
import productsRouter from "../router/productsRouter.js"
import privateRouter from "../router/privateRouter.js"
import comprobationJwt from '../middleware/comprobationJwt.js';
import connectDB from '../dataBase/db.js';

const app = express();

app.use(cors());

const PORT = process.env.PORT || 3000;

//Rutas
app.use(express.json());



app.use("/api", userRouter);
app.use("/api", productsRouter);
app.use("/api", comprobationJwt, privateRouter); //primero comprueba si eciste el jwt, si existe, recién ingresa a la ruta privada.

//endpoints de prueba
//GET http://localhost:8000/api/users
//POST http://localhost:8000/api/register
//DELETE http://localhost:8000/api/user/delete/id
//PATCH http://localhost:8080/api/user/id
//LOGIN http://localhost:8000/api/login


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


initApp()