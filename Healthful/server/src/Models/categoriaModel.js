import { poolConnection } from "../../pool.js";

const Connection = await poolConnection()

export class Categoria{
    constructor(idCategoria, nomeCategoria,  statusCategoria, dataInsert, dataUpdate){
        if(idCategoria == '' || idCategoria == null || idCategoria == undefined){
            this.idCategoria = ''
        }else{
            this.idCategoria = idCategoria
        }

        if(nomeCategoria == '' || nomeCategoria == null || nomeCategoria == undefined){
            this.nomeCategoria = ''
        }else{
            this.nomeCategoria = nomeCategoria
        }

        if(statusCategoria == '' || statusCategoria == null || statusCategoria == undefined){
            this.statusCategoria = ''
        }else{
            this.statusCategoria = statusCategoria
        }

        if(dataInsert == '' || dataInsert == null || dataInsert == undefined){
            this.dataInsert = ''
        }else{
            this.dataInsert = dataInsert
        }

        if(dataUpdate == '' || dataUpdate == null || dataUpdate == undefined){
            this.dataUpdate = ''
        }else{
            this.dataUpdate = dataUpdate
        }
}

    static async Select(){
        try{
            const { recordset } = await Connection.query('select * from categoria')
            return recordset
        }
        catch (err)
        {
            console.log("Error no categoriaModel | Select | " + err)
            return (err)
        }
    }

    async Insert(){
        try{
            const { rowsAffected } = Connection.query(`insert into usuario values ('${this.nomeCategoria}', '${this.statusCategoria}', '${this.dataInsert}', '${this.dataUpdate}')`)
            return rowsAffected //antes tava true
        }
        catch (err)
        {
            console.log("Error no categoriaModel | Insert | " + err)
            return (err)
        }
    }

    async Update(){
        try{
            const { rowsAffected } =  await Connection.query(`update categoria set nomeCategoria = '${this.nomeCategoria}', statusCategoria = '${this.statusCategoria}', dataInsert = '${this.dataInsert}', dataUpdate = '${this.dataUpdate}' where idCategoria  = ${this.idCategoria }`)
            return rowsAffected
        }
        catch (err)
        {
            console.log("Error no categoriaModel | Update | " + err)
            return (err)
        }
    }

    async Delete(){
        try{
            const { rowsAffected } = await  Connection.query(`delete from categoria where idCategoria  = ${this.idCategoria}`)
            return rowsAffected
        }
        catch (err)
        {
            console.log("Error no categoriaModel | Delete | " + err)
            return (err)
        }
    }


}