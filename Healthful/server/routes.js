import express from "express";
import { UsuarioController } from "./src/Controllers/UserController.js";
import { PostController } from "./src/Controllers/PostController.js";

const routes = express.Router();

routes.get("/", (req, res) => {
    return res.status(200).send('Hey punk');
});

routes.get('/usuario', UsuarioController.selectUsuario)
routes.post('/usuario/novo', UsuarioController.novoUsuario)
routes.put('/usuario/alterar/:idUser', UsuarioController.updateUsuario)
routes.delete('/usuario/delete/:idUser', UsuarioController.deleteUsuario)
routes.post('/usuario/login', UsuarioController.loginUsuario)


routes.get("/postagem/", PostController.selectPost)
routes.post("/postagem/novo/", PostController.InsertPost)

export { routes }