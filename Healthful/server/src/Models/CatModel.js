import { CreatePool } from "../../database.js";
const Connection = await CreatePool();

export class Categoria{
    constructor(nomeCategoria,idCategoria){
        this.nomeCategoria = nomeCategoria,
        this.idCategoria = idCategoria
    }


    static async ListarCat(){
        try{
            const { recordset } = await Connection.query('select * from categoria')
            return recordset
        }
        catch (err)
        {
            console.log("Error no postagemModel | ListarCat | " + err)
            return (err)
        }
    }


}