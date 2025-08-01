import { Request, Response } from "express";

class ProductsController {
  /**
   * Métodos q um controller pode ter(até 5, se precisae de maus, cria outro controller):
   * index - GET p listar vários registros.
   * show - GET p exibir um registro específico.
   * create - POST p criar um novo registro.
   * update - PUT p atualizar um registro existente.
   * delete - DELETE p remover um registro.
   */

  index(request: Request, response: Response) {
    const { page, limit } = request.query; // Extrai os parâmetros de consulta 'page' e 'limit'. /products?page=1&limit=14
    response.send(`Página ${page} de ${limit}`); // Responde com uma mensagem formatada
  }

  create(request: Request, response: Response) {
    const { name, price } = request.body; // Extrai os parâmetros 'name' e 'price' do corpo da requisição

    throw new Error("ERRO DE EXEMPLO"); // Lança um erro p demonstrar o tratamento de erros

    response.status(201).json({ name, price, user_id: request.user_id }); // Responde com um JSON, um status 201 (Criado) e inclui o 'user_id' do middleware
  }
}

export { ProductsController };
