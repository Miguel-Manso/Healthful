import { Usuario } from "../Models/usuarioModels.js";


export class UsuarioController{
    
    static async listarTodos(req, res){
        try{
            const usuarios = await Usuario.SelectAll();
            return res.status(200).json(usuarios)

        }catch(err) {
            console.log("Erro no usuarioController.js: " +err)
            return res.status(500).json(err)
        }
    }

    static async novoUsuario(req, res){
        try{
            const{nome_User, email_User, senha_User, dt_nasc, nivel_User, status_User, data_insert, data_update} = req.body
            const novo_Usuario = await new Usuario(nome_User, email_User, senha_User, dt_nasc, nivel_User, status_User, data_insert, data_update).Insert()
            return res.status(200).json(novo_Usuario)
        }catch(err){
            console.log("Erro no usuarioController|Novo Usuario: " + err)
            return res.status(500).json(err)
        }
    }

    static async alterarUsuario(req, res){
        try{
            const{id_User} = req.params
            const{nome_User, email_User, senha_User, dt_nasc, nivel_User, status_User, data_insert, data_update} = req.body
            const alterar_Usuario = await new Usuario (nome_User, email_User, senha_User, dt_nasc, nivel_User, status_User, data_insert, data_update, id_User).Update()
            return res.status(200).json(alterar_Usuario)
        }catch(err){
            console.log("Erro no usuarioController| Alterar Usuario: " + err)
            return res.status(500).json(err)
        }

        }

        static async deleteUsuario(req, res){
            try{
                const { id_User } = req.params
                const delete_Usuario = await new Usuario ('nome_User', 'email_User', 'senha_User', 'status_User', 'dt_nasc', 'nivel_User', 'data_insert', 'data_update', id_User).Delete()
                return res.status(200).json(delete_Usuario)
            }catch(err){
                console.log("Erro no usuarioController | Delete Usuario: " + err)
                return res.status(500).json(err)

            }
        }
}
 