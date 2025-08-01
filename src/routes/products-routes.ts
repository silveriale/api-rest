import { Router } from "express";
import { myMiddleware } from "../middlewares/my-middleware"; // Importa o middleware personalizado
import { ProductsController } from "../controllers/ProductsController";

const productsRoutes = Router();
const productsController = new ProductsController(); // Instancia o controller de produtos

productsRoutes.get("/", productsController.index); // Define a rota GET para listar produtos

productsRoutes.post("/", myMiddleware, productsController.create); // Define a rota POST para criar um produto, usando o middleware

export { productsRoutes }; // Exporta as rotas de produtos para serem usadas no servidor principal
