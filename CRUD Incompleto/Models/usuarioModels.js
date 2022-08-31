import { CriacaoPoolSql } from "../pool.js";
const Conexao = await CriacaoPoolSql();

export class Usuario{
    constructor(nome_User, email_User, senha_User, dt_nasc, nivel_User, status_User, data_insert, data_update, id_User){
        this._nome_User = nome_User,
        this._email_User = email_User,
        this._senha_User = senha_User,
        this._dt_nasc = dt_nasc,
        this._nivel_User = nivel_User,
        this._status_User = status_User,
        this._data_insert = data_insert,
        this._data_update = data_update, 
        this._id_User = id_User
    }

    static async SelectAll(){
        try{
            const {recordset} = await Conexao.query('select * from usuario')
            return recordset
        }
        catch(err){
            console.log('erro no script usuarioModel.js | Select All' + err)
            return false

        }
    }

    async Insert(){
        try{
            const { rowsAffected } = await Conexao.query(`insert into usuario values('${this._nome_User}', '${this._email_User}', '${this._senha_User}', '${this._dt_nasc}', ${this._nivel_User}, ${this._status_User}, '${this._data_insert}', '${this._data_update}')`)
            return rowsAffected

        }
        catch(err){
            console.log('erro no script usuarioModel.js | Insert ' + err)
            return false
        }
    }

    async Update(){
        try{
            const { rowsAffected } = await Conexao.query(`update usuario set nome_User = '${this._nome_User}', email_User = '${this._email_User}', senha_User = '${this._senha_User}', dt_nasc = '${this._dt_nasc}', nivel_User = ${this._nivel_User}, status_User = ${this._status_User}, data_insert = '${this._data_insert}', data_update = '${this._data_update}' where id_User = ${this._id_User}`)
            return rowsAffected

        }
        catch(err){
            console.log('erro no script usuarioModel.js | Update ' + err)
            return false
        }
    }

    async Delete(){
        try {
            const { rowsAffected } = await Conexao.query(`delete from usuario where id_User = ${this._id_User}`)
            return rowsAffected
        } 
        catch(err){
            console.log('error no usuarioModel.js | Delete ' + err)
            return (err)
        }
    }
}