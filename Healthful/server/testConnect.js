import sql from 'mssql';
import { sqlConfig } from './Utils/database.js';

export async function testConnect(){

    sql.on("error", err =>{
        console.log("Erro no testConnect | " + err)
        return false
    })

    const pool = await sql.connect(sqlConfig)

    try {
        if (pool._connected == true){
            console.log("Conexão Funfando")
            pool.close()
            return true
        }else{
            console.log("Erro na Conexão " + pool)
            pool.close()
            return false
        }

    }
    catch (err)
    {
        console.log(err)
        pool.close()
    }
}