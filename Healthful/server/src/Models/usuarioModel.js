import { poolConnection } from "../../pool.js";

const Connection = await poolConnection()

export class Usuario{
    constructor(nomeUser, emailUser, senhaUser, dtNasc, nivelUser, statusUser, dataInsert, dataUpdate, idUser){
        if(nomeUser == '' || nomeUser == null || nomeUser == undefined){
            this.nomeUser = ''
        }else{
            this.nomeUser = nomeUser
        }

        if(emailUser == '' || emailUser == null || emailUser == undefined){
            this.emailUser = ''
        }else{
            this.emailUser = emailUser
        }

        if(senhaUser == '' || senhaUser == null || senhaUser == undefined){
            this.senhaUser = ''
        }else{
            this.senhaUser = senhaUser
        }

        
        if(dtNasc == '' || dtNasc == null || dtNasc == undefined){
            this.dtNasc = ''
        }else{
            this.dtNasc = dtNasc
        }

        if(nivelUser == '' || nivelUser == null || nivelUser == undefined){
            this.nivelUser = 1
        }else{
            this.nivelUser = 1
        }

        if(statusUser == '' || statusUser == null || statusUser == undefined){
            this.statusUser = 1
        }else{
            this.statusUser = 1
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

        //fk em algum canto agui

        if(idUser == '' || idUser == null || idUser == undefined){
            this.idUser = ''
        }else{
            this.idUser = idUser
        }
}

    static async Select(){
        try{
            const { recordset } = await Connection.query('select * from usuario')
            return recordset
        }
        catch (err)
        {
            console.log("Error no usuarioModel | Select | " + err)
            return (err)
        }
    }

    async Insert(){
        try{
            const { rowsAffected } = Connection.query(`insert into usuario values ('${this.nomeUser}', '${this.emailUser}', '${this.senhaUser}', '${this.dtNasc}', ${this.nivelUser}, ${this.statusUser}, '${this.dataInsert}', '${this.dataUpdate}')`)
            return true //talvez rows affected
        }
        catch (err)
        {
            console.log("Error no usuarioModel | Insert | " + err)
            return (err)
        }
    }

    async Update(){
        try{
            const { rowsAffected } =  await Connection.query(`update usuario set nomeUser = '${this.nomeUser}', emailUser = '${this.emailUser}', senhaUser = '${this.senhaUser}', dtNasc = '${this.dtNasc}', nivelUser = ${this.nivelUser}, statusUser = ${this.statusUser}, dataInsert = '${this.dataInsert}', dataUpdate = '${this.dataUpdate}' where idUser = ${this.idUser}`)
            return rowsAffected
        }
        catch (err)
        {
            console.log("Error no usuarioModel | Update | " + err)
            return (err)
        }
    }

    async Delete(){
        try{
            const { rowsAffected } = await  Connection.query(`delete from usuario where idUser = ${this.idUser}`)
            return rowsAffected
        }
        catch (err)
        {
            console.log("Error no usuarioModel | Delete | " + err)
            return (err)
        }
    }
}
