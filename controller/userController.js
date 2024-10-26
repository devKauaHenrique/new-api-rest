const pool = require("../config/db");

//Função que será exportada (Create)
exports.create = async (req, res) => {   //async await (avisando que a função vai receber uma promisse)
    const {name, document, email, birthday} = req.body; 

    try {                   //try e catch = promisse 
        const result = await pool.query(
            'INSERT INTO users (name, document, email, birthday) VALUES ($1, $2, $3, $4) RETURNING *',
            [name, document, email, birthday]
        )
        res.status(201).json(result.rows[0]) // 201 = Resposta padrão de "Deu certo"
    } catch (error) {
        console.error(error);
        res.status(500).json({Message: 'Deu erro, tente novamente'}) //500 = resposta de erro de conexão
    }
} 

//Função que será exportada (Read todos)
exports.getAll = async (req, res) => {  
    try {                   //try e catch = promisse 
        const result = await pool.query(
            'SELECT * FROM USERS' 
        )
        res.status(201).json(result.rows[0]) // 201 = Resposta padrão de "Deu certo"
    } catch (error) {
        console.error(error);
        res.status(500).json({Message: 'Deu erro, tente novamente'}) //500 = resposta de erro de conexão
    }
} 

//Função que será exportada (Read por ID)
exports.getOne = async (req, res) => {  
    const {id} = req.params
    try {                   //try e catch = promisse 
        const result = await pool.query(
            'SELECT * FROM users WHERE id = $1', [id] 
        )
        if(result.rows.length === 0){
            res.status(400).json({Message: 'Não encontrado'})
        }
        res.status(201).json(result.rows[0]) // 201 = Resposta padrão de "Deu certo"
    } catch (error) {
        console.error(error);
        res.status(500).json({Message: 'Deu erro, tente novamente'}) //500 = resposta de erro de conexão
    }
} 

//Função que será exportada (Update)
exports.updateOne = async (req, res) => {  
    const {id} = req.params;
    const {name, document, email, birthday} = req.body;

    try {                   //try e catch = promisse 
        const result = await pool.query(
            'UPDATE users SET name = $1, document = $2, email = $3, birthday = $4 WHERE id  = $5 RETURNING *', [id] 
            [name, document, email, birthday]
        )
        if(result.rows.length === 0){
            res.status(400).json({Message: 'Não encontrado'})
        }
        res.status(201).json(result.rows[0]) // 201 = Resposta padrão de "Deu certo"
    } catch (error) {
        console.error(error);
        res.status(500).json({Message: 'Deu erro, tente novamente'}) //500 = resposta de erro de conexão
    }
} 

//Função que será exportada (Read por ID)
exports.delete = async (req, res) => {  
    const {id} = req.params
    try {                   //try e catch = promisse 
        const result = await pool.query(
            'DELETE FROM users WHERE id = $1 RETURNING *', [id] 
        )
        if(result.rows.length === 0){
            res.status(400).json({Message: 'Não encontrado'})
        }
        res.status(201).json(result.rows[0]) // 201 = Resposta padrão de "Deu certo"
    } catch (error) {
        console.error(error);
        res.status(500).json({Message: 'Deu erro, tente novamente'}) //500 = resposta de erro de conexão
    }
} 