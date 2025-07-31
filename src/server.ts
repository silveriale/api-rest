import express from "express";
import { myMiddleware } from "./middlewares/my-middleware"; // Importa o middleware personalizado

const PORT = 3333; // Define o numero da porta

const app = express(); // Cria uma instância do Express
app.use(express.json()); // utiliza o JSON como estratégia p representar dados

app.use(myMiddleware); // Usa o middleware personalizado em todas as rotas (globalmente)

app.get("/products", (request, response) => {
  const { page, limit } = request.query; // Extrai os parâmetros de consulta 'page' e 'limit'. /products?page=1&limit=14
  response.send(`Página ${page} de ${limit}`); // Responde com uma mensagem formatada
});

app.post("/products", (request, response) => {
  const { name, price } = request.body; // Extrai os parâmetros 'name' e 'price' do corpo da requisição
  // response.send(`Produto ${name} custa R$${price}`); // Responde com uma mensagem de sucesso
  response.status(201).json({ name, price }); // Responde com um JSON e status 201 (Criado)
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)); // Inicia o servidor e exibe uma mensagem no console
