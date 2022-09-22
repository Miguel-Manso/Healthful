export const sqlConfig = {
    server: 'localhost', //server: '10.68.102.4',
    port: 1433,
    user: 'sa',
    password: 'capeta', //password: 'Admin2018@',
    database: 'healthful', //O nome original do arquivo bd é "healthfultcc"
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
  
}