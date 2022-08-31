import express from "express";
import { UsuarioController } from "./Controllers/usuarioController.js";
const routes = express.Router();

/*routes.get("/", (req, res) => {
    return res.status(200).json({
        msg : "Routes funciona"
    })
});
*/

routes.get("/usuario", UsuarioController.listarTodos)
routes.post("/usuario/novo", UsuarioController.novoUsuario)
routes.put("/usuario/alterar/:id", UsuarioController.alterarUsuario)
routes.delete("/usuario/delete/:id", UsuarioController.deleteUsuario)


export { routes }