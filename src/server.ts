import express from "express";
import { routes } from "./routes/index"; // Importa as rotas definidas no arquivo index

const PORT = 3333; // Define o numero da porta

const app = express(); // Cria uma instância do Express
app.use(express.json()); // utiliza o JSON como estratégia p representar dados

app.use(routes); // Usa as rotas definidas no arquivo index

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)); // Inicia o servidor e exibe uma mensagem no console
