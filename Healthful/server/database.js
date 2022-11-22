import sql from 'mssql';
import { sqlConfig } from './src/Utils/sqlconfig.js';

    export async function ConnectSqlServerTest(){
        try{
            sql.on('error', err => {
                console.log(`Lib error on database class: ${err}`);
                return false;
            });

            const pool = new sql.ConnectionPool(sqlConfig);
            
            await pool.connect();

            if(JSON.stringify(pool._connected) == 'true')
            {
                console.log('Databse function test connected!');
                await pool.close();
                return true
            }
            else
            {
                console.log(`Databse function test failed!: ${pool}`);
                await pool.close();
                return false
            }
        }   
        catch(err){
            console.log(`Databse function test error: ${err}`);
            return false;
        }

    };

    export async function CreatePool(){
        try{
            const pool = new sql.ConnectionPool(sqlConfig);
            
            await pool.connect();

            return pool;
            
        }
        catch(err){
            console.log(`Erro to create pool connection: ${err}`)
            return false
        }
    };