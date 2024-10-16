// Interceptor criado com axios. Responsável por interceptar requests e responses da API, podendo formatar ou adicionar uma lógica no envio da requisição ou na sua resposta
import axios from "axios";

const apiServer = axios.create({
  baseURL: process.env.BACKEND_API_URL,
});

apiServer.interceptors.response.use(
  (response) => (response.data ? response.data : response),
  (error) => {
    const errorData = error.response;

    return Promise.reject(errorData);
  }
);

export { apiServer };
