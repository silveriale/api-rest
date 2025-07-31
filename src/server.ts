import express from "express";

const PORT = 3333; // Define o numero da porta

const app = express(); // Cria uma instância do Express

app.get("/products", (request, response) => {
  const { page, limit } = request.query; // Extrai os parâmetros de consulta 'page' e 'limit'. /products?page=1&limit=14
  response.send(`Página ${page} de ${limit}`); // Responde com uma mensagem formatada
});
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)); // Inicia o servidor e exibe uma mensagem no console
