require('dotenv').config();

const express = require('express');
const app = express();

//Trazer as rotas criadas
const useRoutes = require('./routes/users');

//Informar que vamos usar uma API
app.use(express.json())
app.use('/api/users', useRoutes)

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
});