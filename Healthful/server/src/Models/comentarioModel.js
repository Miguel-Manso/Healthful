import { poolConnection } from "../../pool.js";

const Connection = await poolConnection()

export class Comentario {
    constructor(idComent, textoComent, statusComent, dataInsert, dataUpdate, FK_idUser, FK_idPost ){
        if(idComent == '' || idComent == null || idComent == undefined){
            this.idComent = ''
        }else{
            this.idComent = idComent
        }

        if(textoComent == '' || textoComent == null || textoComent == undefined){
            this.textoComent = ''
        }else{
            this.textoComent = textoComent
        }

        if(statusComent == '' || statusComent == null || statusComent == undefined){
            this.statusComent = ''
        }else{
            this.statusComent = statusComent
        }

        if(FK_idUser == '' || FK_idUser == null || FK_idUser == undefined){
            this.FK_idUser = ''
        }else{
            this.FK_idUser = FK_idUser
        }

        if(FK_idPost == '' || FK_idPost == null || FK_idPost == undefined){
            this.FK_idPost = ''
        }else{
            this.FK_idPost = FK_idPost
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
            const { recordset } = await Connection.query('select * from comentario')
            return recordset
        }
        catch (err)
        {
            console.log("Error no comentarioModel | Select | " + err)
            return (err)
        }
    }

    async Insert(){
        try{
            const { rowsAffected } = Connection.query(`insert into comentario values ('${this.textoComent }', '${this.statusComent }', '${this.dataInsert }', '${this.dataUpdate }')`)
            return rowsAffected //antes tava true
        }
        catch (err)
        {
            console.log("Error no comentarioModel | Insert | " + err)
            return (err)
        }
    }

    async Update(){
        try{
            const { rowsAffected } =  await Connection.query(`update comentario set textoComent = '${this.textoComent}', statusComent = '${this.statusComent}', dataInsert = '${this.dataInsert}', dataUpdate = '${this.dataUpdate}' where idComent  = ${this.idComent}`)
            return rowsAffected
        }
        catch (err)
        {
            console.log("Error no comentarioModel | Update | " + err)
            return (err)
        }
    }

    async Delete(){
        try{
            const { rowsAffected } = await  Connection.query(`delete from comentario where idComent  = ${this.idComent }`)
            return rowsAffected
        }
        catch (err)
        {
            console.log("Error no comentarioModel | Delete | " + err)
            return (err)
        }
    }

}