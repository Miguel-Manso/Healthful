import { Comentario } from "../Models/comentarioModel.js"

export class ComentarioController{
    static async selectComentario (req, res){
        try {
            const comentario = await Comentario.Select()
            return res.status(200).json(comentario)
        }
        catch (err)
        {
            console.log("Erro no ComentarioController | selectComentario | " + err)
            return res.status(500).json(err)
        }
    }

    static async novoComentario(req, res){
        try {
            const {textoComent, statusComent, dataInsert, dataUpdate } = req.body
            const novo_Comentario = await new Comentario (textoComent, statusComent, dataInsert, dataUpdate ).Insert()
            return res.status(200).json(novo_Comentario)
        }
        catch (err)
        {
            console.log("Erro no ComentarioController | novoComentario | " + err)
            return res.status(500).json(err)
        }
    }

    static async updateComentario(req, res){
        try{
            const { idComent } = req.params
            const {textoComent, statusComent, dataInsert, dataUpdate, FK_idUser, FK_idPost} = req.body
            const alterar_Comentario = await new Comentario (idComent, textoComent, statusComent, dataInsert, dataUpdate, FK_idUser, FK_idPost).Update()
            return res.status(200).json(alterar_Comentario)
        }
        catch (err)
        {
            console.log("Erro no ComentarioController | updateComentario | " + err)
            return res.status(500).json(err)
        }
    }

    static async deleteComentario(req, res){
        try{
            const { idComent } = req.params
            const {textoComent, statusComent, dataInsert, dataUpdate, FK_idUser, FK_idPost } = req.body
            const deletar_Comentario = await new Comentario (idComent, textoComent, statusComent, dataInsert, dataUpdate, FK_idUser, FK_idPost).Delete()
            return res.status(200).json(deletar_Comentario)
        }
        catch (err)
        {
            console.log ("Erro no ComentarioController | deleteComentario | " + err)
            return res.status(500).json(err)
        }
    }

}