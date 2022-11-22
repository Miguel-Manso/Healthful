import { CreatePool } from "../../database.js";

const Connection = await CreatePool()

export class Usuario{
    constructor(nomeUser, emailUser, senhaUser, nivelUser, idUser){
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

        if(nivelUser == '' || nivelUser == null || nivelUser == undefined){
            this.nivelUser = 1
        }else{
            this.nivelUser = 1
        }

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
            const { rowsAffected } = Connection.query(`insert into usuario values ('${this.nomeUser}', '${this.emailUser}', '${this.senhaUser}', ${this.nivelUser})`)
            return rowsAffected //antes tava trul
        }
        catch (err)
        {
            console.log("Error no usuarioModel | Insert | " + err)
            return (err)
        }
    }

    async Update(){
        try{
            const { rowsAffected } = Connection.query(`update usuario set nomeUser = '${this.nomeUser}' where idUser = ${this.idUser}`)
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



    async Login(){
        try {
            const { recordset } = await Connection.query(`SELECT emailUser, senhaUser, idUser FROM usuario 
                WHERE emailUser = '${this.emailUser}' and senhaUser = '${this.senhaUser}'`)
            if (recordset.length > 0)
                return recordset
            else
                return false
        } 
        catch (error) 
        {
            console.log('Model error ' + error)
            return error
        }
    }


}