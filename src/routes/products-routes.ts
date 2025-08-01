import { Router } from "express";
import { myMiddleware } from "../middlewares/my-middleware"; // Importa o middleware personalizado

const productsRoutes = Router();

// Middleware global
//app.use(myMiddleware); // Usa o middleware personalizado em todas as rotas (globalmente)

productsRoutes.get("/", (request, response) => {
  const { page, limit } = request.query; // Extrai os parâmetros de consulta 'page' e 'limit'. /products?page=1&limit=14
  response.send(`Página ${page} de ${limit}`); // Responde com uma mensagem formatada
});

productsRoutes.post("/ ", myMiddleware, (request, response) => {
  // Define uma rota POST para '/products' e usa o middleware de forma local, em uma rota específica
  const { name, price } = request.body; // Extrai os parâmetros 'name' e 'price' do corpo da requisição
  // response.send(`Produto ${name} custa R$${price}`); // Responde com uma mensagem de sucesso
  response.status(201).json({ name, price, user_id: request.user_id }); // Responde com um JSON, um status 201 (Criado) e inclui o 'user_id' do middleware
});

export { productsRoutes }; // Exporta as rotas de produtos para serem usadas no servidor principal
