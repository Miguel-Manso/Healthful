import sql from "mssql";
import { sqlConfig } from "./Utils/database.js";

export async function CriacaoPoolSql(){
    try{
        const pool = new sql.ConnectionPool(sqlConfig)
        await pool.connect();
        return pool

    }

    catch(err){
        console.log(`Erro de Criação da Conexão da Pool: ${err}`)
        return false
    }
}