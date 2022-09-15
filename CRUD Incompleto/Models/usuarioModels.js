import { CriacaoPoolSql } from "../pool.js";
const Conexao = await CriacaoPoolSql();

export class Usuario{
    constructor(idUser, nomeUser, emailUser, senhaUser, dtNasc, nivelUser, statusUser, dataInsert, dataUpdate){
        if(idUser == '' || idUser == null || idUser == undefined){
            this._idUser = ''
        }else{
            this._idUser = idUser
        }
        
        if(nomeUser == '' || nomeUser == null || nomeUser == undefined){
            this._nomeUser = ''
        }else{
            this._nomeUser = nomeUser
        }

        if(emailUser == '' || emailUser == null || emailUser == undefined){
            this._emailUser = ''
        }else{
            this._emailUser = emailUser
        }

        if(senhaUser == '' || senhaUser == null || senhaUser == undefined){
            this._senhaUser = ''
        }else{
            this._senhaUser = senhaUser
        }

        if(dtNasc == '' || dtNasc == null || dtNasc == undefined){
            this._dtNasc = ''
        }else{
            this._dtNasc = dtNasc
        }

        if(nivelUser == '' || nivelUser == null || nivelUser == undefined){
            this._nivelUser = 1
        }else{
            this._nivelUser = 1
        }

        if(statusUser == '' || statusUser == null || statusUser == undefined){
            this._statusUser = 1
        }else{
            this._statusUser = 1
        }

        if(dataInsert == '' || dataInsert == null || dataInsert == undefined){
            this._dataInsert = ''
        }else{
            this._dataInsert = dataInsert
        }
        
        if(dataUpdate == '' || dataUpdate == null || dataUpdate == undefined){
            this._dataUpdate = ''
        }else{
            this._dataUpdate = dataUpdate
        }

    
    }

    static async SelectAll(){
        try{
            const {recordset} = await Conexao.query('select * from usuario')
            return recordset
        }
        catch(err){
            console.log('erro no script usuarioModel.js | Select All|' + err)
            return false

        }
    }

    async Insert(){
        try{
            const { rowsAffected } = await Conexao.query(`insert into usuario values('${this._nomeUser}', '${this._emailUser}', '${this._senhaUser}', '${this._dtNasc}', ${this._nivelUser}, ${this._statusUser}, '${this._dataInsert}', '${this._dataUpdate}')`)
            return rowsAffected

        }
        catch(err){
            console.log('erro no script usuarioModel.js | Insert |' + err)
            return false
        }
    }

    async Update(){
        try{
            const { rowsAffected } = await Conexao.query(`update usuario set nomeUser = '${this._nomeUser}', emailUser = '${this._emailUser}', senhaUser = '${this._senhaUser}', dtNasc = '${this._dtNasc}', nivelUser = ${this._nivelUser}, statusUser = ${this._statusUser}, dataInsert = '${this._dataInsert}', dataUpdate = '${this._dataUpdate}' where idUser = ${this._idUser}`)
            return rowsAffected

        }
        catch(err){
            console.log('erro no script usuarioModel.js | Update |' + err)
            return false
        }
    }

    async Delete(){
        try {
            const { rowsAffected } = await Conexao.query(`delete from usuario where idUser = ${this._idUser}`)
            return rowsAffected
        } 
        catch(err){
            console.log('error no usuarioModel.js | Delete |' + err)
            return (err)
        }
    }
}