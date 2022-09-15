import { Usuario } from "../Models/usuarioModels.js";


export class UsuarioController{
    
    static async listarTodos(req, res){
        try{
            const usuarios = await Usuario.SelectAll();
            return res.status(200).json(usuarios)

        }catch(err) {
            console.log("Erro no usuarioController.js: " + err)
            return res.status(500).json(err)
        }
    }

    static async novoUsuario(req, res){
        try{
            const {nomeUser, emailUser, senhaUser, dtNasc, nivelUser, statusUser, dataInsert, dataUpdate} = req.body
            const novo_Usuario = await new Usuario(nomeUser, emailUser, senhaUser, dtNasc, nivelUser, statusUser, dataInsert, dataUpdate).Insert()
            return res.status(200).json(novo_Usuario)
        }catch(err){
            console.log("Erro no usuarioController|Novo Usuario: " + err)
            return res.status(500).json(err)
        }
    }

    static async alterarUsuario(req, res){
        try{
            const {idUser} = req.params
            const {nomeUser, emailUser, senhaUser, dtNasc, nivelUser, statusUser, dataInsert, dataUpdate} = req.body
            const alterar_Usuario = await new Usuario (nomeUser, emailUser, senhaUser, dtNasc, nivelUser, statusUser, dataInsert, dataUpdate, idUser).Update()
            return res.status(200).json(alterar_Usuario)
        }catch(err){
            console.log("Erro no usuarioController| Alterar Usuario: " + err)
            return res.status(500).json(err)
        }

        }

        static async deleteUsuario(req, res){
            try{
                const { idUser } = req.params
                const {nomeUser, emailUser, senhaUser, statusUser, dtNasc, nivelUser, dataInsert, dataUpdate} = req.body
                const delete_Usuario = await new Usuario (nomeUser, emailUser, senhaUser, statusUser, dtNasc, nivelUser, dataInsert, dataUpdate, idUser).Delete()
                return res.status(200).json(delete_Usuario)
            }catch(err){
                console.log("Erro no usuarioController | Delete Usuario: " + err)
                return res.status(500).json(err)

            }
        }
}
 