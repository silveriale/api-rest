import { Request, Response } from "express";
import { AppError } from "../utils/app-error";

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

    if (!name) {
      throw new AppError("Nome do produto é obrigatório!"); // Lança um erro personalizado se 'name' não for fornecido
    }

    if (name.trim().length < 6) {
      throw new AppError("Nome do produto deve ter pelo menos 6 caracteres!"); // Lança um erro personalizado se 'name' tiver menos de 6 caracteres, o trim remove espaços em branco no início e no final
    }

    if (!price) {
      throw new AppError("Preço do produto é obrigatório!"); // Lança um erro personalizado se 'price' não for fornecido
    }

    if (price <= 0) {
      throw new AppError("Preço do produto deve ser maior que zero!"); // Lança um erro personalizado se 'price' for menor ou igual a zero
    }

    // throw new Error("ERRO DE EXEMPLO"); // Lança um erro p demonstrar o tratamento de erros
    // throw new AppError("Erro de exemplo"); // Lança um erro personalizado com status 401 (Não autorizado)

    response.status(201).json({ name, price, user_id: request.user_id }); // Responde com um JSON, um status 201 (Criado) e inclui o 'user_id' do middleware
  }
}

export { ProductsController };
