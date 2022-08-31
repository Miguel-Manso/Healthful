import sql from "mssql";
import { sqlConfig } from "./Utils/database.js";

export async function teste_conexao(){
    sql.on('error', err => {
        console.log('lib teste_bd.js: ' + err)
        return false;
    })

    const pool = await sql.connect(sqlConfig)
    try{
        if(pool._connected == true)
        {
            console.log("Conexão estabelecida")
            pool.close();
            return true
        }
    }
    catch (err){
        pool.close()
        console.log("Erro test_bd.js: " + err)
        return false
    }
}