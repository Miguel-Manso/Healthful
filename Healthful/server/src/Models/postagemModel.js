import { poolConnection } from "../../pool.js";

const Connection = await poolConnection()

export class Postagem {
    constructor( idPost, nomePost, textPost, dataInsert, dataUpdate, statusPost, FK_idUser, FK_idCategoria){
        if(idPost == '' || idPost == null || idPost == undefined){
            this.idPost = ''
        }else{
            this.idPost = idPost
        }

        if(nomePost == '' || nomePost == null || nomePost == undefined){
            this.nomePost = ''
        }else{
            this.nomePost = nomePost
        }

        if(textPost == '' || textPost == null || textPost == undefined){
            this.textPost = ''
        }else{
            this.textPost = textPost
        }

        
        if(FK_idUser == '' || FK_idUser == null || FK_idUser == undefined){
            this.FK_idUser = ''
        }else{
            this.FK_idUser = FK_idUser
        }

        if(statusPost == '' || statusPost == null || statusPost == undefined){
            this.statusPost = 1
        }else{
            this.statusPost = 1
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

        if(FK_idCategoria == '' || FK_idCategoria == null || FK_idCategoria == undefined){
            this.FK_idCategoria = ''
        }else{
            this.FK_idCategoria = FK_idCategoria
        }
}

    static async Select(){
        try{
            const { recordset } = await Connection.query('select * from postagem ')
            return recordset
        }
        catch (err)
        {
            console.log("Error no postagemModel | Select | " + err)
            return (err)
        }
    }

    async Insert(){
        try{
            const { rowsAffected } = Connection.query(`insert into postagem  values ('${this.nomePost }', '${this.textPost }', ${this.statusPost }, '${this.dataInsert}', '${this.dataUpdate}')`)
            return rowsAffected //antes tava true
        }
        catch (err)
        {
            console.log("Error no postagemModel | Insert | " + err)
            return (err)
        }
    }

    async Update(){
        try{
            const { rowsAffected } =  await Connection.query(`update postagem  set nomePost = '${this.nomePost}', textPost = '${this.textPost}', statusPost = ${this.statusPost}, dataInsert = '${this.dataInsert}', dataUpdate = '${this.dataUpdate}' where idPost  = ${this.idPost }`)
            return rowsAffected
        }
        catch (err)
        {
            console.log("Error no postagemModel | Update | " + err)
            return (err)
        }
    }

    async Delete(){
        try{
            const { rowsAffected } = await  Connection.query(`delete from postagem  where idPost  = ${this.idPost }`)
            return rowsAffected
        }
        catch (err)
        {
            console.log("Error no postagemModel | Delete | " + err)
            return (err)
        }
    }
}