import express from "express";
import { UsuarioController } from "./src/Controllers/usuarioController.js";

const routes = express.Router()

routes.get('/usuario', UsuarioController.selectUsuario)
routes.post('/usuario/novo', UsuarioController.novoUsuario)
routes.put('/usuario/alterar/:idUser', UsuarioController.updateUsuario)
routes.delete('/usuario/delete/:idUser', UsuarioController.deleteUsuario)

export { routes }