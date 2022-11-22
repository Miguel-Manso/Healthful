import { Usuario } from "../Models/UserModel.js";

export class UsuarioController{
    static async selectUsuario (req, res){
        try {
            const usuarios = await Usuario.Select()
            return res.status(200).json(usuarios)
        }
        catch (err)
        {
            console.log("Erro no usuarioController | selectUsuario | " + err)
            return res.status(500).json(err)
        }
    }

    static async novoUsuario(req, res){
        try {
            const { nomeUser, emailUser, senhaUser, nivelUser} = req.body
            const novo_Usuario = await new Usuario (nomeUser, emailUser, senhaUser, nivelUser).Insert()
            return res.status(200).json(novo_Usuario)
        }
        catch (err)
        {
            console.log("Erro no usuarioController | novoUsuario | " + err)
            return res.status(500).json(err)
        }
    }

    static async updateUsuario(req, res){
        try{
            const { idUser } = req.params
            const {nomeUser} = req.body
            const alterar_Usuario = await new Usuario (nomeUser,'', '', '', idUser).Update();
            return res.status(200).json(alterar_Usuario);
        }
        catch (err)
        {
            console.log("Erro no usuarioController | updateUsuario | " + err)
            return res.status(500).json(err)
        }
    }

    static async deleteUsuario(req, res){
        try{
            const { idUser } = req.params
            const {nomeUser, emailUser, senhaUser, nivelUser} = req.body
            const deletar_Usuario = await new Usuario (nomeUser, emailUser, senhaUser, nivelUser, idUser).Delete()
            return res.status(200).json(deletar_Usuario)
        }
        catch (err)
        {
            console.log ("Erro no usuarioController | deleteUsuario | " + err)
            return res.status(500).json(err)
        }
    }

    static async loginUsuario(req, res){ 
        try {
            const {nomeUser, emailUser, senhaUser, dtNasc, nivelUser, statusUser, dataInsert, dataUpdate} = req.body;
            const login_Usuario = await new Usuario(nomeUser, emailUser, senhaUser, dtNasc, nivelUser, statusUser, dataInsert, dataUpdate).Login()
            return res.status(200).json(login_Usuario)
        } 
        catch (error) {
            console.log('Erro no usuarioController | loginUsuario | ' + error)
        }
    }

}