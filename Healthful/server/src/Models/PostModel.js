import { CreatePool } from "../../database.js";
const Connection = await CreatePool();

export class Postagem{
    constructor(tituloPost,textPost,FK_idUser,FK_idCategoria,idPost){
        this.tituloPost = tituloPost,
        this.textPost = textPost,
        this.FK_idUser = FK_idUser,
        this.FK_idCategoria = FK_idCategoria,
        this.idPost = idPost
    }

    static async ListarPost(idPost,tituloPost,textPost,FK_idUser,FK_idCategoria){
        try{
            const { recordset } = await Connection.query('select * from postagem ')
            return recordset
        }
        catch (err)
        {
            console.log("Error no postagemModel | ListarPost | " + err)
            return (err)
        }
    }

    async NovoPost(){
        try{
            const { rowsAffected } = await Connection.query(`insert into postagem values ('${this.tituloPost }', '${this.textPost}', ${this.FK_idUser}, ${this.FK_idCategoria})`)
            return rowsAffected
        }
        catch (err)
        {
            console.log("Error no postagemModel | NovoPost | " + err)
            return (err)
        }
    }
    
}