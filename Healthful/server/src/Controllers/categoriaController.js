import { Categoria } from "../Models/categoriaModel.js"

export class categoriaController{
    static async selectCategoria (req, res){
        try {
            const categorias = await Categoria.Select()
            return res.status(200).json(categorias)
        }
        catch (err)
        {
            console.log("Erro no categoriaController | selectUsuario | " + err)
            return res.status(500).json(err)
        }
    }

    static async novoCategoria(req, res){
        try {
            const { nomeCategoria,  statusCategoria, dataInsert, dataUpdate } = req.body
            const novo_Categoria = await new Categoria (nomeCategoria,  statusCategoria, dataInsert, dataUpdate ).Insert()
            return res.status(200).json(novo_Categoria)
        }
        catch (err)
        {
            console.log("Erro no categoriaController | novoCategoria | " + err)
            return res.status(500).json(err)
        }
    }

    static async updateCategoria(req, res){
        try{
            const { idCategoria  } = req.params
            const {nomeCategoria,  statusCategoria, dataInsert, dataUpdate} = req.body
            const alterar_Categoria = await new Categoria (nomeCategoria,  statusCategoria, dataInsert, dataUpdate, idCategoria ).Update()
            return res.status(200).json(alterar_Categoria)
        }
        catch (err)
        {
            console.log("Erro no categoriaController | updateCategoria | " + err)
            return res.status(500).json(err)
        }
    }

    static async deleteCategoria(req, res){
        try{
            const { idCategoria  } = req.params
            const {nomeCategoria,  statusCategoria, dataInsert, dataUpdate} = req.body
            const deletar_Categoria = await new Categoria (nomeCategoria,  statusCategoria, dataInsert, dataUpdate, idCategoria ).Delete()
            return res.status(200).json(deletar_Categoria)
        }
        catch (err)
        {
            console.log ("Erro no categoriaController | deleteCategoria | " + err)
            return res.status(500).json(err)
        }
    }


}