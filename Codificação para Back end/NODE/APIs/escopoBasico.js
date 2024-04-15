import http, { request } from "node:http";
const PORT = 3333;

//  Metodos:
// sobre os metodos http tem o:
// Get (solicitar informação)
// Post (envia informação)
// Put (atualizar o objeto como um todo)
// Path (atualizar algo especifico)
// Delete (excluir recursos)

/**
 * Requisição
 * 1. corpo da requisição(aplicação) {request.body} {POST}
 * 2. Parametro de busca (Search PARAMS, QUERY PARAMS) {http://localhost:3333/users/2(parametro de busca "2")} {GET}
 * 3. Paramêtros de ROTA (ROUTE PARAMS) - {http://localhost:3333/users/1} {PUT, PATH, DELETE}
 *  
 */

// Códigos
const users = [];
const server = http.createServer((request, response) => {
  const { method, url } = request;
  
//   logica
});

server.listen(PORT, () => {
  console.log(`servidor on port ${PORT}`);
});
