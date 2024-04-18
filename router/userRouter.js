import express from 'express';
import usersController from '../controllers/usersController.js';
const router = express.Router();


//Traer los usuarios
router.get('/users', usersController.getAllUsers);

//crear un usuario
router.post("/register", usersController.registroUSers);


//Eliminar un usuario

router.delete("/user/delete/:id", usersController.deleteUser);

//Editar un usuario

router.patch("/user/:id", usersController.updateUser);


//login de usuario
router.post("/login", usersController.login);




export default router;

