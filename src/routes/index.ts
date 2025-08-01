import { Router } from "express";

import { productsRoutes } from "./products-routes";

const routes = Router();

routes.use("/products", productsRoutes); // Define as rotas de produtos

export { routes }; // Exporta as rotas para serem usadas no servidor principal
