import { Categoria } from "../Models/CatModel.js";

export class CatController{

    static async selectCat(req, res){
        try {
            const categoria = await Categoria.ListarCat()
            return res.status(200).json(categoria)
        }
        catch (err)
        {
            console.log("Erro no usuarioController | selectCat | " + err)
            return res.status(500).json(err)
        }
    };
}