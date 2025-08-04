// Classe p conseguir diferenciar quando uma exceçãi é gerada por um erro do cliente ou do servidor
class AppError {
  message: string;
  statusCode: number;

  constructor(message: string, statusCode: number = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
}

export { AppError };
