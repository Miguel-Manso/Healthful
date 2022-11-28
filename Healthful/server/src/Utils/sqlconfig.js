export const sqlConfig = {
   
   server: '10.68.102.4',
    port: 1433,
    user: 'sa',
    password: 'Admin2018@',
    database: 'healthfulnovo',
    options: {
      enableArithAbort : true,
      encrypt: false,
      trustServerCertificate: true,
    },
    connectionTimeout : 15000,
    pool: {
      max: 10,
      min: 0,
      idleTimeoutMillis: 30000
    },
    
  /*
    server: 'localhost',
    port: 1433,
    user: 'sa',
    password: 'pedro',
    database: 'healthful',
    options: {
      enableArithAbort : true,
      encrypt: false,
      trustServerCertificate: true,
    },
    connectionTimeout : 15000,
    pool: {
      max: 10,
      min: 0,
      idleTimeoutMillis: 30000
    }

    */
}

export const postgreConfig = {
    user: "postgres",
    host: "localhost",
    database: "nodedemo",
    password: "yourpassword",
    port: 5432,
}