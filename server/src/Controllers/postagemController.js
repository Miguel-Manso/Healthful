import { Postagem } from "../Models/postagemModel.js"

export class PostagemController{
    static async selectPostagem (req, res){
        try {
            const postagem = await Postagem.Select()
            return res.status(200).json(postagem)
        }
        catch (err)
        {
            console.log("Erro no usuarioController | selectPostagem | " + err)
            return res.status(500).json(err)
        }
    }

    static async novoPostagem(req, res){
        try {
            const { nomePost, textPost, dataInsert, dataUpdate, statusPost } = req.body
            const novo_Postagem = await new Postagem (nomePost, textPost, dataInsert, dataUpdate, statusPost ).Insert()
            return res.status(200).json(novo_Postagem)
        }
        catch (err)
        {
            console.log("Erro no usuarioController | novoPostagem | " + err)
            return res.status(500).json(err)
        }
    }

    static async updatePostagem(req, res){
        try{
            const { idPost  } = req.params
            const {nomePost, textPost, dataInsert, dataUpdate, statusPost, FK_idUser, FK_idCategoria} = req.body
            const alterar_Postagem = await new Postagem ( idPost, nomePost, textPost, dataInsert, dataUpdate, statusPost, FK_idUser, FK_idCategoria).Update()
            return res.status(200).json(alterar_Postagem)
        }
        catch (err)
        {
            console.log("Erro no usuarioController | updatePostagem | " + err)
            return res.status(500).json(err)
        }
    }

    static async deletePostagem(req, res){
        try{
            const { idPost  } = req.params
            const {nomePost, textPost, dataInsert, dataUpdate, statusPost, FK_idUser, FK_idCategoria} = req.body
            const deletar_Postagem = await new Postagem ( idPost, nomePost, textPost, dataInsert, dataUpdate, statusPost, FK_idUser, FK_idCategoria).Delete()
            return res.status(200).json(deletar_Postagem)
        }
        catch (err)
        {
            console.log ("Erro no usuarioController | deletePostagem | " + err)
            return res.status(500).json(err)
        }
    }

}