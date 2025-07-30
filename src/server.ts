import express from "express";

const PORT = 3333; // Define o numero da porta

const app = express(); // Cria uma instância do Express

app.get("/products/:id/:user", (request, response) => {
  const { id, user } = request.params; // Extrai o parâmetro 'id' da URL e 'user'
  response.send(`Produto ${id} do usuário ${user}`); // Envia uma resposta com o ID e User do produto
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)); // Inicia o servidor e exibe uma mensagem no console
