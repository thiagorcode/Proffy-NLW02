import express from 'express';

import routes from './routes'

const app = express();
app.use(express.json()); // Serve para utilizar o método 
app.use(routes);
// Rotas são http://localhost:3001/users - Uma rota que gera uma certa instrução.
// /users  - É um recurso

// Corpo (request Body): Dados para criação ou atualização de um registro.abs
// Route Params: identificar qual recurso eu quero atuallizar ou deletar /:id
// Query params: Paginação, filtos e ordenação.abs


app.listen(3001, () => {
  console.log("API ATIVADA na porta 3001")
})