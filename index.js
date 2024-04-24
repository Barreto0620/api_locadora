const express = require('express');
const cors = require('cors');
const filmes = require('./filmes.json');
const path = require('path');

/* Porta onde servidor irá funcionar ! */
const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

/* Definição da rota para os filmes ! */
app.get('/filmes', (req, res) => {
    res.json(filmes);
});

/* Iniciando o servidor ! */
app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}`);
});