import express from "express";

const PORT = 3333; // Define o numero da porta

const app = express(); // Cria uma instância do Express

app.get("/", (request, response) => {
  response.send("Hello World Express!"); // Define uma rota que responde com "Hello World!"
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)); // Inicia o servidor e exibe uma mensagem no console
