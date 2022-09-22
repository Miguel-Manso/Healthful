import { sqlConfig } from "./Utils/database.js";
import sql from 'mssql'

export async function poolConnection(){
    try{

        const pool = new sql.ConnectionPool(sqlConfig)

        await pool.connect()

        return pool
    }
    catch (err)
    {
        return ("Erro na pool | " + err)
    }
}