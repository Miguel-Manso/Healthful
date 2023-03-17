/* __________________Importando as extensões das Rotas__________________ */
import express from "express";
import { UsuarioController } from "./src/Controllers/UserController.js";
import { PostController } from "./src/Controllers/PostController.js";
import { CatController } from "./src/Controllers/CatController.js";
/* _____________________________________________________________________ */


/* ________________Configurando as Rotas da Healthful________________ */
const routes = express.Router();

routes.get("/", (req, res) => {
    return res.status(200).send('Hey punk');
});

routes.get('/usuario', UsuarioController.selectUsuario)
routes.get('/usuario/perfil/:idUser', UsuarioController.ListaIdUser)
routes.post('/usuario/novo', UsuarioController.novoUsuario)
routes.put('/usuario/alterar/:idUser', UsuarioController.updateUsuario)
routes.delete('/usuario/delete/:idUser', UsuarioController.deleteUsuario)
routes.post('/usuario/login', UsuarioController.loginUsuario)
routes.get("/postagem/", PostController.selectPost)
routes.post("/postagem/novo/", PostController.InsertPost)
routes.get("/postagem/lerartigo/:idPost", PostController.ListaIdPost)
routes.get("/categoria/", CatController.selectCat)

export { routes }
/* ___________________________________________________________________ */