import { Request, Response, NextFunction } from "express"; // Importa os tipos Request e Response do Express p tipagem


export function myMiddleware(
  request: Request,
  response: Response,
  next: NextFunction
) {
  console.log("Middleware executado!"); // Exibe uma mensagem no console quando o middleware é executado
  next(); // Chama a próxima função de middleware ou rota na pilha
}
