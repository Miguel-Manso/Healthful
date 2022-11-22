import { Postagem } from "../Models/PostModel.js";

export class PostController{

    static async selectPost(req, res){
        try {
            const postagem = await Postagem.ListarPost()
            return res.status(200).json(postagem)
        }
        catch (err)
        {
            console.log("Erro no usuarioController | selectPostagem | " + err)
            return res.status(500).json(err)
        }
    };

    static async InsertPost(req,res){
        try{
            const {tituloPost, textPost,FK_idUser,FK_idCategoria } = req.body
            const postnovo = await new Postagem(tituloPost,textPost, FK_idUser,FK_idCategoria ).NovoPost();
            return res.status(200).json(postnovo);
        }
        catch(err){
            console.log("error controller IncertPost : " + err)
            return res.status(500).json(err)
        };   
    }    
}
