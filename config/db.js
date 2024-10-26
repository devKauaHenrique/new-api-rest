//Configs para chamar o banco de dados!
const {Pool} = require('pg'); //Chaves para desestruturar o pacote (usar só o que precisamos do pacote, e não tudo)

//Criar conexão
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false,
    }
})

module.exports = pool; //Exportar a conexão 