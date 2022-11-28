import { CreatePool } from "../../database.js";
const Connection = await CreatePool();

export class Postagem{
    constructor(tituloPost,textPost,idPost){
        this.tituloPost = tituloPost,
        this.textPost = textPost,
        this.idPost = idPost
    }

    static async ListarPost(){
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
            const { rowsAffected } = await Connection.query(`insert into postagem values ('${this.tituloPost }', '${this.textPost}')`)
            return rowsAffected
        }
        catch (err)
        {
            console.log("Error no postagemModel | NovoPost | " + err)
            return (err)
        }
    }

    async IdLIstaPost(){
        try{
            const { recordset } = await Connection.query(`select * from postagem WHERE idPost = '${this.idPost}' `)
            return recordset
        }
        catch (err)
        {
            console.log("Error no postagemModel | IdLIstaPost | " + err)
            return (err)
        }
    }
    
}